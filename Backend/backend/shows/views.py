from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ShowSerializer

from .models import Show
# Create your views here.

@api_view(['GET'])
def showsOverview(request):
	tasks = Show.objects.all().order_by('-id')
	serializer = ShowSerializer(tasks, many=True)
	return Response(serializer.data)