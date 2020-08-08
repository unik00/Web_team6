docker-compose exec backend php artisan migrate:refresh --force
docker-compose exec backend php artisan passport:install --force
docker-compose exec backend php artisan db:seed --force
