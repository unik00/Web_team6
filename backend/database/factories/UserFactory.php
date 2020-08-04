<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Message_user;
use App\Message_content;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'email' => $faker->unique()->safeEmail,
        'is_active' => true,
        'username' => $faker->unique()->userName,
        'password' => '$2y$10$VAoK8BLxtdmcgAHsIu1u6ODd7XwDSPkAWoB92lA/FMNmJc9s.m1E.', // admin
    ];
});
$factory->define(Message_user::class, function (Faker $faker) {
    return [
        'sender_id' => rand(1, 100),
        'recipient_id' => rand(1, 100)
    ];
});

$factory->define(Message_content::class, function (Faker $faker) {
    return [
        'conversation_id' => rand(1,100),
        'content' => $faker->text(),
        'is_read' => false
    ];
});
