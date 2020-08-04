<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\School;
use App\Company;
class UserController extends Controller
{

    /**
     * Get the profile User
     *
     * @return [json] user object
     */
    public function index(Request $request)
    {
        $id = $request->User()->id;

        $user = Student::where('user_id', $id)->first();
        if($user) {
            $user->type = 'Student';

            $school = null;
            if($user->school_id)
                $school = School::where('id', $user->school_id)->first();

            $user->name_school = $school ? $school->name : null;
        }
        if(!$user) {
            $user = School::where('user_id', $id)->first();
            if($user) $user->type = 'School';
        }
        if(!$user) {
            $user = Company::where('user_id', $id)->first();
            if($user) $user->type = 'Company';
        }

        if($user){
            $user->my_profile = true;
            $user->email = $request->User()->email;
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
        $user = Student::where('user_id', $id)->first();
        if($user) {
            $user->type = 'Student';

            $school = null;
            if($user->school_id)
                $school = School::where('id', $user->school_id)->first();

            $user->name_school = $school ? $school->name : null;
        }
        if(!$user) {
            $user = School::where('user_id', $id)->first();
            if($user) $user->type = 'School';
        }
        if(!$user) {
            $user = Company::where('user_id', $id)->first();
            if($user) $user->type = 'Company';
        }

        if($user){
            $user->email = User::find($id)->email;
            if($user->user_id == $request->User()->id) $user->my_profile = true;
            else $user->my_profile = false;
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

        $id = $request->User()->id;
        $user = Student::where('user_id', $id)->first();
        if(!$user) $user = School::where('user_id', $id)->first();
        if(!$user) $user = Company::where('user_id', $id)->first();
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
}
