from django.http import HttpResponse
from django.http import JsonResponse
from django.middleware.csrf import get_token
import json
import requests

def home(request):
    return HttpResponse("hello world")


def postletters(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)  # Parse JSON payload
            print(body)
            return JsonResponse({'received_value': body})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'error': 'Only POST requests allowed'}, status=400)



def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})