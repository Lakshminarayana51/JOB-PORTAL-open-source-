from django.contrib import admin
from accounts.models import user_login
from accounts.models import Job
# Register your models here.

admin.site.register(user_login)
admin.site.register(Job)