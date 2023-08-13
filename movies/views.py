from django.shortcuts import render
from django.http import JsonResponse
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def movie_list(request):
  if request.method == 'GET':
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response({"movies": serializer.data}, status=status.HTTP_200_OK)
  
  if request.method == 'POST':
    serializer = MovieSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(['GET','PUT', 'DELETE'])
def movies_list_id(request, id):
  try:
    movie = Movie.objects.get(id=id)
  except Movie.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
      
  if request.method == 'GET':
    serializer = MovieSerializer(movie)
    return Response(serializer.data)
  
  elif request.method == 'PUT':
    serializer = MovieSerializer(movie, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    movie.delete()
    return Response(status=status.HTTP_200_OK)
    