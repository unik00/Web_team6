<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use EloquentFilter\Filterable;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable 
{
    use HasApiTokens;
    use Filterable;
    protected $fillable = ['username', 'password', 'email'];
}
