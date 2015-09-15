from Happening.views import HappeningView
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic.base import TemplateView


admin.autodiscover()

urlpatterns = [
    url(r'', include('accounts.urls')),
    url(r'^$', TemplateView.as_view(template_name='home.html'), name='home'),
    url(r'^happenings/$', HappeningView.as_view(), name='happenings'),

    url(r'^tagauks/', include(admin.site.urls)),
]
