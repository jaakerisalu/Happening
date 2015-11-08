import datetime
from django.utils import timezone
from Happening.models import Happening
from Happening.models import CATEGORIES
from django import forms
from model_utils import Choices

CATEGORIES = Choices((0, 'category1', 'category1'), (1, 'category2', 'category2'))


class HappeningForm(forms.ModelForm):

    category = forms.ChoiceField(choices=CATEGORIES, required=True, widget=forms.Select(attrs={'class': 'form-control'}))

    class Meta:
        model = Happening

        fields = ('name', 'lat', 'lng', 'picture', 'category', 'duration')

    def save(self, *args, **kwargs):
        self.instance.end_date = timezone.now() + datetime.timedelta(minutes=self.cleaned_data['duration'])
        return super(HappeningForm, self).save(*args, **kwargs)




