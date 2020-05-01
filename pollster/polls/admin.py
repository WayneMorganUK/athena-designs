# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Question, Choice

admin.site.site_header = "Pollster Admin"
admin.site.site_header = "Pollster Admin Area"
admin.site.site_header = "Welcome to the Pollster admin area"

class ChoiceInLine(admin.TabularInline):
  model = Choice
  extra = 3

class QuestionAdmin(admin.ModelAdmin):
  fieldsets = [(None, {'fields': ['question_text']}),
  ('Date Information', {'fields': ['pub_date'], 'classes': ['collapse']}),]
  inlines = [ChoiceInLine]

#admin.site.register(Question)
#admin.site.register(Choice)
admin.site.register(Question, QuestionAdmin)