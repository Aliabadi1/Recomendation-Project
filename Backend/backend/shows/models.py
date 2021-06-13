from django.db import models

# Create your models here.

class Show(models.Model):
    title = models.CharField(max_length=200)
    genres = models.CharField(max_length=200)
    score = models.CharField(max_length=200)
    releaseInfo = models.CharField(max_length=200)
    rank = models.CharField(max_length=200)
    
    def __str__(self):
        return self.title 

    
