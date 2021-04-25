from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from datetime import datetime

class User(AbstractUser):
    phone = PhoneNumberField(null=False, blank=True, unique=True)
    is_wedding_planner = models.BooleanField(default=False)
    is_cooker = models.BooleanField(default=False)


class Task(models.Model):
    Title = models.CharField(max_length=64)
    Content = models.CharField(max_length=256)
    CreatedDate = models.DateTimeField(default=datetime.now())
    Budget = models.FloatField()
    Status = models.BooleanField(default=True)
    
    def serialize(self):
        return {
            "id": self.id,
            "title": self.Title,
            "budget": self.Budget,
            "content": self.Content,
            "createdDate": self.CreatedDate.strftime("%b %d %Y, %I:%M %p"),
            "status": self.Status
        }

    def __str__(self):
        return f"{self.Title} - {self.CreatedDate}"


class CookerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialty = models.CharField(max_length=255)

    def __str__(self):
        return f"Cooker  {self.user}"


class WeddingPlannerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address =  models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    def __str__(self):
        return f"Wedding Planner {self.user}"
    
