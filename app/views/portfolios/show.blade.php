@extends('layouts.admin')

@section('content')

<div class="col-lg-8">
	<hr>
	<h1>{{ $laravelproject->name }}</h1>
	<p class="lead">{{ ucwords($laravelproject->user->created_at) }}</p>
	<p class="lead">{{ ucwords($laravelproject->user->username) }}</p>
	<hr>
	<p><span class="glyphicon glyphicon-time"></span></p>
	<hr>
	<p class="lead">{{ $laravelproject->description }}</p>
	<img class="img-responsive" src="../{{ $laravelproject->image }}">
</div>

<div class="col-lg-4">
	<div class="well">
		<legend>What would you like to do next?</legend>
		{{ link_to_route('portfolios.edit', 'Update', array($laravelproject->id), array('class' => 'btn btn-primary')) }}
		{{ link_to_route('portfolios.index', 'Back to index', null, array('class' => 'btn btn-warning')) }}
		<br>
	</div>
</div>

@stop