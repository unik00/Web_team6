<?php

use Illuminate\Database\Seeder;
use App\User;
class DatabaseSeeder extends Seeder{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(){
        $this->call('UserSeeder');
        $this->call('HobbySeeder');
        $this->call('JobSeeder');
        $this->call('LanguageSeeder');
    }
}
/*
+-------------------------------+
| Tables_in_BTL                 |
+-------------------------------+
| companies                     |
| followers                     |
| hobbies                       |
| jobs                          |
| languages                     |
| message_contents              |
| message_users                 |
| migrations                    |
| oauth_access_tokens           |
| oauth_auth_codes              |
| oauth_clients                 |
| oauth_personal_access_clients |
| oauth_refresh_tokens          |
| schools                       |
| student__hobbies              |
| student__languages            |
| students                      |
| users                         |
+-------------------------------+
*/