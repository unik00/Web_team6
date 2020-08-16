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
        $this->call('StudentSeeder');
        $this->call('SchoolSeeder');
        $this->call('CompanySeeder');

        $this->call('HobbySeeder');
     //   $this->call('JobSeeder');
        $this->call('LanguageSeeder');
        $this->call('Country');
        $this->call('Program_Language');
        $this->call('Job_Type');
        $this->call('Job_Experience');
        $this->call('Job_availabilty');
        //$this->call('Experience');
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
