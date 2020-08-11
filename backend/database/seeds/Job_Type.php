<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class Job_Type extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job__types')->insert([
            ["name"=>"Web Develop"],
            ["name"=>"Mobile Develop"],
            ["name"=>"Frontend"],
            ["name"=>"Backend"]
        ]);
    }
}
