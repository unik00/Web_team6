<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Experience extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('experiences')->insert([
            ["user_id"=>1,
            "company_id"=>1,
            "start"=>"2019-01-01",
            "end"=>"2020-01-01",
            "description"=>"Trùm công ty"]
        ]);
    }
}
