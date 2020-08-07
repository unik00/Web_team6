<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'LoginController@login');
    Route::post('signup', 'SignupController@signup');
    Route::get('list', 'UserController@list');
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'LoginController@logout');
        Route::get('user', 'UserController@user');
    });
});

Route::group(['prefix' => 'profile'], function () {
    Route::group(['middleware' => ['auth:api']], function () {
        Route::put('edit', 'UserController@edit');
        Route::get('{id}', 'UserController@view');
        Route::get('', 'UserController@index');
    });
});

Route::group(['prefix' => 'search'], function () {
    Route::get('student', 'SearchController@student');
    Route::get('school', 'SearchController@school');
    Route::get('company', 'SearchController@company');
});

Route::group(['prefix' => 'message'], function () {
    Route::group(['middleware' => ['auth:api']], function () {
        Route::put('send', 'MessageController@sendMessage');
        Route::get('', 'MessageController@readConversation');
        Route::get('{idConversation}', 'MessageController@readMessage');
    });
});

Route::group(['prefix' => 'follow'], function () {
    Route::get('get', 'FollowController@getFollow');
    Route::group(['middleware' => ['auth:api']], function () {
        Route::get('add', 'FollowController@addFollow');
        Route::get('remove', 'FollowController@unFollow');
        Route::get('get', 'FollowController@getFollow');
    });
});

Route::group(['prefix' => 'student'], function () {
    Route::get('list', 'StudentController@list');
    Route::group(['middleware' => ['auth:api']], function () {
        
    });
});

Route::group(['prefix' => 'school'], function () {
    Route::get('list', 'SchoolController@list');
    Route::group(['middleware' => ['auth:api']], function () {
        
    });
});

Route::group(['prefix' => 'company'], function () {
    Route::get('list', 'CompanyController@list');
    Route::group(['middleware' => ['auth:api']], function () {
        
    });
});
