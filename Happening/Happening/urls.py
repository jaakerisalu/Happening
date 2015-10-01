from Happening.views import HappeningView
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic.base import TemplateView


admin.autodiscover()

urlpatterns = [
    url(r'', include('accounts.urls')),
    url(r'^$', HappeningView.as_view(), name='happenings'),

    url(r'^tagauks/', include(admin.site.urls)),
]
