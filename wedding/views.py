import json
from django.contrib.auth import authenticate, login, logout
from django.http.response import JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.db import IntegrityError
from django.core.management.base import CommandError
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt

from .models import User, Task


def index(request):
    return render(request, "wedding/index.html")

# List of tasks
@login_required
def tasks(request):
    taskList = Task.objects.all()
    return render(request, "wedding/tasks.html", {
        "tasks" : taskList
    })

#Save task
@csrf_exempt
@login_required
def createTask(request):
    if (request.method != 'POST'):
        return JsonResponse({"error": "POST request required."}, status=400)

    data = json.loads(request.body)
    content = data["content"]
    
    try: 
        task = Task(
            Title = content['title'],
            Content = content['content'],
            Budget = content['budget']
        )

        task.save()
    except IntegrityError:
            # already been created because we got IntegrityError
            raise CommandError("Task not saved")

    return JsonResponse({'message': 'Task created successfully'}, status=200)

@csrf_exempt
@login_required
def deleteTask(request, task_id):
    if (request.method != 'POST'):
        return JsonResponse({'error', 'POST request required'}, status=400)
    
    try: 
        task = Task.objects.get(id=task_id)
        task.delete()
    except IntegrityError:
            # already been created because we got IntegrityError
            raise CommandError("Task not saved")

    return JsonResponse({'message': 'Task deleted successfully'}, status=200)

def calendar(request):
    return render(request, "wedding/calendar.html")

def search(request):
    return render(request, "wedding/search.html")

def board(request):
    return render(request, "wedding/board.html")

def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("tasks"))
        else:
            return render(request, "wedding/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "wedding/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "auctions/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "wedding/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("tasks"))
    else:
        return render(request, "wedding/register.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))