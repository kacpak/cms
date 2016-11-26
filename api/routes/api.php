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

Route::resource('news', 'NewsController', ['only' => ['index', 'show']]);
Route::resource('menu', 'MenuController', ['only' => ['index']]);

Route::group(['middleware' => ['auth:api']], function() {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::resource('news', 'NewsController', ['only' => ['store', 'update', 'destroy']]);

});