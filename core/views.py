from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate, login
from rest_framework.decorators import action, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.mixins import CreateModelMixin, DestroyModelMixin, RetrieveModelMixin,UpdateModelMixin
from django.db.models import Sum,Avg,Max,Min,Count,F,Q
from rest_framework.permissions import AllowAny, DjangoModelPermissions, DjangoModelPermissionsOrAnonReadOnly, IsAdminUser, IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet,GenericViewSet
from .models import Customer, Category, Product, Game, Wallet, Transaction
from .serializers import CustomerSerializer, CategorySerializer, ProductSerializer, GameSerializer, WalletSerializer, TransactionSerializer
from django.views.generic import TemplateView

from django_nextjs.render import render_nextjs_page_sync
def index(request):
    return render_nextjs_page_sync(request)



class ReactAppView(TemplateView):
    template_name = 'index.html'

class LoginViewSet(ModelViewSet):
    def create(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        print("User = " , user  )
        print("username" , username)
        print("password" , password)
        if user is not None:
            login(request, user)
            return Response({'authenticated': True})
        else:
            return Response({'authenticated': False})

    def list(self, request, *args, **kwargs):
        return Response({'detail': 'Method "GET" not allowed.'}, status=405)

    def retrieve(self, request, *args, **kwargs):
        return Response({'detail': 'Method "GET" not allowed.'}, status=405)

    def update(self, request, *args, **kwargs):
        return Response({'detail': 'Method "PUT" not allowed.'}, status=405)

    def partial_update(self, request, *args, **kwargs):
        return Response({'detail': 'Method "PATCH" not allowed.'}, status=405)

    def destroy(self, request, *args, **kwargs):
        return Response({'detail': 'Method "DELETE" not allowed.'}, status=405)



class CustomerViewSet(CreateModelMixin , RetrieveModelMixin , UpdateModelMixin , GenericViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAdminUser]

    # @action(detail=True, permission_classes=[ViewCustomerHistoryPermission])
    # def history(self, request, pk):
    #     return Response('ok')

    def create(self, request, *args, **kwargs):
        (customer, created) = Customer.objects.get_or_create(
            user_id=request.user.id)
       
        serializer = CustomerSerializer(customer, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    @action(detail=False, methods=['GET', 'PUT'], permission_classes=[IsAuthenticated])
    def me(self, request):
        (customer, created) = Customer.objects.get_or_create(
            user_id=request.user.id)
        if request.method == 'GET':
            serializer = CustomerSerializer(customer)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = CustomerSerializer(customer, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.annotate(products_count=Count('products'))
    serializer_class = CategorySerializer


    
    def delete(self , request , pk):
        category = get_object_or_404(Category , pk=pk)
        if category.products.count() > 0:
            return Response({'error': 'This Collection cannot be deleted'})
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category_id']

    def get_serializer_context(self):
        return {'request':self.request} 
        
class GameViewSet(ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class WalletViewSet(ModelViewSet):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer

class TransactionViewSet(ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
