from django.shortcuts import render
from rest_framework.decorators import api_view  # type: ignore
from django.core.exceptions import ObjectDoesNotExist
from accounts.models import user_login
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response # type: ignore
from django.http import HttpResponse
from accounts.models import Job

    
@api_view(["POST"])
def login(request, format=None):
    username = request.data.get("username")
    password = request.data.get("password")

    try:
        user_get = user_login.objects.get(username=username)
    except ObjectDoesNotExist:
        return Response({"message": "User does not exist"}, status=404)
    
    if check_password(password, user_get.password):
        return Response({"message": "successful"}, status=200)
    else:
        return Response({"message": "wrong credentials"}, status=401)
'''    
@api_view(["POST"])
def create_user(request, format=None):
    username = request.data.get("username")
    password = request.data.get("password")
    
    if user_login.objects.filter(username=username).exists():
        return Response({"message": "User already existed"}, status=400)
    
    enc_pass = make_password(password)
    obj = user_login(username=username, password=enc_pass)
    obj.save()
    return Response({"message": "User created"}, status=201)'''

from django.contrib.auth.models import User  # Import User model
from django.contrib.auth import hashers  # Import password hashing functions
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_201_CREATED

@api_view(['POST'])
def create_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return JsonResponse({'message': 'User already exists'}, status=HTTP_400_BAD_REQUEST)

    # Use Django's password hashing:
    hashed_password = hashers.make_password(password)
    user = User.objects.create_user(username, None, hashed_password)  # Avoid storing email if not used
    user.save()

    return JsonResponse({'message': 'User created'}, status=HTTP_201_CREATED)
@api_view(["POST"])
def job_data(request,format=None):
    title  = request.data.get("title")
    description = request.data.get("description")
    requirements = request.data.get("requirements")
    location = request.data.get("location")
    if Job.objects.filter(title=title).exists():
      return Response({"message": "User already existed"}, status=400)
    
    obj = Job(title=title, description=description, requirements=requirements, location=location) 
    obj.save()
    return Response({"message": "Job Registered"}, status=201)

@api_view(["GET"])
def initial_call(request,formate=None):
    todo = Job.objects.all().values('id','title','description','requirements','location')
    return Response({
                    "message":" successful",
                    "Job":todo,
                    })

@api_view(["DELETE"])
def delete_application(request,formate=None):
    task_id = request.data['id']
    obj = Job.objects.filter(id = task_id).delete()
    todo = Job.objects.all().values('id','title','description','requirements','location')
    return Response({
                    "message":" successful",
                    "Job":todo,
                    })

@api_view(["PUT"])
def update_application(request,formate=None):
     task_id = request.data['id']
     obj = Job.objects.update(id = task_id)
     

     todo = Job.objects.all().values('id','title','description','requirements','location')
     return Response({
                    "message":" successful",
                    "Job":todo,
                    })
   