<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = ['user_id', 'name', 'school_id', 'mssv', 'class', 'birthday', 'address', 'gender', 'phone', 'status', 'linkCV', 'linkFB', 'linkGit'];
}
