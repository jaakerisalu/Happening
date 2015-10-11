from Happening.views import HappeningView
from django.core.urlresolvers import reverse, resolve
from django.test import TestCase


class LandingTest(TestCase):
    """
        Test by Jaak to make sure all requests targeting the site root should resolve with the Happening view
    """
    def test_url(self):
        self.assertEqual(reverse("happenings"), "/")
        resolve_result = resolve("/")
        self.assertEqual(resolve_result.func.__name__, HappeningView.as_view().__name__)