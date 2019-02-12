from django.db import models

class loginModel (models.Model):
    phone = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20)
