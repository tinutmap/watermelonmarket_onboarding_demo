# Generated by Django 4.2.1 on 2023-05-08 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('onboarding', '0014_alter_onboardingdata_crypto_network_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='onboardingdata',
            name='crypto_address',
            field=models.CharField(max_length=128, null=True),
        ),
    ]
