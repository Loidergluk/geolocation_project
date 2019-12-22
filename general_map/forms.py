from django import forms
from .models import *


class GeoPointForm (forms.ModelForm):

    class Meta:
        model = GeoPoint
        exclude = [""]