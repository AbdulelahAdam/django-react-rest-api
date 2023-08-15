from django.db import models

class Movie(models.Model):
  name = models.CharField(max_length=50)
  year = models.IntegerField();
  description = models.CharField(max_length=500)
  poster = models.ImageField(upload_to="img/%y")
  
  def __str__(self):
      return self.name + ' (' + str(self.year) + ')'
  