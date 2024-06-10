from django.db import models

# Create your models here.
class Linkedin(models.Model):
    id = models.AutoField(primary_key=True)
    url = models.CharField()
    data = models.TextField()
    linid = models.CharField()

    def __str__(self):
        return self.url

    class Meta:
        db_table = "linkedin"