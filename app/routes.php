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

// Route::get('/', function()
// {
// 	return View::make('site.index'); // will return app/views/index.php
// });
Route::get('login', function()
{
	return View::make('auth.login'); // will return app/views/index.php
});
Route::get('register', function()
{
	return View::make('auth.register'); // will return app/views/index.php
});
Route::get('admin', function()
{
	return View::make('admin.admin'); // will return app/views/index.php
});
Route::get('projects', function()
{
	return View::make('projects.index'); // will return app/views/index.php
});
Route::get('portfolios', function()
{
	return View::make('portfolios.index'); // will return app/views/index.php
});

	Route::group(array('prefix' => 'api'), function() {
		// Route::get('auth/login', 'AuthController@getLogin');
		Route::post('login', 'AuthController@postLogin');
		// Route::get('auth/register', 'AuthController@getRegister');
		Route::post('register', 'AuthController@postRegister');

	});

Route::group(array('before' => 'auth.basic'), function(){	

	Route::group(array('prefix' => 'api'), function() {

	// since we will be using this just for CRUD, we won't need create and edit
	// Angular will handle both of those forms
	// this ensures that a user can't access api/create or api/edit when there's nothing there
		Route::get('admin', 'AdminController@index');
		Route::get('logout', 'AdminController@logout');
		Route::resource('projects', 'ProjectsController');
		Route::resource('portfolios', 'PortfoliosController');
	});
});

// =============================================
// CATCH ALL ROUTE =============================
// =============================================
// all routes that are not home or api will be redirected to the frontend
// this allows angular to route them
App::missing(function($exception)
{
	return View::make('index');
});
