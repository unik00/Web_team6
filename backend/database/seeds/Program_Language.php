<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class Program_Language extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('program__languages')->insert([
            ["name"=>"Java",
            "description"=>"Jav a !"
            ],
            ["name"=>"C++",
            "description"=>"Cê cộng cộng"
            ],
            ["name"=>"Python",
            "description"=>"pai thừn"],
            ["name"=>"Php",
            "description"=>"Rip language"]
        ]);
    }
}
