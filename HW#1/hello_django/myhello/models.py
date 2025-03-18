from django.db import models

# Create your models here.

from django.db import models

# class Post(models.Model):
#     user_id = models.CharField(max_length=100)
#     content = models.TextField(blank=True)
#     photo = models.URLField(blank=True)
#     location = models.CharField(max_length=100)
#     created_at = models.DateTimeField(auto_now_add=True)

# Define Course Model
class Course(models.Model):
    department = models.CharField(max_length=100)
    course_title = models.CharField(max_length=255)
    instructor = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.course_title} - {self.instructor}"
