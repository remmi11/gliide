import requests
import json

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from gliide.serializers import LinkedinSerializer
from gliide.models import Linkedin
from django.conf import settings

class LinkedinListApiView(APIView):
    def get(self):
        profiles = Linkedin.objects.all()
        serializer = LinkedinSerializer(profiles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        scrapin_res = requests.get('https://api.scrapin.io/enrichment/profile?apikey=%s&linkedinUrl=%s'\
            %(settings.SCRAPIN_API_KEY, request.data.get('url')))

        if scrapin_res.status_code == 200:
            profile = scrapin_res.json()

            if Linkedin.objects.filter(linid=profile['person']['linkedInIdentifier']).exists():
                data = Linkedin.objects.filter(linid=profile['person']['linkedInIdentifier']).first()
                serializer = LinkedinSerializer(data)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                data = {
                    'url': request.data.get('url'), 
                    'data': json.dumps(profile), 
                    'linid': profile['person']['linkedInIdentifier']
                }
                serializer = LinkedinSerializer(data=data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(
                {"error": "Something went wrong with api"},
                status=status.HTTP_400_BAD_REQUEST
            )


class LinkedinDetailApiView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, id):
        try:
            res = Linkedin.objects.get(linid=id)
            serializer = LinkedinSerializer(res)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Linkedin.DoesNotExist:
            return Response(
                {"error": "Object does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )