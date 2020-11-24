from rest_framework import serializers
from .models import Quizzes, Questions


class QuizSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quizzes
        fields = [
            'title',
        ]

class RandomQuestionSerializer(serializers.ModelSerializer):

    answer = serializers.StringRelatedField(many=True)

    class Meta:
        
        model = Questions
        fields = [
            'title',
            'answer',
        ]