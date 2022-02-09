
from django.conf.urls import url
from .views import *

urlpatterns = [
    url('index/', allGoods),
    url('all_goods/', getAllGoods),
    url('add_goods/', AddApi.as_view()),
    url('red_goods/', RedApi.as_view()),
    url('select_out/', SelectOut.as_view()),
    url('select_in/', SelectIN.as_view()),
]




