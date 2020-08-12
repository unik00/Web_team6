<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote_User extends Model
{
    protected $fillable = ['user_id', 'user_id_voted', 'score'];
}
