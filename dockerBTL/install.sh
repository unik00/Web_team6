docker-compose exec backend php artisan migrate:fresh --force
docker-compose exec backend php artisan passport:install --force

docker-compose exec backend composer dump-autoload
docker-compose exec backend php artisan db:seed --force
