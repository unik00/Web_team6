<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class Job_Experience extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job__experiences')->insert([
            ["name"=>"1 year"],
            ["name"=>"3 year"],
            ["name"=>"5 year"],
            ["name"=>"10 year"]
        ]);
    }
}
