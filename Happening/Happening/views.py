import json
from django.core import serializers
from django.views.generic import TemplateView
from Happening.models import Happening


class HappeningView(TemplateView):
    template_name = 'landing.html'

    def get_context_data(self, **kwargs):
        context = super(HappeningView, self).get_context_data(**kwargs)

        happenings = Happening.objects.all()
        context['happenings'] = happenings
        return context
