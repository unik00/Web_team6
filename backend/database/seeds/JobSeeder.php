<?php
use Illuminate\Database\Seeder;
class JobSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){     
        DB::table('jobs')->insert([
            ["name"=>"front-end developer",
            "description"=>"responsible for implementing visual elements that users see and interact with in a web application."
            ],
            ["name"=>"back-end developer",
            "description"=>"work hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic."
            ],
            ["name"=>"tester",
            "description"=>"write tests and test modules."],
            ["name"=>"drinker",
            "description"=>"drink with customer."]
        ]);
    }
}