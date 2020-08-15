<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use EloquentFilter\Filterable;
class Program_Language_Job extends Model
{
    use Filterable;
    protected $fillable = ['job_id', 'program_language_id'];
    public function modelFilter()
    {
        return $this->provideFilter(\App\ModelFilters\ProgramLanguageJobFilter::class);
    }
    public function scopeProgramLanguage($query, $id)
    {
        return $query->where('program_language_id', '=', $id);
    }
}
