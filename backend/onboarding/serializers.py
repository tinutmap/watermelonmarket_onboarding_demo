from rest_framework import serializers
from .models import OnboardingData

class OnboardingDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=OnboardingData
        fields=['id','survey_id','store_name','gift_card_amount','gift_card_amount_currency','gift_card_price','gift_card_price_currency','crypto_network','crypto_address','email']