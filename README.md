# Web_team6. 
BTL_team6. 

## Docker
  
 ```bash
cd dockerBTL 
docker-compose up --build  # Nếu chưa build
docker-compose up   # Khởi động docker-compose  
docker-compose exec backend php artisan migrate:fresh --force  # Khởi tạo lại database
docker-compose exec backend php artisan serve --host=0.0.0.0 --port=8000  # Khởi tạo server backend
docker-compose down # Đóng docker-compose
```
## Backend
```bash
docker-compose exec backend php artisan passport:install # tạo lại key tránh lỗi 500 khi login
docker-compose exec backend php artisan model:filter (User) # tạo filter moder (User)
docker-compose exec backend php artisan db:seed # tạo db tự động
docker-compose exec backend php artisan make:model (User) -m # tạo model User
docker-compose exec backend php artisan make:controller (UserController) # tạo UserController
```
### API
|    Url         |     Header                                     |   Request                       | 
|----------------|------------------------------------------------|---------------------------------|
| `api/auth/login` | `Content-Type: application/json` <br> `X-Requested-With: XMLHttpRequest` |  `{` <br> `   "username" : "admin1da1d1",` <br> `   "password" : "admin1",`<br> `   "remember_me" : false `<br>`}` |
| `api/auth/signup` | `Content-Type: application/json` <br> `X-Requested-With: XMLHttpRequest` | `{`<br>`   "username" : "admin1da1d1",`<br>`    "password" : "admin1",` <br>`    "email" : "admidan1d111@btl.com",`<br>`    "name" : "Hung",`<br>`    "password_confirmation" : "admin1",`<br>`    "type" : "Student"`<br>`}` |
| `api/auth/logout` | `Content-Type: application/json` <br> `X-Requested-With: XMLHttpRequest` <br> `Authorization : {{access_token}}` | |

