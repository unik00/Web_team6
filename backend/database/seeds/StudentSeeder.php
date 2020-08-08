<?php

use Illuminate\Database\Seeder;
use App\User;
use Carbon\Carbon;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('users')->insert([
            ["user_id"=>1,
            "name"=>"admin",
            "gender"=>"Nam",
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')]
        ]);
        
    }
}