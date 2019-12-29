from django.db import models


class GeoPoint(models.Model):
    id_vp = models.CharField(max_length=20, blank=True, null=True, default=None)
    pu = models.CharField(max_length=150, blank=True, null=True, default=None)
    klass = models.CharField(max_length=150, blank=True, null=True, default=None)
    adress = models.CharField(max_length=250, blank=True, null=True, default=None)
    longitude = models.FloatField(blank=True, null=True, default=None)
    latitude = models.FloatField(blank=True, null=True, default=None)
    count_ls = models.IntegerField(blank=True, null=True, default=None)
    mp = models.IntegerField(blank=True, null=True, default=None)
    sbol = models.IntegerField(blank=True, null=True, default=None)
    ap = models.IntegerField(blank=True, null=True, default=None)
    us = models.IntegerField(blank=True, null=True, default=None)
    vsp = models.IntegerField(blank=True, null=True, default=None)
    count_pay = models.IntegerField(blank=True, null=True, default=None)
    share_of_pay_mp = models.FloatField(blank=True, null=True, default=None)
    share_of_pay_sbol = models.FloatField(blank=True, null=True, default=None)
    share_of_pay_ap = models.FloatField(blank=True, null=True, default=None)
    share_of_pay_us = models.FloatField(blank=True, null=True, default=None)
    share_of_pay_vsp = models.FloatField(blank=True, null=True, default=None)
    region = models.CharField(max_length=40, blank=True, null=True, default=None)
    city = models.CharField(max_length=40, blank=True, null=True, default=None)
    tb = models.CharField(max_length=30, blank=True, null=True, default=None)

def __str__(self):
    return "s%" % self.id

class Meta:
    verbose_name = 'GeoPoint'
    verbose_name_plural = 'GeoPoints'
