<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Message_content;
use App\Message_user;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('users')->insert([
            ["username"=>"admin",
            'is_active'=>1,
            // password is admin
            "password"=>'$2y$10$Zs/QDI/RRC.zfpVNKCDObuPmGkXBoKsenYUe0DcX315HwdQowAl/y',
            "email"=>'admin@gmail.com',
            "type"=>'Student',
            "avatar"=>'dodo.jpg',
            "cover"=>'xuanthuy.jpg',
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')]
        ]);
        DB::table('users')->insert([    
            ["username"=>"school",
            'is_active'=>1,
            // password is admin
            "password"=>'$2y$10$zReVI7gTWVLvCPQWrEN6P.jDjHEgD9/FDm/dEz8Z2BeBeMCge00KC',
            "email"=>'school@gmail.com',
            "type"=>'School',
            "avatar"=>'uet.png',
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')],
        ]);
        DB::table('users')->insert([
            ["username"=>"company",
            'is_active'=>1,
            "avatar"=>'ghtk.png',
            // password is admin
            "password"=>'$2y$10$WVoUWbmeXH7gZJjf6vd5ie4RY13sxL6NA5.klRH8JPjtfN8Rn9Upi',
            "email"=>'company@gmail.com',
            "type"=>'Company',
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')]
        ]);
        DB::table('users')->insert([
            ["username"=>"qtv",
            'is_active'=>1,
            "avatar"=>'ghtk.png',
            // password is admin
            "password"=>'$2y$10$WVoUWbmeXH7gZJjf6vd5ie4RY13sxL6NA5.klRH8JPjtfN8Rn9Upi',
            "email"=>'qtv@gmail.com',
            "type"=>'Admin',
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')]
        ]);
    }
}