from django.http import HttpResponse
from django.http import JsonResponse
#from django.views.decorators.csrf import csrf_exempt
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