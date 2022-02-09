from urllib.request import Request
import time
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.
from app.goodList.models import *
from django.views import View

def allGoods(reqeust):
    return render(reqeust, "shangPinJinChu.html")

def getAllGoods(reqeust):
    ret = []
    all_goods = TGoods.objects.all()
    for each in all_goods:
        print(each.goods_name)
        temp = {}
        temp['goods_name'] = each.goods_name
        temp["static_goods_number"] = each.static_goods_number
        ret.append(temp)
    return JsonResponse({"msg":"OK", "data":ret})


class AddApi(View):
    def post(self, reqeust):
        name = reqeust.POST.get("name")
        number = reqeust.POST.get("number")
        if (not name) or (not number):
            return JsonResponse({"msg":"ER"})
        current_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time()))
        obj_goods = TGoods.objects.filter(goods_name=str(name))
        if obj_goods:
            good_id = obj_goods[0].id
            temp_obj = obj_goods[0]
            temp_obj.static_goods_number = temp_obj.static_goods_number + int(number)
            temp_obj.save()
        else:
            temp_obj = TGoods()
            temp_obj.static_goods_number = int(number)
            temp_obj.goods_name = name
            temp_obj.save()
            good_id = temp_obj.id

        task_obj = TTask()
        task_obj.goods_id = good_id
        task_obj.add_goods_time = current_time
        task_obj.alter_number = "+"+str(number)
        task_obj.save()
        return JsonResponse({"msg": "OK"})
    def get(self, request):
        return HttpResponse("get ookk")

class RedApi(View):
    def post(self, request):
        ret = {}
        name = request.POST.get("name")
        number = int(request.POST.get("number"))
        current_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time()))
        obj_goods = TGoods.objects.filter(goods_name=str(name))
        temp_obj = obj_goods[0]
        current_count = temp_obj.static_goods_number
        if current_count > number:
            temp_obj.static_goods_number -= number
            temp_obj.save()

            temp_task = TTask()
            temp_task.goods_id = temp_obj.id
            temp_task.delet_godds_time = current_time
            temp_task.alter_number = "-"+str(number)
            temp_task.save()
            ret["status"] = "OK"
        else:
            ret["status"] = "ER"
            ret["msg"] = "没有这么多库存"
        # print(ret)
        return JsonResponse(ret)

class SelectOut(View):
    def post(self,request):
        ret = {}
        year = request.POST.get("year")
        month = request.POST.get("month")
        if year and month:
            goods = TTask.objects.filter(delet_godds_time__year=year,delet_godds_time__month=month)
        elif year:
            goods = TTask.objects.filter(delet_godds_time__year=year)
        else:
            ret["status"] = "ER"
            ret["msg"] = "查询条件为空"
            return JsonResponse(ret)
        ret["data"] = []
        for each in goods:
            temp = {}
            temp["name"] = each.goods.goods_name
            temp["count"] = str(each.alter_number)[1:]
            temp["date"] = each.delet_godds_time
            ret["data"].append(temp)
        return JsonResponse(ret)


class SelectIN(View):
    def post(self,request):
        ret = {}
        year = request.POST.get("year")
        month = request.POST.get("month")
        if year and month:
            goods = TTask.objects.filter(add_goods_time__year=year, add_goods_time__month=month)
        elif year:
            goods = TTask.objects.filter(add_goods_time__year=year)
        else:
            ret["status"] = "ER"
            ret["msg"] = "查询条件为空"
            return JsonResponse(ret)
        ret["data"] = []
        for each in goods:
            temp = {}
            temp["name"] = each.goods.goods_name
            temp["count"] = str(each.alter_number)[1:]
            temp["date"] = each.add_goods_time
            ret["data"].append(temp)
        return JsonResponse(ret)