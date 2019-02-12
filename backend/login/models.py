from django.db import models

class loginModel (models.Model):
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
