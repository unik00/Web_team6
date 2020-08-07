<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\School;
use App\Company;
use App\ModelFilters\StudentFilter;
class StudentController extends Controller
{

    function list(Request $request){
        $random = $request->random ?? 0;
        $offset = $request->offset ?? 0;
        $limit = $request->limit ?? 10;
        if(!$random) $list = Student::limit($limit)->offset($offset)->get();
        else $list = Student::all()->random($limit);
        return response()->json(['students' => $list]);
    }
}
