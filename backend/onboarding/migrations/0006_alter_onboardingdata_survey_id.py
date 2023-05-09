# Generated by Django 4.2.1 on 2023-05-08 15:18

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('onboarding', '0005_alter_onboardingdata_survey_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='onboardingdata',
            name='survey_id',
            field=models.UUIDField(default=uuid.UUID('90af1958-edb3-11ed-b4b7-4c77cb9781dd'), editable=False),
        ),
    ]
