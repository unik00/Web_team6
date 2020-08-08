<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;
class FileController extends Controller
{
    function getAvatar(Request $request){
        $idUser = $request->id;
        $user = User::find($idUser);
        return response()->json([
            'success' => true,
            'path' => url("/images/avatar/$user->avatar")
        ]);
    }
    function getCover(Request $request){
        $idUser = $request->id;
        $user = User::find($idUser);
        return response()->json([
            'success' => true,
            'path' => url("/images/cover/$user->cover")
        ]);
    }
    function addAvatar(Request $request){
        $id = $request->User()->id;
        request()->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $imageName = $id.'.'.request()->image->getClientOriginalExtension();
        DB::beginTransaction();
        try {
            request()->image->move(public_path('images/avatar'), $imageName);
            $user = User::find($id);
            $user->avatar = $imageName;
            $user->save();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Upload ảnh đại diện thành công'
            ]);
        } catch(\Exception $e){
            DB::rollback();
            return response()->json([
                'success' => false,
                'message' => 'Upload ảnh đại diện thất bại'
            ]);
        }
    }
    function addCover(Request $request){
        $id = $request->User()->id;
        request()->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $imageName = $id.'.'.request()->image->getClientOriginalExtension();
        DB::beginTransaction();
        try {
            request()->image->move(public_path('images/cover'), $imageName);
            $user = User::find($id);
            $user->cover = $imageName;
            $user->save();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Upload ảnh bìa thành công'
            ]);
        } catch(\Exception $e){
            DB::rollback();
            return response()->json([
                'success' => false,
                'message' => 'Upload ảnh bìa thất bại'
            ]);
        }
    }

}
