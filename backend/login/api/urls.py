from rest_framework.routers import DefaultRouter
from .views import loginView

router = DefaultRouter()
router.register(r'', loginView, base_name='loginview')
urlpatterns = router.urls