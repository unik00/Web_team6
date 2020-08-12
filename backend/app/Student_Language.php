<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;
class Student_Language extends Model
{
    use Filterable;
    protected $fillable = ['user_id', 'language_id', 'level'];
}
