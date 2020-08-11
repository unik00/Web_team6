<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like_Post extends Model
{
    protected $fillable = ['user_id', 'post_id'];
}
