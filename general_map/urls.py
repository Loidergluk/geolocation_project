from django.urls import path, include
from general_map import views

urlpatterns = [
    path('', views.general_map, name='general_map'),
    #path('tb_filter/', views.general_map.tb_filter, name='tb_filter'),
]
