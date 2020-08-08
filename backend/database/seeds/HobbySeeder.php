<?php
use Illuminate\Database\Seeder;
class HobbySeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){     
        DB::table('hobbies')->insert([
            ["name"=>"sports",
            "description"=>"healthy and balance."
            ],
            ["name"=>"coding",
            "description"=>"thich code la do roi"
            ],
            ["name"=>"girls",
            "description"=>"chasing women"]
        ]);
    }
}