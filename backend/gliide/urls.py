from django.urls import path
from .views import (
    LinkedinListApiView,
    LinkedinDetailApiView
)

urlpatterns = [
    path('', LinkedinListApiView.as_view()),
    path('/<str:id>', LinkedinDetailApiView.as_view()),
]