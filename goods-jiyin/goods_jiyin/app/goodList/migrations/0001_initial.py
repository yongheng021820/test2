# Generated by Django 3.0.5 on 2020-05-05 09:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TGoods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goods_name', models.CharField(max_length=200)),
                ('static_goods_number', models.IntegerField()),
            ],
            options={
                'db_table': 't_goods',
            },
        ),
        migrations.CreateModel(
            name='TTask',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('alter_number', models.CharField(blank=True, max_length=10, null=True)),
                ('add_goods_time', models.DateTimeField()),
                ('delet_godds_time', models.DateTimeField()),
                ('goods', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goodList.TGoods')),
            ],
            options={
                'db_table': 't_task',
            },
        ),
    ]
