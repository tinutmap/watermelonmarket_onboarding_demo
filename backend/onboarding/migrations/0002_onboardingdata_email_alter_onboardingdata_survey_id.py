# Generated by Django 4.2.1 on 2023-05-08 14:43

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('onboarding', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='onboardingdata',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='onboardingdata',
            name='survey_id',
            field=models.UUIDField(default=uuid.UUID('1fe58395-3341-4a4f-a95a-be2da0b570a8'), editable=False),
        ),
    ]
