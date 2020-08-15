<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Hobby;
use App\Student_Hobby;

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
        $list = array();
        if(!$random) $list = Hobby::limit($limit)->offset($offset)->get();
        else {
            $list = Hobby::all();
            if($list->count() < $limit) $limit = $list->count();
            $list->random($limit);
        }
        return response()->json(['hobbies' => $list]);
    }
    
    function addHobbyStudent(Request $request){
        $id = $request->User()->id;
        $hobby_id = $request->hobby_id;
        $hobbyStudent = Student_Hobby::where('user_id', $id)->where('hobby_id', $hobby_id)->first();
        //if(!$hobbyStudent){
        if (true){
            DB::beginTransaction();
            
            try {
                $hobbyStudent = new Student_Hobby;
                $hobbyStudent->user_id = $id;
                $hobbyStudent->hobby_id = $hobby_id;

                try{
                    $hobbyStudent->save();
                }catch (\Exception $e){
                    return response()->json(['message' => $e->getMessage()]);
                }
                
                DB::commit();

                return response()->json([
                    'success' => true,
                    'message' => 'Thêm sở thích thành công'
                ]);
            } catch(\Exception $e){
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Lỗi hệ thống. Vui lòng thử lại sau.'
                ]);
            }
            
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Thêm sở thích thành công'
            ]);
        }
    }

    function getHobbyStudent(Request $request){
        $id = $request->id;
        $list = Student_Hobby::where('user_id', $id)->get();
        foreach($list as $hobby){
            $hobby_id = $hobby->hobby_id;
            $thisHobby = Hobby::find($hobby_id);
            $hobby->name = $thisHobby->name;
            $hobby->description = $thisHobby->description;
        }
        return response()->json([
            'success' => true,
            'Hobbies' => $list
        ]);
    }

    function removeHobbyStudent(Request $request){
        $id = $request->User()->id;
        $hobby_id = $request->hobby_id;
        if($hobby_id){
            $hobby = Student_Hobby::where('user_id', $id)->where('hobby_id', $hobby_id)->first();
            DB::beginTransaction();
            try {
                $hobby->delete();
                DB::commit();
                return response()->json([
                    'success' => true,
                    'message' => 'Xoá sở thích thành công'
                ]);
            } catch (\Exception $e) {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Lỗi hệ thống. Vui lòng thử lại sau !'
                ]);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Bạn chưa thêm sở thích này'
            ]);
        }
    }

}
