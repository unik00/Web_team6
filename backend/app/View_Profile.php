<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class View_Profile extends Model
{
    protected $fillable = ['user_id', 'user_id_viewed', 'time'];
}
