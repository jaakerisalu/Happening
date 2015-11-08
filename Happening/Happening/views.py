import datetime
import json
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from django.utils import timezone
from Happening.models import Happening
from Happening.forms import HappeningForm


class HappeningView(TemplateView):
    template_name = 'landing.html'

    def get_context_data(self, **kwargs):
        context = super(HappeningView, self).get_context_data(**kwargs)

        happenings = Happening.objects.filter(end_date__gte=timezone.now())

        form = HappeningForm()
        context['form'] = form
        context['happenings'] = json.dumps([h.serialize() for h in happenings])
        return context


def create(request):
    if request.POST:
        form = HappeningForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()

        return HttpResponseRedirect('/')

