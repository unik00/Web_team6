<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use EloquentFilter\Filterable;
class Language extends Model
{
    use Filterable;
    protected $fillable = ['name', 'description'];
}
