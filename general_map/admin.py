from django.contrib import admin
from .models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin

class GeneralMapAdmin(admin.ModelAdmin):
    list_display = [field.name for field in GeoPoint._meta.fields]

    class Meta:
        model = GeoPoint


class GeopointResource(resources.ModelResource):

    class Meta:
        model = GeoPoint




class GeopointAdmin(ImportExportModelAdmin):
    resource_class = GeopointResource


admin.site.register(GeoPoint, GeopointAdmin)

