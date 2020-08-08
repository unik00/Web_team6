<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Message_content;
use App\Message_user;
use Carbon\Carbon;

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

            // password is admin
            "password"=>'$2y$10$Zs/QDI/RRC.zfpVNKCDObuPmGkXBoKsenYUe0DcX315HwdQowAl/y',
            "email"=>'admin@gmail.com',
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')],
            
            ["username"=>"school",

            // password is admin
            "password"=>'$2y$10$zReVI7gTWVLvCPQWrEN6P.jDjHEgD9/FDm/dEz8Z2BeBeMCge00KC',
            "email"=>'school@gmail.com',
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')],

            ["username"=>"company",

            // password is admin
            "password"=>'$2y$10$WVoUWbmeXH7gZJjf6vd5ie4RY13sxL6NA5.klRH8JPjtfN8Rn9Upi',
            "email"=>'company@gmail.com',
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')]
        ]);
        
    }
}