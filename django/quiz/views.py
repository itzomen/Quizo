from rest_framework import generics
from .models import Quizzes
from .serializers import QuizSerializer


class Quiz(generics.ListAPIView):

    serializer_class = QuizSerializer
    queryset = Quizzes.objects.all()
