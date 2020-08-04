<?php

namespace App;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;
class School extends Model
{
    use Filterable;
    protected $fillable = ['user_id', 'name', 'address', 'phone', 'description'];

}
