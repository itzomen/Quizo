from django.urls import path
from .views import Quiz, RandomQuestion, QuizQuestion
from django.conf import settings
from django.conf.urls.static import static

app_name='quiz'

urlpatterns = [
    path('', Quiz.as_view(), name='quiz'),
    path('r/<str:topic>/', RandomQuestion.as_view(), name='random'),
    path('q/<str:topic>/', QuizQuestion.as_view(), name='questions'),
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)