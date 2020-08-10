<?php

namespace App\Http\Controllers;

use App\View_Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ViewController extends Controller
{
    function addViewProfile($user_id, $user_id_viewed){
        $view = View_Profile::where('user_id', $user_id)->where('user_id_viewed', $user_id_viewed)->first();
        if($view){
            $view->time = $view->time + 1;
            $view->save();
        }
        else {
            $view = new View_Profile;
            $view->user_id = $user_id;
            $view->user_id_viewed = $user_id_viewed;
            $view->time = 1;
            $view->save();
        }
    }

    function getTopViewProfile(Request $request){
        $limit = $request->limit;
        $list = DB::table('view__profiles')->select(DB::raw('user_id'), DB::raw('sum(time) as times'))
                    ->groupBy(DB::raw('user_id') )->orderBy('times', 'desc')->limit($limit)
                    ->get();
        return response()->json([
            'success' => true,
            'users' => $list
        ]);
    }
}
