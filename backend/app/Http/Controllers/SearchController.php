<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\School;
use App\Company;
use App\Hobby;
use App\Job;
use App\Language;
class SearchController extends Controller
{
    public function student(Request $request)
    {
       // return $request->all();
        return Student::filter($request->all())->paginateFilter();
    }
    public function school(Request $request)
    {
       // return $request->all();
        return School::filter($request->all())->paginateFilter();
    }
    public function company(Request $request)
    {
       // return $request->all();
        return Company::filter($request->all())->paginateFilter();
    }
    public function hobby(Request $request)
    {
        return Hobby::filter($request->all())->paginateFilter();
    }
    public function job(Request $request)
    {
        return Job::filter($request->all())->paginateFilter();
    }
    public function language(Request $request)
    {
        return Language::filter($request->all())->paginateFilter();
    }

}
