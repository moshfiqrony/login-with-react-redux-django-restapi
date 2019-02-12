from rest_framework import serializers
from ..models import loginModel

class loginSerializers(serializers.ModelSerializer):
    class Meta:
        model = loginModel
        fields = ('id', 'phone', 'password')