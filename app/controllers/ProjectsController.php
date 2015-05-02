<?php

class ProjectsController extends AdminController {

	/**
	 * Send back all comments as JSON
	 *
	 * @return Response
	 */
	public function index()
	{
		return Response::json(Projects::whereHas('user', function($query)
        {
            $query->where( 'user_id', '=', Auth::user()->id );
        })->get());

		// return Response::json(array('success' => true));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	// {
	// 	Projects::create(array(
	// 		'name' => Input::get('name'),
	// 		'description' => Input::get('description'),
	// 		'user_id' => Auth::user()->id
	// 	));

	// 	return Response::json(array('success' => true));
	// }

	{

		$input = Input::all();
		$file = Input::file('image');

		// $v = Validator::make($input, User::$rules);

		// if($v->passes())
		{
			$project = new Projects;

			$project->name = Input::get('name');
			$project->description = Input::get('description');
			// $destinationPath    = 'images/'; // The destination were you store the image.
            // $filename           = $file->getClientOriginalName(); // Original file name that the end user used for it.
            // $mime_type          = $file->getMimeType(); // Gets this example image/png
            // $extension          = $file->getClientOriginalExtension(); // The original extension that the user used example .jpg or .png.
            // $upload_success     = $file->move($destinationPath, $filename); // Now we move the file to its new home.
            // $project->image = 'images/'.$filename;
			$project->user_id = Auth::user()->id;
			$project->save();

			return Response::json(array('success' => true));

		}

		// return Redirect::to('auth/register')->withErrors($v);
	}

	/**
	 * Return the specified resource using JSON
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Response::json(Projects::find($id));
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Projects::destroy($id);

		return Response::json(array('success' => true));
	}

}