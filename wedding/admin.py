from django import forms
from django.contrib import admin
from .models import User, Task, CookerProfile, WeddingPlannerProfile
from django.forms import Textarea

# Register your models here.

class TaskForm(forms.ModelForm):
    Content = forms.CharField( widget=forms.Textarea(attrs={'rows': 5, 'cols': 50}))
    class Meta:
        model = Task
        fields = '__all__'

class TaskAdmin(admin.ModelAdmin):
    form = TaskForm

admin.site.register(User)
admin.site.register(CookerProfile)
admin.site.register(WeddingPlannerProfile)
admin.site.register(Task, TaskAdmin)