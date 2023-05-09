import uuid
from django.db import models

# Create your models here.
class OnboardingData(models.Model):
    id = models.AutoField(primary_key=True)
    survey_id=models.UUIDField(
        editable=False,
        default=uuid.uuid1,
        unique=True
    )
    store_name=models.CharField(max_length=50, null=True)
    gift_card_amount = models.DecimalField(max_digits=20, decimal_places=2,null=True)
    gift_card_amount_currency=models.CharField(max_length=3,null=True)
    gift_card_price = models.DecimalField(max_digits=20, decimal_places=2,null=True)
    gift_card_price_currency=models.CharField(max_length=3,null=True)
    crypto_network=models.CharField(
        choices=[('MATIC', 'Polygon'), ('ETH','Ethereum')],
        default=None, max_length=5,
        null=True
    )
    crypto_address=models.CharField(max_length=128, null=True)
    email=models.EmailField(null=True)

    class Meta:
        verbose_name = "Onboarding Data"
        verbose_name_plural = "Onboarding Data"
        ordering=['id']

    def __str__(self):
        return f"survey {self.survey_id}"

    # def get_absolute_url(self):
    #     return reverse("Onboarding Data_detail", kwargs={"pk": self.pk})
