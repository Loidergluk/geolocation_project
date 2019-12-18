from django.db import models


class GeoPoint(models.Model):
    id_vp = models.CharField(max_length=20, blank=True, null=True, default=None)
    pu = models.CharField(max_length=150, blank=True, null=True, default=None)
    klass = models.CharField(max_length=150, blank=True, null=True, default=None)
    adress = models.CharField(max_length=250, blank=True, null=True, default=None)
    longitude = models.FloatField(max_length=1000000, blank=True, null=True, default=None)
    latitude = models.FloatField(max_length=1000000, blank=True, null=True, default=None)
    kolvols = models.IntegerField(max_length=1000000, blank=True, null=True, default=None)
    mp = models.IntegerField(max_length=1000000, blank=True, null=True, default=None)
    sbol = models.IntegerField(max_length=1000000, blank=True, null=True, default=None)
    ap = models.IntegerField(max_length=1000000, blank=True, null=True, default=None)
    us = models.IntegerField(max_length=1000000, blank=True, null=True, default=None)
    vsp = models.IntegerField(max_length=1000000, blank=True, null=True, default=None)
    platejey = models.IntegerField(max_length=1000000, blank=True, null=True, default=None)
    share_of_pay_mp = models.FloatField(max_length=1000000, blank=True, null=True, default=None)
    share_of_pay_sbol = models.FloatField(max_length=1000000, blank=True, null=True, default=None)
    share_of_pay_ap = models.FloatField(max_length=1000000, blank=True, null=True, default=None)
    share_of_pay_us = models.FloatField(max_length=1000000, blank=True, null=True, default=None)
    share_of_pay_vsp = models.FloatField(max_length=1000000, blank=True, null=True, default=None)

def __str__(self):
    return "s%" % self.id

class Meta:
    verbose_name = 'GeoPoint'
    verbose_name_plural = 'GeoPoints'
