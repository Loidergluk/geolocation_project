from django.contrib import admin
from .models import *

class GeneralMapAdmin(admin.ModelAdmin):
    list_display = [field.name for field in GeoPoint._meta.fields]

    class Meta:
        model = GeoPoint

admin.site.register(GeoPoint, GeneralMapAdmin)