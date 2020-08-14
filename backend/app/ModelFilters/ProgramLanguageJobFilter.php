<?php 

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class ProgramLanguageJobFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];
    public function job($id){
        return $this->where('job_id', $id);
    }
    public function programLanguage($id){
        return $this->where('program_language_id', $id);
    }
}
