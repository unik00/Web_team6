<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\School;
use App\Company;
use App\Follower;
use App\Http\Controllers\ViewController;
class UserController extends Controller
{

    /**
     * Get the profile User
     *
     * @return [json] user object
     */
    public function index(Request $request)
    {
        $thisUser = $request->User();
        $id = $thisUser->id;
        $user = null;
        if($thisUser->type == "Admin"){
            return response()->json($thisUser);
        }
        if($thisUser->type == "Student"){
            $user = Student::where('user_id', $id)->first();
            $user->type = 'Student';
            $school = null;
            if($user->school_id)
                $school = School::where('id', $user->school_id)->first();

            $user->name_school = $school ? $school->name : null;
        }
        else if($thisUser->type == "School"){
            $user = School::where('user_id', $id)->first();
            if($user) $user->type = 'School';
        }
        else if($thisUser->type == "Company"){
            $user = Company::where('user_id', $id)->first();
            if($user) $user->type = 'Company';
        }
        if($user){
            $user->my_profile = true;
            $user->email = $thisUser->email;
            $user->last_online_at = $thisUser->last_online_at;
            $user->following = Follower::where('user_id', $user->user_id)->count();
            $user->followed = Follower::where('user_id_followed', $user->user_id)->count();

            $vote = new VoteController();
            $user->vote_score = $vote->getVote($user->id);

            return response()->json($user);
        } else {
            return response()->json(['message' => 'Lỗi hồ sơ người dùng không tồn tại'], 404);
        }
    }

    /**
     * Get the profile by id
     *
     * @return [json] user object
     */
    public function view(Request $request, $id)
    {
        $user = null;
        $thisUser = User::find($id);
        if($thisUser->type == "Student"){
            $user = Student::where('user_id', $id)->first();
            $user->type = 'Student';
            $school = null;
            if($user->school_id)
                $school = School::where('id', $user->school_id)->first();

            $user->name_school = $school ? $school->name : null;
        }
        else if($thisUser->type == "School"){
            $user = School::where('user_id', $id)->first();
            if($user) $user->type = 'School';
        }
        else if($thisUser->type == "Company"){
            $user = Company::where('user_id', $id)->first();
            if($user) $user->type = 'Company';
        }

        if($user){
            $user->email = $thisUser->email;
            $user->last_online_at = $thisUser->last_online_at;
            if($user->user_id == $request->User()->id) $user->my_profile = true;
            else {
                $user->my_profile = false;
                $viewCtl = new ViewController();
                $viewCtl->addViewProfile($user->user_id, $request->User()->id);
            }
            $user->following = Follower::where('user_id', $user->user_id)->count();
            $user->followed = Follower::where('user_id_followed', $user->user_id)->count();

            $vote = new VoteController();
            $user->vote_score = $vote->getVote($user->id);
            $myid = $request->User()->id;
            if($myid){
                $is_follow = Follower::where('user_id', $myid)->where('user_id_followed', $id)->first();
                $user->is_follow = ($is_follow) ? true : false;
            }
            return response()->json($user);
        } else {
            return response()->json(['message' => 'Lỗi hồ sơ người dùng không tồn tại'], 404);
        }
    }

    /**
     * Edit user
     *
     * @return [string] message
     */
    public function edit(Request $request)
    {
        // Check validate from input|json
        $request->validate([
            'name' => 'string',
            'school_id' => 'digits:1,99999|nullable',
            'mssv' => 'string|nullable',
            'class' => 'string|nullable',
            'birthday' => 'date|nullable',
            'address' => 'string|nullable',
            'gender' => 'string|in:Nam,Nữ,Khác',
            'phone' => 'numeric|nullable',
            'status' => 'string|nullable',
            'linkCV' => 'url|nullable',
            'linkFB' => 'url|nullable',
            'linkGit' => 'url|nullable',
            'description' => 'string|nullable'
        ]);
        $thisUser = $request->User();
        $id = $thisUser->id;
        if($thisUser->type == "Student") $user = Student::where('user_id', $id)->first();
        else if($thisUser->type == "School") $user = School::where('user_id', $id)->first();
        else if($thisUser->type == "Company") $user = Company::where('user_id', $id)->first();
        if(!$user) {
            return response()->json([
                'message' => 'Người dùng không tồn tại !'
            ], 404);
        }
        // Use DB Transaction . If database query is error -> rollback
        DB::beginTransaction();
        try {
            $user->update($request->all());

            DB::commit(); // database query successfull
            return response()->json($user);
        } catch (\Exception $e) {
            DB::rollback(); // database query error
            return response()->json([
                'message' => 'Lỗi hệ thống. Vui lòng thử lại sau !'
            ], 503);
        }
    }

    function remove(Request $request){
        $id = $request->id;
        DB::beginTransaction();
        try {
            $user = User::find($id);
            $user->delete();
            DB::commit();
            return response()->json(['success' => true, 'message' => 'Xoá thành công']);
        } catch (\Exception $e){
            DB::rollback();
            return response()->json(['success' => false, 'message' => 'Xoá thất bại']);
        }
    }

    function changeActive(Request $request){
        $id = $request->id;
        DB::beginTransaction();
        try {
            $user = User::find($id);
            $user->is_active = !$user->is_active;
            $user->save();
            DB::commit();
            return response()->json(['success' => true, 'message' => 'Thao tác thành công']);
        } catch(\Exception $e){
            DB::rollback();
            return response()->json(['success' => false, 'message' => 'Lỗi hệ thống. Vui lòng thử lại.']);
        }
    }

    function list(Request $request){
        $random = $request->random ?? 0;
        $offset = $request->offset ?? 0;
        $limit = $request->limit ?? 10;
        $myid = null;
        if($request->User()) $myid = $request->User()->id;
        $list = array();
        if(!$random) $list = User::limit($limit)->offset($offset)->get();
        else {
            $list = User::all();
            if($list->count() < $limit) $limit = $list->count();
            $list->random($limit);
        }
        foreach($list as $ls){
            $id = $ls->id;
            $type = $ls->type;
            if($type == "Student") $user = Student::where('user_id', $id)->first();
            else if($type == "School") $user = School::where('user_id', $id)->first();
            else if($type == "Company") $user = Company::where('user_id', $id)->first();
            if($user) $ls->name = $user->name;
            if($myid){
                $is_follow = Follower::where('user_id', $myid)->where('user_id_followed', $id)->first();
                $ls->is_follow = ($is_follow) ? true : false;
            }
        }
        return response()->json(['Users' => $list]);
    }
}
