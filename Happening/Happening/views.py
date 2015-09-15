from Happening.models import Happening
from django.views.generic import TemplateView

class HappeningView(TemplateView):
    template_name = 'happening.html'

    def get_context_data(self, **kwargs):
        context = super(HappeningView, self).get_context_data(**kwargs)

        happenings = Happening.objects.filter(name__icontains='sitaks')
        context['happenings'] = happenings
        return context
