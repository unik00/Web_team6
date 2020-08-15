<?php 

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class StudentFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];
    public function name($name)
    {
        return $this->where(function($q) use ($name)
        {
            return $q->where('name', 'LIKE', "%$name%");
        });
    }
    public function phone($phone)
    {
        return $this->where('phone', 'LIKE', "%$phone%");
    }
    public function school($id){
        return $this->where('school_id', $id);
    }
    public function mssv($msv){
        return $this->where('mssv', 'LIKE', "%$msv%");
    }
    public function class($class){
        return $this->where('class', 'LIKE', "%$class%");
    }
    public function gender($gender){
        return $this->where('gender', $gender);
    }
    /*public function programLanguage($id){
        echo "b";
        return $this->related('studentprogramlanguage', 'program_language_id' ,'=', $id);
    }
    public function hobby($id){
        echo "a";
    return $this->related('studenthobby', 'hobby_id' , "=", $id);
    }*/
}
