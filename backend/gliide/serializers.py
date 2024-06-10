from rest_framework import serializers
from gliide.models import Linkedin

class LinkedinSerializer(serializers.ModelSerializer):
    url = serializers.CharField()
    data = serializers.CharField()
    linid = serializers.CharField()

    class Meta:
        model = Linkedin
        fields = "__all__"