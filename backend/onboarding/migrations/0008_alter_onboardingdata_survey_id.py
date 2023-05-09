# Generated by Django 4.2.1 on 2023-05-08 18:01

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('onboarding', '0007_alter_onboardingdata_survey_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='onboardingdata',
            name='survey_id',
            field=models.UUIDField(default=uuid.UUID('736ca635-b8bb-4ced-bc55-27a92e83b62f'), editable=False, unique=True),
        ),
    ]
