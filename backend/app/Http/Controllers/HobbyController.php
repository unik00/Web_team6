<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Hobby;
class HobbyController extends Controller
{
    function add(Request $request){
        $name = $request->name;
        $description = $request->description;
        $hobby = Hobby::where('name', $name)->first();
        if(!$hobby){
            $hobby = new Hobby;
            $hobby->name = $name;
            $hobby->description = $description;
            DB::beginTransaction();
            try {
                $hobby->save();
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
    }

    

}
