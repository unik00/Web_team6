<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Language;
class LanguageController extends Controller
{
    // add and update
    function addOrUpdate(Request $request){
        $name = $request->name;
        $description = $request->description;
        $language = Language::where('name', $name)->first();
        if(!$language) $language = new Language;
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
            $language = Language::find($id);
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

    function list(Request $request){
        $list = Language::all();
        return response()->json([
            'success' => true, 
            'program_languages' => $list
        ]);
    }
    

}
