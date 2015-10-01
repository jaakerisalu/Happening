import json
from django.views.generic import TemplateView
from Happening.models import Happening


class HappeningView(TemplateView):
    template_name = 'landing.html'

    def get_context_data(self, **kwargs):
        context = super(HappeningView, self).get_context_data(**kwargs)

        happenings = Happening.objects.all()
        context['happenings'] = json.dumps([h.serialize() for h in happenings])
        return context
