from django.contrib import admin
from .models import Customer, Category, Product, Game, Wallet, Transaction

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone', 'address', 'date_created')
    list_per_page = 25
    ordering = ('-date_created',)
    search_fields = ('first_name', 'last_name', 'email')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    list_per_page = 25
    ordering = ('name',)
    search_fields = ('name',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'category', 'price')
    list_per_page = 25
    ordering = ('-id',)
    search_fields = ('title', 'description', 'category__name')

    list_select_related = ['category']

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('customer', 'product', 'amount', 'date_created')
    list_per_page = 25
    ordering = ('-date_created',)
    search_fields = ('customer__first_name', 'customer__last_name', 'product__title')

    list_select_related = ['product']

@admin.register(Wallet)
class WalletAdmin(admin.ModelAdmin):
    list_display = ('customer', 'balance')
    list_per_page = 25
    ordering = ('-balance',)
    search_fields = ('customer__first_name', 'customer__last_name')

    list_select_related = ['customer']

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('wallet', 'amount', 'date_created')
    list_per_page = 25
    ordering = ('-date_created',)
    search_fields = ('wallet__customer__first_name', 'wallet__customer__last_name')
