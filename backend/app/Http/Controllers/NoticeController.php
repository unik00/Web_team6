<?php

namespace App\Http\Controllers;

use App\Company;
use App\Job_Post;
use App\Normal_Post;
use App\Notice;
use App\Post;
use App\School;
use App\Student;
use App\User;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    function addNotice($user_id, $other_id, $content){
        $notice = new Notice;
        $notice->user_id = $user_id;
        $notice->other_id = $other_id;
        $notice->content = $content;
        $notice->save();
    }
    function removeNotice(Request $request){
        $user_id = $request->User()->id;
        $delete = Notice::where('user_id', $user_id)->delete();
        return response()->json([
            'success' => true,
            'message' => 'Xoá thông báo thành công'
        ]);
    }
    function getNotice(Request $request){
        $user_id = $request->User()->id;
        $limit=null;
        $limit = $request->limit;
        $list = $listNew = array();
        if($limit) $list = Notice::where('user_id', $user_id)->limit($limit)->get();
        else $list = Notice::where('user_id', $user_id)->get();
        $listNew = $list;
        foreach($list as $ls){
            $user_id = $ls->other_id;
            $user = User::find($user_id);
            $users = null;
            if($user->type == "Student") {
                $users = Student::where('user_id', $user_id)->first();
            }
            else if($user->type == "School") {
                $users = School::where('user_id', $user_id)->first();
            }
            else if($user->type == "Company") {
                $users = Company::where('user_id', $user_id)->first();
            }
            else {
                return response()->json(['success'=>false, 'message'=>'Lỗi hệ thống.']);
            }
            $ls->name = $users->name;
        }
        foreach($listNew as $ls){
            $lsNew = Notice::find($ls->id);
            $lsNew->is_read = true;
            $lsNew->save();
        }
        return response()->json([
            'success' => true,
            'notices' => $list
        ]);
    }
}
