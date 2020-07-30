<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable 
{
    use HasApiTokens;
    protected $fillable = ['username', 'password', 'email', 'name', 'school_id'];
}
