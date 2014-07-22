<?php

class PortfoliosController extends AdminController {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $projects = Projects::whereHas('user', function($query)
        {
            $query->where( 'user_id', '=', Auth::user()->id );
        })->get();

        return View::make('portfolios.index')->with('projects', $projects);
        // return View::make('portfolios/index', compact('laravelprojects'));
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return View::make('portfolios.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $input = Input::all();
        $file = Input::file('image');

        $v = Validator::make($input, Projects::$rules);

        if ($v->passes()) {

            $project = new Projects;
            $project->name = Input::get('name');
            $project->description = Input::get('description');
            
            $destinationPath    = 'images/'; // The destination were you store the image.
            $filename           = $file->getClientOriginalName(); // Original file name that the end user used for it.
            $mime_type          = $file->getMimeType(); // Gets this example image/png
            $extension          = $file->getClientOriginalExtension(); // The original extension that the user used example .jpg or .png.
            $upload_success     = $file->move($destinationPath, $filename); // Now we move the file to its new home.
            $project->image = 'images/'.$filename;
            $project->user_id = Auth::user()->id;
            $project->save();

            return Redirect::route('portfolios.index');
        }

        return Redirect::back()->withErrors($v);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $project = Projects::find($id);

        return View::make('portfolios.show')->with('project', $project);
        // return View::make('portfolios.show', compact('laravelproject'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $project = Projects::find($id);

        if(is_null($project))
        {
            return Redirect::route('portfolios.index');
        }

        return View::make('portfolios.edit')->with('project', $project);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id)
    {
        $input = array_except(Input::all(), '_method');
        // $file = array_except(Input::file('image'), '_files');
        $file = Input::file('image');

        $v = Validator::make($input, Projects::$rules);

        if($v->passes())
        {
            $destinationPath    = 'images/'; // The destination were you store the image.
            $filename           = $file->getClientOriginalName(); // Original file name that the end user used for it.
            $mime_type          = $file->getMimeType(); // Gets this example image/png
            $extension          = $file->getClientOriginalExtension(); // The original extension that the user used example .jpg or .png.
            $upload_success     = $file->move($destinationPath, $filename); // Now we move the file to its new home.
            $project->image = 'images/'.$filename;
            Projects::find($id)->update($input, $filename);
            // Projects::find($id)->update($file);
            
            return Redirect::route('portfolios.index');
        }

        return Redirect::back()->withErrors($v);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        Projects::find($id)->delete();

        return Redirect::route('portfolios.index')->with('success', 'Project del');
    }

}