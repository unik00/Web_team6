<?php 

namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class JobFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [
       // 'program__language__jobs' => ['job', 'program_language'],
    ];
    public function name($name)
    {
        return $this->where(function($q) use ($name)
        {
            return $q->where('name', 'LIKE', "%$name%");
        });
    }
    public function type($type_id)
    {
        return $this->where('type_id', $type_id);
    }
    public function payMin($pay_rate)
    {
        return $this->where('pay_rate', '>=', $pay_rate);
    }
    public function payMax($pay_rate)
    {
        return $this->where('pay_rate', '<=', $pay_rate);
    }
    public function user($user_id){
        return $this->where('user_id', $user_id);
    }
    public function experience($id){
        return $this->where('experience_id', $id);
    }
    public function country($id){
        return $this->where('country_id', $id);
    }
    public function availabilty($id){
        return $this->where('availabilty_id', $id);
    }
   /*public function programlanguagejobSetup($query)
    { 
        echo "a";
        return $query->programLanguage();
    }*/
    public function programLanguage($id){
        
        return $this->related('programlanguagejob', 'program_language_id' ,'=', $id);
    }

}
