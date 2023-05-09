from onboarding.models import OnboardingData


entry = OnboardingData(
    store_name='amazon',
    gift_card_amount=10,
    gift_card_amount_currency='EUR',
    gift_card_price=5,
    gift_card_price_currency='USD',
    crypto_network='ETH',
    email='test@test.com',
)
entry.save()
entry = OnboardingData(
    store_name='walmart',
    gift_card_amount=15.20,
    gift_card_amount_currency='USD',
    gift_card_price=5.25,
    gift_card_price_currency='CAD',
    crypto_network='MATIC',
    # email='test@test.com',
)
entry.save()
OnboardingData.objects.all()


"""
{
    "store_name": "walmart",
    "gift_card_amount": "15.20",
    "gift_card_amount_currency": "USD",
    "gift_card_price": "5.25",
    "gift_card_price_currency": "CAD",
    "crypto_network": "MATIC",
    "email": "abc@abc.com"
}
"""