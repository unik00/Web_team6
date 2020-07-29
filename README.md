# Web_team6. 
BTL_team6. 

cd dockerBTL 
docker-compose up   
đợi các container khởi động xong   
docker-compose exec backend php artisan migrate  
docker-compose exec backend php artisan serve --host=0.0.0.0 --port=8000  
