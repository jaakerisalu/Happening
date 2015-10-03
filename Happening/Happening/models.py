from Happening.helpers import escape
from django.db import models
from django.utils import timezone


class Happening(models.Model):
    name = models.CharField('Name', max_length=255)
    date_added = models.DateTimeField('Date added', default=timezone.now)

    lat = models.CharField('Latitude', max_length=20, null=True, blank=True)
    lng = models.CharField('Longtitude', max_length=20, null=True, blank=True)

    def serialize(self):
        format = ""
        return {
            'name': escape(self.name, quote=True),
            'date_added': self.date_added.strftime("%b %d %Y %H:%M:%S"),
            'lat': str(self.lat),
            'lng': str(self.lng),
        }

