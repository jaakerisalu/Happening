# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Happening', '0003_auto_20151003_0749'),
    ]

    operations = [
        migrations.AddField(
            model_name='happening',
            name='picture',
            field=models.ImageField(upload_to=b'happenings/', null=True, verbose_name=b'Picture', blank=True),
        ),
        migrations.AlterField(
            model_name='happening',
            name='lat',
            field=models.CharField(max_length=20, null=True, verbose_name=b'Latitude', blank=True),
        ),
        migrations.AlterField(
            model_name='happening',
            name='lng',
            field=models.CharField(max_length=20, null=True, verbose_name=b'Longtitude', blank=True),
        ),
    ]
