from Happening.models import Happening
from django import forms


class HappeningForm(forms.ModelForm):

    class Meta:
        model = Happening
        fields = ('name', 'lat', 'lng')