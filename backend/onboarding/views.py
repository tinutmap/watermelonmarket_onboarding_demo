from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OnboardingData
from .serializers import OnboardingDataSerializer
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# @method_decorator(csrf_exempt,name='dispatch')
class OnboardingDataList(APIView):
    def get(self, _, _format=None):
        all_data=  OnboardingData.objects.all() if OnboardingData.objects.all() else [{}]
        serializer=OnboardingDataSerializer(all_data,many=True)
        return Response(serializer.data)

    def post(self, request, _format=None):
        serializer = OnboardingDataSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)