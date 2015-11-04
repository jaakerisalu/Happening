from Happening.helpers import escape
from django.conf import settings
from django.db import models
from django.utils import timezone


class Happening(models.Model):
    name = models.CharField('Name', max_length=255)
    date_added = models.DateTimeField('Date added', default=timezone.now)
    picture = models.ImageField('Picture', upload_to="happenings/", null=True, blank=True)
    lat = models.CharField('Latitude', max_length=20, null=True, blank=True)
    lng = models.CharField('Longtitude', max_length=20, null=True, blank=True)

    def serialize(self):
        format = ""
        return {
            'name': escape(self.name, quote=True),
            'date_added': self.date_added.strftime("%b %d %Y %H:%M:%S"),
            'lat': str(self.lat),
            'lng': str(self.lng),
            'picture': settings.MEDIA_URL + str(self.picture),
        }

    def __str__(self):
        return self.name

