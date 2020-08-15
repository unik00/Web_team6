<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\School;
use App\Company;
use App\Country;
use App\Hobby;
use App\Job;
use App\Job_Availabilty;
use App\Job_Experience;
use App\Job_Type;
use App\Language;
use App\Program_Language;
use App\Program_Language_Job;

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
        $list =  Job::filter($request->all())->paginateFilter();
        foreach($list as $ls){
            $type_id = $ls->type_id;
            $experience_id = $ls->experience_id;
            $country_id = $ls->country_id;
            $availabilty_id = $ls->availabilty_id;

            $type = Job_Type::find($type_id);
            $experience = Job_Experience::find($experience_id);
            $country = Country::find($country_id);
            $availabilty = Job_Availabilty::find($availabilty_id);
            $user = User::find($ls->user_id);

            $userData = null;
            if($user->type == "Student"){
                $userData = Student::where('user_id', $user->id)->first();
            }
            else if($user->type == "School"){
                $userData = School::where('user_id', $user->id)->first();
            }
            else if($user->type == "Company"){
                $userData = Company::where('user_id', $user->id)->first();
            }

            $ls->user_name = $userData->name;
            $ls->type_name = $type->name;
            $ls->experience_name = $experience->name;
            $ls->country_name = $country->name;
            $ls->availabilty_name = $availabilty->name;
            $ls->avatar = $user->avatar;

            $programlg = Program_Language_Job::where('job_id', $ls->id)->get();

           foreach($programlg as $pg){
                $id = $pg->program_language_id;
                $pgl = Program_Language::find($id);
                 $pg->name = $pgl->name;
            }
            $ls->program_language = $programlg;
        }
        return $list;
    }
    public function language(Request $request)
    {
        return Language::filter($request->all())->paginateFilter();
    }
    public function programlanguagejob(Request $request)
    {
        return Program_Language_Job::filter($request->all())->paginateFilter();
    }

}
