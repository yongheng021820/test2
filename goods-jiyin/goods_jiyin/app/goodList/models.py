from django.db import models

# Create your models here.


class TGoods(models.Model):
    goods_name = models.CharField(max_length=200)
    static_goods_number = models.IntegerField()

    def __str__(self):
        return self.goods_name

    class Meta:
        db_table = 't_goods'



class TTask(models.Model):
    goods = models.ForeignKey(to=TGoods,on_delete=models.CASCADE)
    alter_number = models.CharField(max_length=10,null=True,blank=True)
    add_goods_time = models.DateTimeField(null=True,blank=True)
    delet_godds_time = models.DateTimeField(null=True,blank=True)

    def __str__(self):
        return self.goods.goods_name

    class Meta:
        db_table = "t_task"



