# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Happening', '0004_auto_20151101_2033'),
    ]

    operations = [
        migrations.AddField(
            model_name='happening',
            name='category',
            field=models.IntegerField(choices=[(0, 'category1'), (1, 'category2')], default=0),
        ),
        migrations.AddField(
            model_name='happening',
            name='duration',
            field=models.IntegerField(verbose_name='duration', default=15),
        ),
        migrations.AddField(
            model_name='happening',
            name='end_date',
            field=models.DateTimeField(verbose_name='End date', default=datetime.datetime(2015, 11, 8, 17, 58, 15, 457762, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='happening',
            name='lat',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='Latitude'),
        ),
        migrations.AlterField(
            model_name='happening',
            name='lng',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='Longitude'),
        ),
        migrations.AlterField(
            model_name='happening',
            name='picture',
            field=models.ImageField(upload_to='happenings/', blank=True, null=True, verbose_name='Picture'),
        ),
    ]
