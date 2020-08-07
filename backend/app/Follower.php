<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;
class Follower extends Model
{
    use Filterable;
    protected $fillable = ['user_id', 'user_id_followed'];
}
