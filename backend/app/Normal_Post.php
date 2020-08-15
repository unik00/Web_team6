<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Normal_Post extends Model
{
    protected $fillable = ['user_id', 'post_id', 'content'];
}
