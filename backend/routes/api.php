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
    Route::get('listguest', 'UserController@list');
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'LoginController@logout');
        Route::get('user', 'UserController@user');
        Route::get('list', 'UserController@list');
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
    Route::get('hobby', 'SearchController@hobby');
    Route::get('job', 'SearchController@job');
    Route::get('language', 'SearchController@language');
    
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
    Route::get('listguest', 'StudentController@list');
    Route::group(['middleware' => ['auth:api']], function () {
        Route::get('list', 'StudentController@list');
    });
});

Route::group(['prefix' => 'school'], function () {
    Route::get('listguest', 'SchoolController@list');
    Route::group(['middleware' => ['auth:api']], function () {
        Route::get('list', 'SchoolController@list');
    });
});

Route::group(['prefix' => 'company'], function () {
    Route::get('listguest', 'CompanyController@list');
    Route::group(['middleware' => ['auth:api']], function () {
        Route::get('list', 'CompanyController@list');
    });
});

Route::group(['prefix' => 'hobby'], function () {
    Route::get('list', 'HobbyController@list');
    Route::get('user', 'HobbyController@getHobbyStudent');
    Route::group(['middleware' => ['auth:api']], function () { 
       // Route::put('add', 'HobbyController@addOrUpdate');
       // Route::get('remove', 'HobbyController@remove');
        Route::post('add', 'HobbyController@addHobbyStudent');
        Route::get('remove', 'HobbyController@removeHobbyStudent');
    });
});
Route::get('country', 'CountryController@list');
Route::group(['prefix' => 'job'], function () {

    Route::get('list', 'JobController@list');
    Route::get('get-type', 'JobController@getType');
    Route::get('get-availabilty', 'JobController@getAvailabilty');
    Route::get('get-experience', 'JobController@getExperience');

    Route::group(['middleware' => ['auth:api']], function () { 
        Route::put('add', 'JobController@addOrUpdate');
        Route::get('remove', 'JobController@remove');
        Route::get('info', 'JobController@getJob');
        Route::put('add-language', 'Program_LanguageController@addToJob');
    });
});

Route::group(['prefix' => 'language'], function () {
    Route::group(['middleware' => ['auth:api']], function () { 
        Route::put('add', 'LanguageController@addOrUpdate');
        Route::get('remove', 'LanguageController@remove');
        Route::get('list', 'LanguageController@list');
    });
});

Route::group(['prefix' => 'file'], function () {
    Route::get('avatar', 'FileController@getAvatar');
    Route::get('cover', 'FileController@getCover');
    Route::group(['middleware' => ['auth:api']], function () { 
        Route::post('avatar', 'FileController@addAvatar');
        Route::post('cover', 'FileController@addCover');
    });
});
Route::group(['prefix' => 'viewer'], function () {
    Route::get('profile', 'ViewController@getTopViewProfile');
    Route::group(['middleware' => ['auth:api']], function () { 
       
    });
});

Route::group(['prefix' => 'post'], function () {
    Route::get('normal', 'PostController@getNormalPost');
    Route::get('job', 'PostController@getJobPost');
    Route::group(['middleware' => ['auth:api']], function () { 
        Route::post('add', 'PostController@addPost');
    });
});

Route::group(['prefix' => 'program-language'], function () {
    Route::get('list', 'Program_LanguageController@list');
});

Route::group(['prefix' => 'like-post'], function () {
    Route::group(['middleware' => ['auth:api']], function () { 
        Route::post('add', 'LikeController@addLike');
        Route::get('remove', 'LikeController@removeLike');
        Route::get('get', 'LikeController@getLike');
    });
});

Route::group(['prefix' => 'comment-post'], function () {
    Route::group(['middleware' => ['auth:api']], function () { 
        Route::post('add', 'CommentController@addComment');
        Route::get('get', 'CommentController@getComment');
    });
});
Route::group(['prefix' => 'notice'], function () {
    Route::group(['middleware' => ['auth:api']], function () { 
        Route::get('remove', 'NoticeController@removeNotice');
        Route::get('get', 'NoticeController@getNotice');
    });
});
Route::group(['prefix' => 'exp'], function () {
    Route::post('list', 'ExperienceController@getExperience');
    Route::group(['middleware' => ['auth:api']], function () { 
        Route::post('add', 'ExperienceController@addExperience');
        Route::post('remove', 'ExperienceController@removeExperience');
    });
});

