<?php

use Illuminate\Database\Seeder;
use App\User;
use Carbon\Carbon;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('companies')->insert([
            ["user_id"=>3,
            "name"=>"Giao hang tiet kiem",
            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "updated_at" => Carbon::now()->format('Y-m-d H:i:s')]
        ]);
        
    }
}