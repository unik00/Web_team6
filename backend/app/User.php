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
    protected $fillable = ['username', 'password', 'email', 'name', 'school_id', 'avatar', 'cover', 'type'];
    protected $casts = ["last_online_at" => "datetime"];
    public function studenthobby()
    {
      //  print_r( $this->hasMany(Student_Hobby::class));
        return $this->hasMany(Student_Hobby::class);
    }
    public function studentprogramlanguage()
    {
        return $this->hasMany(Student_Program_Language::class);
    }
}
