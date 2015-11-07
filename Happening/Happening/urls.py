from Happening.views import HappeningView
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin


admin.autodiscover()

urlpatterns = [
    url(r'', include('accounts.urls')),
    url(r'^$', HappeningView.as_view(), name='happenings'),

    url(r'^create/$', 'Happening.views.create'),

    url(r'^tagauks/', include(admin.site.urls)),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
