<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message_user extends Model
{
    //
    protected $fillable = ['sender_id', 'recipient_id'];
}
