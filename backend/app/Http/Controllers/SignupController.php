<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Student;
use App\School;
use App\Company;

class SignupController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] username
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @param  [string] name : Student name or Company name or School name
     * @param  [string] type : Student or Company or School
     * @return [string] message
     */
    public function signup(Request $request)
    {
        // Check validate from input|json
        $request->validate([
            'username' => 'required|string|unique:users',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
            'type' => 'required|string|in:Student,Company,School',
            'name' => 'required|string'
        ]);

        // Use DB Transaction . If database query is error -> rollback
        DB::beginTransaction();
        try {
            $user = new User([
                'username' => $request->username,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);
            $user->save();

            if ($request->type == 'Student') {
                $student = new Student([
                    'user_id' => $user->id,
                    'name' => $request->name
                ]);
                $student->save();
                $user->is_active = true; // change user is_active = true
                $user->save();
            } else if ($request->type == 'Company') {
                $company = new Company([
                    'user_id' => $user->id,
                    'name' => $request->name
                ]);
                $company->save();
            } else if ($request->type == 'School') {
                $school = new School([
                    'user_id' => $user->id,
                    'name' => $request->name
                ]);
                $school->save();
            }

            DB::commit(); // database query successfull
            return response()->json([
                'message' => 'Tạo tài khoản thành công !'
            ], 201);
        } catch (\Exception $e) {
            DB::rollback(); // database query error
            return response()->json([
                'message' => 'Lỗi hệ thống. Vui lòng thử lại sau !'
            ], 503);
        }
    }
}
