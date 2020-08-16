<?php

namespace App\Http\Controllers;

use App\Vote_User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VoteController extends Controller
{
    function addVote(Request $request){
        $user_id = $request->User()->id;
        $other_id = $request->id;
        $score = $request->score;
        if($score < 0 || $score > 10){
            return response()->json([
                'success' => false,
                'message' => 'Điểm phải trong khoảng 0 - 10'
            ]);
        }
        $vote = null;
        $vote = Vote_User::where('user_id', $user_id)->where('user_id_voted', $other_id)->first();
        if($vote){
            $vote->score = $score;
        }
        else {
            $vote = new Vote_User;
            $vote->user_id = $user_id;
            $vote->user_id_voted = $other_id;
            $vote->score = $score;
        }
        DB::beginTransaction();
        try{
            $vote->save();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Vote thành công'
            ]);
        } catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Lỗi hệ thống. Vui lòng thử lại'
            ]);
        }
    }

    function getVote($user_id){
       // $user_id = $request->id;
        return Vote_User::where('user_id_voted', $user_id)->groupBy('user_id_voted')->avg('score');
        //return response()->json(['message' => true, 'score' => $vote]);
    }
}
