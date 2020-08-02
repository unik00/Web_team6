<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Message_content;
use App\Message_user;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 100)->create();
        factory(Message_user::class, 100)->create();
        factory(Message_content::class, 20)->create();
    }
}
