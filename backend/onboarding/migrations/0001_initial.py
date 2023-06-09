# Generated by Django 4.2.1 on 2023-05-07 13:36

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='OnboardingData',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('survey_id', models.UUIDField(default=uuid.UUID('ce54f1cd-ae38-4804-8bdc-4d278a35ec80'), editable=False)),
                ('store_name', models.CharField(max_length=50)),
                ('gift_card_amount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('gift_card_amount_currency', models.CharField(max_length=3)),
                ('gift_card_price', models.DecimalField(decimal_places=2, max_digits=20)),
                ('gift_card_price_currency', models.CharField(max_length=3)),
                ('crypto_network', models.CharField(choices=[('MATIC', 'Polygon'), ('ETH', 'Ethereum')], default=None, max_length=5)),
            ],
            options={
                'verbose_name': 'Onboarding Data',
                'verbose_name_plural': 'Onboarding Data',
                'ordering': ['id'],
            },
        ),
    ]
