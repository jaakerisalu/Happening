# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Happening', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='happening',
            name='date_added',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date added'),
        ),
    ]
