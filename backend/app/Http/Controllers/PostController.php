<?php

namespace App\Http\Controllers;

use App\Job;
use App\Job_Post;
use App\Normal_Post;
use App\Post;
use App\User;
use App\Student;
use App\School;
use App\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    function addPost(Request $request){
        $id = $request->User()->id;
        $content = $request->content;
        $type = $request->type;
        if($type == "Normal" || $type == "Job"){
            DB::beginTransaction();
            try {
                $post = new Post;
                $post->type = $type;
                $post->save();
                if($type == "Job"){
                    $jobPost = new Job_Post;
                    $jobPost->job_id = $request->job_id;
                    $jobPost->user_id = $id;
                    $jobPost->post_id = $post->id;
                    $jobPost->content = $content;
                    $jobPost->save();
                }
                else {
                    $normalPost = new Normal_Post;
                    $normalPost->user_id = $id;
                    $normalPost->post_id = $post->id;
                    $normalPost->content = $content;
                    $normalPost->save();
                }
                DB::commit();
                return response()->json([
                    'success' => true,
                    'message' => 'Bạn đã đăng bài thành công'
                ]);
            } catch (\Exception $e) {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Lỗi hệ thống. Vui lòng thử lại.'
                ]);
            }
        }
        else {
            return response()->json([
                'success' => false,
                'message' => 'Bạn chưa chọn thể loại bài viết.'
            ]);
        }
    }

    function getNormalPost(){
        $list = Normal_Post::all();
        foreach($list as $normalPost){
            $user_id = $normalPost->user_id;
            $user = User::find($user_id);
            $normalPost->avatar = $user->avatar;
            $normalPost->last_online_at = $user->last_online_at;
            $type = $user->type;
            if($type == "Student") $user = Student::where('user_id', $user_id)->first();
            else if($type == "School") $user = School::where('user_id', $user_id)->first();
            else if($type == "Company") $user = Company::where('user_id', $user_id)->first();
            if(!$user) {
                return response()->json([
                    'message' => 'Người dùng không tồn tại !'
                ], 404);
            }
            $normalPost->name = $user->name;
        }
        return response()->json([
            'posts' => $list
        ]);
    }

    function getJobPost(){
        $list = Job_Post::all();
        foreach($list as $jobPost){
            $user_id = $jobPost->user_id;
            $user = User::find($user_id);
            $jobPost->avatar = $user->avatar;
            $jobPost->last_online_at = $user->last_online_at;
            $type = $user->type;
            if($type == "Student") $user = Student::where('user_id', $user_id)->first();
            else if($type == "School") $user = School::where('user_id', $user_id)->first();
            else if($type == "Company") $user = Company::where('user_id', $user_id)->first();
            if(!$user) {
                return response()->json([
                    'message' => 'Người dùng không tồn tại !'
                ], 404);
            }
            $jobPost->name = $user->name;
        }
        return response()->json([
            'posts' => $list
        ]);
    }
}
