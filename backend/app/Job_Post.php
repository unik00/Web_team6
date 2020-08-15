<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job_Post extends Model
{
    protected $fillable = ['user_id', 'post_id', 'job_id', 'content'];
}
