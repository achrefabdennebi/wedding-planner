from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("tasks", views.tasks, name="tasks"),
    path("calendar", views.calendar, name="calendar"),
    path("search", views.search, name="search"),
    path("board", views.board, name="board"),
    path("saveTask", views.createTask , name="createTask"),
    path("delete/<int:task_id>", views.deleteTask, name="deleteTask"),
    path("task/<int:task_id>", views.getTask, name="getTask"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path('accounts/signup/weddingPlanner', views.registerWeddingPlanner, name='wedding_planner_signup'),
    path('accounts/signup/cooker', views.registerCooker , name='cooker_signup'),
    path('accounts/selectUserType', views.selectViewRegistrationType, name='select_user_type'),
    path('profile/settings', views.getSettingsView, name='profile_settings'),
    path('profile/contacts', views.getContactList, name='profile_contacts'),
    path("register", views.register, name="register")
]