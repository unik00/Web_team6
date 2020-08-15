<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class Job_availabilty extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job__availabilties')->insert([
            ["name"=>"Hourly"],
            ["name"=>"Part time"],
            ["name"=>"Full time"]
        ]);
    }
}
