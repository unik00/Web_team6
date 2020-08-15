<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student_Program_Language extends Model
{
    protected $fillable = ['user_id', 'program_language_id', 'level'];
}
