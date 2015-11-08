# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Happening', '0005_auto_20151108_1743'),
    ]

    operations = [
        migrations.AlterField(
            model_name='happening',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 11, 8, 18, 4, 11, 841006, tzinfo=utc), verbose_name='End date'),
        ),
    ]
