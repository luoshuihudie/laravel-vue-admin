<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Models\Cron;

Route::get('/', function () {
    return view('welcome');
});

Route::get('search', function () {
    // 为查看方便都转成数组
    dump(Cron::all()->toArray());
});

/******** 公共接口处理类 *********/
Route::group(['namespace' => 'Bus', 'prefix' => 'api'], function () {
    // 1. 首页测试
    Route::get('index', 'IndexController@index');
    Route::get('getList', 'IndexController@getList');
    Route::get('busLine', 'IndexController@busLine');
});