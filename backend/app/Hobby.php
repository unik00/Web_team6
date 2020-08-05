<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;
class Hobby extends Model
{
    use Filterable;
    protected $fillable = ['name', 'description'];
}
