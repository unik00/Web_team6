<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade');

            $table->text('description');
            $table->integer('pay_rate');

            $table->integer('type_id')->unsigned();
            $table->foreign('type_id')->references('id')->on('job__types')->onUpdate('cascade');

            $table->integer('experience_id')->unsigned();
            $table->foreign('experience_id')->references('id')->on('job__experiences')->onUpdate('cascade');
            
            $table->integer('country_id')->unsigned();
            $table->foreign('country_id')->references('id')->on('countries')->onUpdate('cascade');
            
            $table->integer('availabilty_id')->unsigned();
            $table->foreign('availabilty_id')->references('id')->on('job__availabilties')->onUpdate('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
