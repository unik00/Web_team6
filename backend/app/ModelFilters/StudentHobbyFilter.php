<?php 

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class StudentHobbyFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];
    public function student($id){
        return $this->where('student_id', $id);
    }
    public function hobby($id){
        return $this->where('hobby_id', $id);
    }
}
