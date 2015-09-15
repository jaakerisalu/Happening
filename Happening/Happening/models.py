from django.db import models
from django.utils import timezone


class Happening(models.Model):
    name = models.CharField('Name', max_length=255)
    date_added = models.DateTimeField('Date added', default=timezone.now)

    lat = models.DecimalField('Latitude', max_digits=13, null=True, blank=True, decimal_places=10)
    lng = models.DecimalField('Longtitude', max_digits=13, null=True, blank=True, decimal_places=10)
