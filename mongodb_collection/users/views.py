from django.shortcuts import render
from .models import person_collection
from django.http import HttpResponse
from django.http import JsonResponse
# Create your views here.
def index(request):
    return HttpResponse("App is running")

def add_user(request):
    records = {
        "first_name" : "John",
        "last_name" : "Smith"
    }
    person_collection.insert_one(records)
    return HttpResponse("new Person added")

def get_all_person(request):
    persons = person_collection.find()
    return HttpResponse(persons)
