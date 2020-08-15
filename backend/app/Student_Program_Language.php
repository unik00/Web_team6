<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;
class Student_Program_Language extends Model
{
    use Filterable;
    protected $fillable = ['user_id', 'program_language_id', 'level'];
    public function modelFilter()
    {
        return $this->provideFilter(\App\ModelFilters\StudentProgramLanguageFilter::class);
    }
    public function scopeProgramLanguage($query, $id)
    {
        return $query->where('program_language_id', '=', $id);
    }
}
