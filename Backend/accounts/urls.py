from django.urls import path
from .import views as v


urlpatterns = [
   path('login', v.login, name='login'),
   path('create_user', v.create_user, name='create_user'),
   path('job_data', v.job_data, name='job_data'),
   path('initial_call/', v.initial_call, name='initial_call'),
   path('delete_application', v.delete_application, name='delete_application'),
    path('update_application', v.update_application, name='update_application'),

]

