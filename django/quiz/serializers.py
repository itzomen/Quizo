from rest_framework import serializers
from .models import Quizzes


class QuizSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quizzes
        fields = [
            'title',
        ]