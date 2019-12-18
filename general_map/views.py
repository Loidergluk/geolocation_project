from django.shortcuts import render


def general_map(request):

    return render(request, "general_map/general_map.html", locals())

