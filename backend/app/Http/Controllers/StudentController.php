<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\Follower;
use App\Company;
use App\ModelFilters\StudentFilter;
class StudentController extends Controller
{

    function list(Request $request){
        $random = $request->random ?? 0;
        $offset = $request->offset ?? 0;
        $limit = $request->limit ?? 10;
        $myid = null;
        if($request->User()) $myid = $request->User()->id;
        $list = array();
        if(!$random) $list = Student::limit($limit)->offset($offset)->get();
        else {
           $list = Student::all();
            if($list->count() < $limit) $limit = $list->count();
            $list->random($limit);
        }

        foreach($list as $ls){
            $id = $ls->user_id;
            if($myid){
                $is_follow = Follower::where('user_id', $myid)->where('user_id_followed', $id)->first();
                $ls->is_follow = ($is_follow) ? true : false;
            }
        }
        return response()->json(['Students' => $list]);
    }
}
