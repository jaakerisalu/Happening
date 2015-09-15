# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Happening',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Name')),
                ('lat', models.DecimalField(decimal_places=10, blank=True, max_digits=13, null=True, verbose_name='Latitude')),
                ('lng', models.DecimalField(decimal_places=10, blank=True, max_digits=13, null=True, verbose_name='Longtitude')),
            ],
        ),
    ]
