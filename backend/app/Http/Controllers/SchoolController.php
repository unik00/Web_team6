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
    public function search(Request $request)
    {
        return School::filter($request->all())->get();
    }
}
