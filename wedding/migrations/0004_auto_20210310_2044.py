# Generated by Django 3.1.5 on 2021-03-10 19:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wedding', '0003_auto_20210310_2041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='CreatedDate',
            field=models.DateTimeField(default=datetime.datetime(2021, 3, 10, 20, 44, 21, 197292)),
        ),
    ]
