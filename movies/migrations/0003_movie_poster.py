# Generated by Django 3.2.20 on 2023-08-15 13:35

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_movie_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='poster',
            field=models.CharField(default=django.utils.timezone.now, max_length=500),
            preserve_default=False,
        ),
    ]
