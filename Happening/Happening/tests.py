from Happening.views import HappeningView
from Happening.models import Happening
from django.core.urlresolvers import reverse, resolve
from django.test import TestCase


class LandingTest(TestCase):
    def test_url(self):
        """
            Test by Jaak to make sure all requests targeting the site root should resolve with the Happening view
        """
        self.assertEqual(reverse("happenings"), "/")
        resolve_result = resolve("/")
        self.assertEqual(resolve_result.func.__name__, HappeningView.as_view().__name__)


class HappeningModelTest(TestCase):
    def test_happening_representation(self):
        happening = Happening(name="New Happening")
        self.assertEqual(str(happening), happening.name)


class HappeningsInitializaionTest(TestCase):
    def test_happening_initialization(self):
        resp = self.client.get('/')
        self.assertEqual(resp.status_code, 200)
        self.assertTrue('happenings' in resp.context)
