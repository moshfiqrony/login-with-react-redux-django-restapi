from rest_framework import viewsets
from ..models import loginModel
from .serializers import loginSerializers


class loginView(viewsets.ModelViewSet):
    queryset = loginModel.objects.all()
    serializer_class = loginSerializers