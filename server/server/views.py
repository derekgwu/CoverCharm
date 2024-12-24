from django.http import HttpResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
import json
import requests
import uuid


def home(request):
    return HttpResponse("hello world")

@csrf_exempt
def postletters(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)  
            print(body)
            letter_id = uuid.uuid4()
            new_id = LetterIds.objects.create(email=body['user_id'], letter_id=letter_id)
            letter = Letters.objects.create(letter=body['letter'], letter_0=new_id, l_name=body['name'])

            for regex_instance in body['regex']:
                regex = LetterRegex.objects.create(letter_id = letter_id, regex=str(regex_instance))
            return JsonResponse({'received_value': body})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'error': 'Only POST requests allowed'}, status=400)


@csrf_exempt
@api_view(['GET'])
def getletters(request):
    email = request.query_params.get('email')
    data = LetterIds.objects.select_related('letters').filter(email=email)
    response_data = []
    for item in data:
        letter_info = {
            "email": item.email,
            "letter_id": item.letter_id,
            "letter_name" : item.letters.l_name
        }
        response_data.append(letter_info)
    
    return JsonResponse(response_data, safe=False)


@csrf_exempt
@api_view(['GET'])
def get_letter_content(request):
    id = request.query_params.get('id')
    data = Letters.objects.filter(letter_0=id)
    response_data = []
    for item in data:
        letter_info = {
            "content" : item.letter,
            "name" : item.l_name
        }
        response_data.append(letter_info)
    print(response_data)
    return JsonResponse(response_data, safe=False)