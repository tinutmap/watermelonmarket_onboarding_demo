# Generated by Django 4.2.1 on 2023-05-08 15:14

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('onboarding', '0002_onboardingdata_email_alter_onboardingdata_survey_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='onboardingdata',
            name='survey_id',
            field=models.UUIDField(default=uuid.UUID('909dc0fd-fbe3-4d6f-a7ce-3162790d8dad'), editable=False, unique=True),
        ),
    ]
