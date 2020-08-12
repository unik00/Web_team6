<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student_Program_Language;
use Illuminate\Support\Facades\DB;
use App\Program_Language;

class Student_Program_LanguageController extends Controller
{
    function addOrUpdateLanguage(Request $request){
        $user_id = $request->User()->id;
        $program_language_id = $request->program_language_id;
        $level = $request->level;
        if($level < 0 || $level > 100){
            return response()->json([
                'success' => false,
                'message' => 'Kinh nghiệm không hợp lệ'
            ]);
        }
        $student_lg = null;
        $student_lg = Student_Program_Language::where('user_id', $user_id)->where('program_language_id', $program_language_id)->first();
        DB::beginTransaction();
        try {
            if($student_lg){
                $student_lg->level = $level;
                $student_lg->save();
            } else {
                $student_lg = new Student_Program_Language;
                $student_lg->user_id = $user_id;
                $student_lg->program_language_id = $program_language_id;
                $student_lg->level = $level;
                $student_lg->save();
            }
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Nhập ngôn ngữ thành công'
            ]);
        } catch (\Exception $e){
            DB::rollback();
            return response()->json([
                'success' => false,
                'message' => 'Lỗi hệ thống. Vui lòng thử lại.'
            ]);
        }
        
    }

    function removeLanguage(Request $request){
        $user_id = $request->User()->id;
        $id = $request->id;
        DB::beginTransaction();
        try{
            Student_Program_Language::find($id)->delete();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Xoá ngôn ngữ thành công'
            ]);
        } catch(\Exception $e){
            DB::rollback();
            return response()->json([
                'success' => false,
                'message' => 'Lỗi hệ thống. Vui lòng thử lại.'
            ]);
        }
    }

    function getLanguage(Request $request){
        $user_id = $request->id;
        $list = Student_Program_Language::where('user_id', $user_id)->get();
        foreach($list as $ls){
            $program_language_id = $ls->program_language_id;
            $language = Program_Language::find($program_language_id);
            $ls->program_language_name = $language->name;
        }
        return response()->json([
            'success' => true,
            'languages' => $list
        ]);
    }
}
