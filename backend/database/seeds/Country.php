<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class Country extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            DB::table('countries')->insert([
                ["name"=>"Việt Nam"],
                ["name"=>"America"],
                ["name"=>"Ấn độ"],
                ["name"=>"England"]
            ]);
    }
}
