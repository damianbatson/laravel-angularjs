<?php

class ProjectsController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showData()
	{
		//return View::make('projects');
		$laravelprojects = Projects::all();
		
		return View::make('projects/projects', compact('laravelprojects'));
	}
	
	public function showDataId($id)
	{
		
		$project_images = ProjectImages::with('getImages')->find($id);
		
		return View::make('projects/project_id', compact('project_images'));
	}

}