<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\School;
use App\Company;
use App\ModelFilters\SchoolFilter;
class SchoolController extends Controller
{
    function list(Request $request){
        $random = $request->random ?? 0;
        $offset = $request->offset ?? 0;
        $limit = $request->limit ?? 10;
        if(!$random) $list = School::limit($limit)->offset($offset)->get();
        else $list = School::all()->random($limit);
        return response()->json(['schools' => $list]);
    }
}
