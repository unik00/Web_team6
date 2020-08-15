<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use EloquentFilter\Filterable;
class Student_Hobby extends Model
{
    
    use Filterable;
    protected $fillable = ['user_id', 'hobby_id'];
    public function modelFilter()
    {
        echo "\nmodelfilter\n";
        return $this->provideFilter(\App\ModelFilters\StudentHobbyFilter::class);
    }
    public function scopeHobby($query, $id)
    {
        echo "scope";
        return $query->where('hobby_id', '=', $id);
    }
}