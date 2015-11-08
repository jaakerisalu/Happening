# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('Happening', '0006_auto_20151108_1749'),
    ]

    operations = [
        migrations.AlterField(
            model_name='happening',
            name='category',
            field=models.IntegerField(choices=[(0, 'Pidu'), (1, 'Muu')], default=0),
        ),
        migrations.AlterField(
            model_name='happening',
            name='end_date',
            field=models.DateTimeField(verbose_name='End date', default=datetime.datetime(2015, 11, 8, 19, 4, 8, 771967, tzinfo=utc)),
        ),
    ]
