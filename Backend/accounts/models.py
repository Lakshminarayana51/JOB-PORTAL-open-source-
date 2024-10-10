from django.db import models
# Create your models here.


class user_login(models.Model):
    username = models.CharField(max_length=30, blank=False, unique=True)
    password = models.CharField(max_length=100, blank=False)


class Job(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    requirements = models.TextField()
    location = models.CharField(max_length=100)

  