from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime

class User(AbstractUser):
    pass

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
            "content": self.Content,
            "createdDate": self.CreatedDate.strftime("%b %d %Y, %I:%M %p"),
            "status": self.Status
        }

    def __str__(self):
        return f"{self.Title} - {self.CreatedDate}"
