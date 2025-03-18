from django.urls import path
from . import views

urlpatterns=[
    # path('',views.HelloApiView.as_view(),name='index'),
    path('addcourse', views.addcourse, name='addcourse'),
    path('courselist', views.courselist, name='courselist'),
]