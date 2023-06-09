# Generated by Django 4.2.1 on 2023-05-08 18:16

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('onboarding', '0012_alter_onboardingdata_survey_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='onboardingdata',
            name='survey_id',
            field=models.UUIDField(default=uuid.uuid1, editable=False, unique=True),
        ),
    ]
