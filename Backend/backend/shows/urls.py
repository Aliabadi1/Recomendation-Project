from django.urls import path
from . import views

urlpatterns = [
	path('', views.showsOverview, name="show-overview"),
]
