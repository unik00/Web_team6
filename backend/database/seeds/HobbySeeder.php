<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class HobbySeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){     
        DB::table('hobbies')->insert([
            ["name"=>"Sports",
            "description"=>"Healthy and balance."
            ],
            ["name"=>"Coding",
            "description"=>"Thích học code."
            ],
            ["name"=>"Girls",
            "description"=>"Chasing women."]
        ]);
    }
}