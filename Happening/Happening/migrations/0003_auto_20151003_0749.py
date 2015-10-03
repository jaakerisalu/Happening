# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Happening', '0002_happening_date_added'),
    ]

    operations = [
        migrations.AlterField(
            model_name='happening',
            name='lat',
            field=models.CharField(max_length=13, verbose_name='Latitude', null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='happening',
            name='lng',
            field=models.CharField(max_length=13, verbose_name='Longtitude', null=True, blank=True),
        ),
    ]
