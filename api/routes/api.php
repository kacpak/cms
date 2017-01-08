<?php

use Illuminate\Http\Request;

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
Route::singularResourceParameters();
Route::resource('news', 'NewsController', ['only' => ['index', 'show']]);
Route::resource('articles', 'ArticlesController', ['only' => ['index', 'show']]);
Route::resource('menu', 'MenuController', ['only' => ['index']]);

Route::group(['middleware' => ['auth:api']], function() {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::group(['middleware' => ['permission:writer']], function() {
        Route::resource('news', 'NewsController', ['only' => ['store', 'update', 'destroy']]);
        Route::resource('articles', 'ArticlesController', ['only' => ['store', 'update', 'destroy']]);
    });

    Route::group(['middleware' => ['permission:editor']], function() {
        Route::resource('menu', 'MenuController', ['only' => ['store', 'update', 'destroy']]);
        Route::get('/menu/all', 'MenuController@all');
    });

    Route::group(['middleware' => ['permission:administrator']], function() {
        Route::resource('users', 'UsersController');
    });

});