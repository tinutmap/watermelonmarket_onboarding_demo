# Generated by Django 4.2.1 on 2023-05-08 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('onboarding', '0008_alter_onboardingdata_survey_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='onboardingdata',
            name='survey_id',
            field=models.UUIDField(editable=False, unique=True),
        ),
    ]
