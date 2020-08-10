<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class LanguageSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){     
        DB::table('languages')->insert([
            ["name"=>"English",
            "description"=>"he second most popular language."
            ],
            ["name"=>"Vietnamese",
            "description"=>"The language of vietcong soldiers."
            ],
            ["name"=>"Japanese",
            "description"=>"nan desu ka?"],
            ["name"=>"Chinese",
            "description"=>"Spoken by many many people."]
        ]);
    }
}
# yyyy-mm-dd hh:mm:ss 