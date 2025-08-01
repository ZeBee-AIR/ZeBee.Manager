from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('manager.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
]
