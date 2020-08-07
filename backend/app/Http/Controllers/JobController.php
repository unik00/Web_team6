<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Job;
class JobController extends Controller
{
    // add and update
    function addOrUpdate(Request $request){
        $name = $request->name;
        $description = $request->description;
        $job = Job::where('name', $name)->first();
        if(!$job) $job = new Job;
        $job->name = $name;
        $job->description = $description;
        DB::beginTransaction();
        try {
            $job->touch();
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
            $job = Job::find($id);
            DB::beginTransaction();
            try {
                $job->delete();
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
        if(!$random) $list = Job::limit($limit)->offset($offset)->get();
        else $list = Job::all()->random($limit);
        return response()->json(['jobs' => $list]);
    }
    

}
