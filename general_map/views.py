from django.shortcuts import render
from .models import GeoPoint
from django.core import serializers


def general_map(request):
    geopoints = GeoPoint.objects.filter()

    json_serializer = serializers.get_serializer("json")()
    geopoints_list = json_serializer.serialize(GeoPoint.objects.filter()[:5], ensure_ascii=False)

    return render(request, "general_map/general_map.html", locals())

