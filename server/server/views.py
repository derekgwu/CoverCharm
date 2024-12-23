from django.http import HttpResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
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
            letter_id = uuid.uuid4()
            new_id = LetterIds.objects.create(email=body['user_id'], letter_id=letter_id)
            letter = Letters.objects.create(letter=body['letter'], letter_0=new_id)

            for regex_instance in body['regex']:
                regex = LetterRegex.objects.create(letter_id = letter_id, regex=str(regex_instance))
            return JsonResponse({'received_value': body})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'error': 'Only POST requests allowed'}, status=400)



def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})