<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Users;

class UserController extends Controller{
    /**
     * get all user
     *
     * @return Response
    */
    public function getAll(){
        return Users::all();
    }

    /**
     * get user by id user
     *
     * @param string $id
     * @return Response
    */
    public function getById($id){
        return Users::find($id);
    }

    /**
     * create new user
     *
     * @param Request $request data user
     * @return Response
    */
    public function signup(Request $request){
        $user = Users::create($request->all());
        return response()->json($user, 201);
    }

    /**
     * update user by id user
     *
     * @param Request $request
     * @param string $id
     * @return Response
    */
    public function update(Request $request, $id){
        $user = Users::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    /**
     * delete user by id user
     *
     * @param string $id
     * @return Response
    */
    public function delete($id){
        $user = Users::findOrFail($id);
        $user->delete();

        return 204;
    }
}
