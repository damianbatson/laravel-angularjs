<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@showWelcome');

Route::get('projects', 'ProjectsController@showData');
Route::get('projects/{id}', 'ProjectsController@showDataId');
Route::get('auth/login', 'AuthController@getLogin');
Route::post('auth/login', 'AuthController@postLogin');
Route::get('auth/register', 'AuthController@getRegister');
Route::post('auth/register', 'AuthController@postRegister');

Route::group(array('before' => 'auth'), function(){

	Route::get('admin', 'AdminController@index');
	Route::get('logout', 'AuthController@logout');
});

Route::resource('portfolios', 'PortfoliosController');