from django.shortcuts import render
from .models import GeoPoint
from django.core import serializers
from django.http import JsonResponse


def general_map(request):

    # Clearing DB script

    # while GeoPoint.objects.count():
    #    ids = GeoPoint.objects.values_list('pk', flat=True)[:100]
    #    GeoPoint.objects.filter(pk__in=ids).delete()

    geopoints = GeoPoint.objects.filter()

    data = request.POST

    json_serializer = serializers.get_serializer("json")()
    #geopoints_list = json_serializer.serialize(GeoPoint.objects.filter(tb=data.get('tb', ''), region=data.get('region', ''),
    #                                         city=data.get('city', ''), klass=data.get('klass', ''))[:3000], ensure_ascii=False)

    geopoints_list = json_serializer.serialize(GeoPoint.objects.filter()[:10], ensure_ascii=False)

    if request.method == "POST":

        print(request.POST)
        data = request.POST

        if data.get('filter', '') == 'tb':
            return JsonResponse(list(GeoPoint.objects.order_by().values('tb').distinct()), safe=False)
        elif data.get('filter', '') == 'region':
            return JsonResponse(
                list(GeoPoint.objects.filter(tb=data.get('tb', '')).order_by().values('region').distinct()), safe=False)
        elif data.get('filter', '') == 'city':
            return JsonResponse(
                list(GeoPoint.objects.filter(tb=data.get('tb', ''), region=data.get('region', '')).order_by().values(
                    'city').distinct()), safe=False)
        elif data.get('filter', '') == 'klass':
            return JsonResponse(
                list(GeoPoint.objects.filter(tb=data.get('tb', ''), region=data.get('region', ''),
                                             city=data.get('city', '')).order_by().values('klass').distinct()),
                safe=False)
        elif data.get('filter', '') == 'pu':
            return JsonResponse(
                list(GeoPoint.objects.filter(tb=data.get('tb', ''), region=data.get('region', ''),
                                             city=data.get('city', ''), klass=data.get('klass', '')).order_by().values(
                    'pu').distinct()), safe=False)
        elif data.get('filter', '') == 'load_data':

            filters = {}

            for key, value in data.items():
                if value != '' and key in ['tb', 'region', 'city', 'klass', 'pu']:
                    filters[key] = value
            print(filters)
            #print(json_serializer.serialize(GeoPoint.objects.filter(tb=data.get('tb', ''), region=data.get('region', ''),
            #                                city=data.get('city', ''), klass=data.get('klass', ''), pu=data.get('pu', ''))[:10], ensure_ascii=False))
            return JsonResponse(json_serializer.serialize(GeoPoint.objects.filter(**filters)[:10000], ensure_ascii=False), safe=False)

    return render(request, "general_map/general_map.html", locals())


def tb_filter(request):
    return_dict = dict()
    print(request.POST)
    data = request.POST

    #temp = data.get('')

    tb_result = GeoPoint.objects.order_by().values('tb').distinct()
    return_dict["tb_list"] = tb_result

    return JsonResponse(return_dict)
