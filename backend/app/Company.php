<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;
class Company extends Model
{
    use Filterable;
    protected $fillable = ['user_id', 'name', 'address', 'phone', 'description'];
}
