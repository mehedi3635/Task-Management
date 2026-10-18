from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
 queryset = Task.objects.all() # what rows this endpoint sees
 serializer_class = TaskSerializer 