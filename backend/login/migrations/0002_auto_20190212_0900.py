# Generated by Django 2.1.7 on 2019-02-12 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loginmodel',
            name='phone',
            field=models.CharField(max_length=20, unique=True),
        ),
    ]
