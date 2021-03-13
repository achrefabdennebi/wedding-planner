from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("tasks", views.tasks, name="tasks"),
    path("calendar", views.calendar, name="calendar"),
    path("search", views.search, name="search"),
    path("board", views.board, name="board"),
    path("saveTask", views.createTask , name="createTask"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register")
]