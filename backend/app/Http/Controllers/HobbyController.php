<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Hobby;
class HobbyController extends Controller
{
    // add and update
    function addOrUpdate(Request $request){
        $name = $request->name;
        $description = $request->description;
        $hobby = Hobby::where('name', $name)->first();
        if(!$hobby) $hobby = new Hobby;
        $hobby->name = $name;
        $hobby->description = $description;
        DB::beginTransaction();
        try {
            $hobby->touch();
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
            $hobby = Hobby::find($id);
            DB::beginTransaction();
            try {
                $hobby->delete();
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
        $random = $request->random ?? 0;
        $offset = $request->offset ?? 0;
        $limit = $request->limit ?? 10;
        if(!$random) $list = Hobby::limit($limit)->offset($offset)->get();
        else $list = Hobby::all()->random($limit);
        return response()->json(['hobbies' => $list]);
    }
    

}
