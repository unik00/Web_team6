<?php

namespace App\Http\Controllers;
use App\School;
use App\Company;
use App\Job_Post;
use App\Like_Post;
use App\Normal_Post;
use App\Post;
use App\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
class LikeController extends Controller
{
    function addLike(Request $request){
        $user_id = $request->User()->id;
        $post_id = $request->post_id;

        $like = null;
        $like = Like_Post::where('user_id', $user_id)->where('post_id', $post_id)->first();
        if(!$like){
            DB::beginTransaction();
            try{
                $like = new Like_Post;
                $like->user_id = $user_id;
                $like->post_id = $post_id;
                $like->save();

                //add notice
                $post = Post::find($post_id);
                $posts = null;
                if($post->type == "Normal") $posts = Normal_Post::where('post_id', $post_id)->first();
                else if($post->type == "Job") $posts = Job_Post::where('post_id', $post_id)->first();
                $user_post = $posts->user_id;
                $notice = new NoticeController();
                $notice->addNotice($user_post, $user_id, ' đã thích bài viết của bạn');
                DB::commit();
                return response()->json(['success' => true, 'message' => 'Thích bài viết thành công']);
            } catch(\Exception $e){
                DB::rollback();
                return response()->json(['success' => false, 'message' => 'Lỗi hệ thống. Vui lòng thử lại.']);
            }
        }
    }
    function removeLike(Request $request){
        $user_id = $request->User()->id;
        $post_id = $request->post_id;
        $like = null;
        $like = Like_Post::where('user_id', $user_id)->where('post_id', $post_id)->first();
        if($like){
            DB::beginTransaction();
            try{
                $like->delete();
                DB::commit();
                return response()->json(['success' => true, 'message' => 'Bỏ thích thành công']);
            } catch (\Exception $e){
                DB::rollback();
                return response()->json(['success' => false, 'message' => 'Lỗi hệ thống. Vui lòng thử lại']);
            }
        }
        else {
            return response()->json(['success' => false, 'message' => 'Bạn chưa thích bài viết này']);
        }
    }

    function getLike(Request $request){
        $user_id = $request->User()->id;
        $post_id = $request->post_id;
        $list = Like_Post::where('post_id', $post_id)->get();
        $cnt = 0;
        $is_liked = false;
        foreach($list as $ls){
            $id = $ls->user_id;
            if($id == $user_id) $is_liked = true;
            $user = User::find($id);
            $ls->avatar = $user->avatar;
            $users = null;
            if($user->type == "Student") {
                $users = Student::where('user_id', $id)->first();
            }
            else if($user->type == "School") {
                $users = School::where('user_id', $id)->first();
            }
            else if($user->type == "Company") {
                $users = Company::where('user_id', $id)->first();
            }
            else {
                return response()->json(['success'=>false, 'message'=>'Lỗi hệ thống.']);
            }
            $ls->name = $users->name;
            $cnt++;
        }
        return response()->json([
            'success' => true,
            'is_liked' => $is_liked,
            'count' => $cnt,
            'likes' => $list
        ]);
    }
}
