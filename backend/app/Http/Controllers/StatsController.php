<?php

namespace App\Http\Controllers;

use App\Company;
use App\Job;
use App\Language;
use App\Program_Language;
use App\Program_Language_Job;
use App\School;
use App\Student;
use App\Student_Program_Language;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatsController extends Controller
{
    function school(Request $request){
        $school_id = $request->school_id;

        $cntStudent = Student::where('school_id', $school_id)->count();

        $programlanguage = Program_Language::all();
        $statsLanguage = [];
        foreach($programlanguage as $lg){
            $id = $lg->id;
            $name = $lg->name;
            $cnt = DB::table('student__program__languages')->where('program_language_id', $id)->join('students', 'student__program__languages.user_id', '=', 'students.user_id')->where('school_id', $school_id);
            $info = (object)[];
            $info->id = $id;
            $info->name = $name;
            $info->student = $cnt->count();

            $statsLanguage[] = $info;
        }
        return response()->json([
            'success' => true,
            'student' => $cntStudent,
            'languages' => $statsLanguage
        ]);
    }

    function index(Request $request){
        $cntUser = User::all()->count();
        $cntStudent = Student::all()->count();
        $cntSchool = School::all()->count();
        $cntCompany = Company::all()->count();

        $cntJob = Job::all()->count();
        $programlanguage = Program_Language::all();
        $cntLanguage = $programlanguage->count();

        $statsLanguage = [];
        foreach($programlanguage as $lg){
            $id = $lg->id;
            $name = $lg->name;
            $cnt = DB::table('student__program__languages')->where('program_language_id', $id)->join('students', 'student__program__languages.user_id', '=', 'students.user_id');
            $info = (object)[];
            $info->id = $id;
            $info->name = $name;
            $info->student = $cnt->count();

            $statsLanguage[] = $info;
        }

         $programlanguagejob = Program_Language_Job::all();
        $cntProgramLanguageJob = $programlanguagejob->count();

        $statsLanguageJob = [];
        foreach($programlanguage as $lg){
            $id = $lg->id;
            $name = $lg->name;
            $cnt = Program_Language_Job::where('program_language_id', $id)->get();
            $info = (object)[];
            $info->id = $id;
            $info->name = $name;
            $info->job = $cnt->count();

            $statsLanguageJob[] = $info;
        }

        return response()->json([
            'success' => true,
            'user' => $cntUser,
            'student' => $cntStudent,
            'school' => $cntSchool,
            'company' => $cntCompany,
            'language' => $cntLanguage,
            'job' => $cntJob,
            'language_student' => $statsLanguage,
            'language_job' => $statsLanguageJob
        ]);
    }
}
