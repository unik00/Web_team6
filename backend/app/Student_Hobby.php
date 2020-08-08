<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use EloquentFilter\Filterable;
class Student_Hobby extends Model
{
    
    use Filterable;
    protected $fillable = ['user_id', 'hobby_id'];
}