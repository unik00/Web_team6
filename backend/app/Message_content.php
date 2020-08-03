<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message_content extends Model
{
    //
    protected $fillable = ['content', 'is_read'];
}
