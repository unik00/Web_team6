<?php

namespace App\Http\Controllers;

use App\Program_Language;
use App\Program_Language_Job;
use Illuminate\Http\Request;

class Program_LanguageController extends Controller
{
    function list(){
        $list = Program_Language::all();
        return response()->json([
            'success' => true, 
            'program_languages' => $list
        ]);
    }
    function addToJob(Request $request){
        $job_id = $request->job_id;
        $program_language_id = $request->program_language;
        foreach($program_language_id as $programlanguage_id){
            $pgl_j = null;
            $pgl_j = Program_Language_Job::where('job_id', $job_id)->where('program_language_id', $programlanguage_id)->first();
            if(!$pgl_j){
                $pgl_j = new Program_Language_Job;
                $pgl_j->job_id = $job_id;
                $pgl_j->program_language_id = $programlanguage_id;
                $pgl_j->save();
            }
        }
        return response()->json(['success'=>true, 'message' => 'Thêm ngôn ngữ thành công']);
    }
}
