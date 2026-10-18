from django.db import models


class Task(models.Model):
 title = models.CharField(max_length=200)
 description = models.TextField(blank=True) # optional
 is_completed = models.BooleanField(default=False)
 created_at = models.DateTimeField(auto_now_add=True) # stamped once
 updated_at = models.DateTimeField(auto_now=True) # stamped every save
 
 class Meta:
  ordering = ["-created_at"] # newest first, everywhere
 
 def __str__(self):
  return self.titl