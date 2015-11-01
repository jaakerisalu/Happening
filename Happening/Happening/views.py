
import json
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.views.generic import TemplateView
from Happening.models import Happening
from Happening.forms import HappeningForm
from django.core.context_processors import csrf


class HappeningView(TemplateView):
    template_name = 'landing.html'

    def get_context_data(self, **kwargs):
        context = super(HappeningView, self).get_context_data(**kwargs)

        happenings = Happening.objects.all()
        context['happenings'] = json.dumps([h.serialize() for h in happenings])
        return context


def create(request):
    if request.POST:
        form = HappeningForm(request.POST, request.FILES)
        if form.is_valid():
            picture = Happening(picture = request.FILES['picture'])
            form.save()


        return HttpResponseRedirect('/')

