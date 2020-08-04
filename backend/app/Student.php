<?php

namespace App;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use Filterable;
    
    protected $fillable = ['user_id', 'name', 'school_id', 'mssv', 'class', 'birthday', 'address', 'gender', 'phone', 'status', 'linkCV', 'linkFB', 'linkGit'];
}
