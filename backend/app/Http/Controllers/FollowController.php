<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Follower;
class FollowController extends Controller
{
    function addFollow(Request $request){
        $id_follow = $request->id;
        $myid = $request->User()->id;
        if($id_follow == $myid) return response()->json([
            'success' => false,
            'message' => 'Bạn không thể theo dõi chính mình'
        ]);
        DB::beginTransaction();
        try {
            $follow = Follower::where('user_id',$myid)->where('user_id_followed',$id_follow)->first();
            if($follow){
                return response()->json([
                    'success' => false,
                    'message' => 'Đã theo dõi tài khoản này trước đó.'
                ]);
            }
            else{
                $follow = new Follower;
                $follow->user_id = $myid;
                $follow->user_id_followed = $id_follow;
                $follow->touch();
            }
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Theo dõi thành công.'
            ]);
        } catch (\Exception $e) {
            DB::rollback(); // database query error
            return response()->json([
                'success' => false,
                'message' => 'Lỗi hệ thống. Vui lòng thử lại sau !'
            ]);
        }
    }

    function unFollow(Request $request){
        $id_follow = $request->id;
        $myid = $request->User()->id;
        $follow = Follower::where('user_id', $myid)->where('user_id_followed', $id_follow)->first();
        if(!$follow) return response()->json([
            'success' => false,
            'message' => 'Bạn chưa theo dõi tài khoản này'
        ]);
        DB::beginTransaction();
        try {
            $follow->delete();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Bỏ theo dõi thành công.'
            ]);
        } catch (\Exception $e) {
            DB::rollback(); // database query error
            return response()->json([
                'success' => false,
                'message' => 'Lỗi hệ thống. Vui lòng thử lại sau !'
            ]);
        }
    }

    function getFollow(Request $request){
        $id = $request->id;
        if(!$id) $id = $request->User()->id;
        $follow = Follower::where('user_id', $id)->get();
        return response()->json([
            'success' => true,
            'count' => $follow->count(),
            'data' => $follow
        ]);
    }
}
