<?php

namespace App\Http\Controllers;

use App\Program_Language;
use App\Program_Language_Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class Program_LanguageController extends Controller
{
    function list(){
        $list = Program_Language::all();
        return response()->json([
            'success' => true, 
            'program_languages' => $list
        ]);
    }

    function addOrUpdate(Request $request){
        $name = $request->name;
        $description = $request->description;
        $language = Program_Language::where('name', $name)->first();
        if(!$language) $language = new Program_Language;
        $language->name = $name;
        $language->description = $description;
        DB::beginTransaction();
        try {
            $language->touch();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Tạo thành công'
            ]);
        } catch (\Exception $e) {
            DB::rollback(); // database query error
            return response()->json([
            'success' => false,
            'message' => 'Lỗi hệ thống. Vui lòng thử lại sau !'
            ]);
        }
    }

    function remove(Request $request){
        $id = $request->id;
        if($id){
            $language = Program_Language::find($id);
            DB::beginTransaction();
            try {
                $language->delete();
                DB::commit();
                return response()->json([
                    'success' => true,
                    'message' => 'Xoá thành công'
                ]);
            } catch (\Exception $e) {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Lỗi hệ thống. Vui lòng thử lại sau !'
                ]);
            }
        }
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
