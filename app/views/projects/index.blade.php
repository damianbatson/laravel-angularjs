@extends('layouts/single')

@section('content')

    <div class="col-md-4">
        <!-- <a href="http://laravel.com" title="Laravel PHP Framework"></a> -->
        <h2>Portfolio</h2>

        @foreach ($laravelprojects as $laravelproject)
        	<!-- <div class="col-sm-6"> -->
        	<h2>{{ $laravelproject->id }}</h2>
            <h2>{{ $laravelproject->name }}</h2>
            <img class="img-responsive" src="{{ $laravelproject->image }}">
            <p>{{ $laravelproject->description }}</p>
            <p>{{ HTML::link('projects/'.$laravelproject->id, 'link to project') }}</p>

            <!-- </div> -->
        @endforeach

    </div>

@stop