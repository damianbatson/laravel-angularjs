<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel PHP Framework</title>
{{ HTML::style('css/styles.css') }}
{{ HTML::style('//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css') }}
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-lg-12">
		<div class="row">
			<div class="col-md-5">
			<legend>Site Index</legend>
			@foreach($laravelprojects as $p)
				<!-- <div class="col-sm-8"> -->
					<h1>{{ HTML::link('projects/'.$p->id, $p->name) }}</h1>
					<p class="lead">by {{ $p->id }}</p>
					<img class="img-responsive" src="{{ $p->image }}">
					
					<div class="glyphicon glyphicon-time"></div>
					<p>{{ Str::limit($p->description, 120)}}</p>
					<p>{{HTML::link('projects/'.$p->id, 'View Project')}}</p>
					<h2>{{ $p->id }}</h2>
					<h2>{{ $p->name }}</h2>
					<p>{{ $p->description }}</p>
                    <p>{{ HTML::link('projects/'.$p->id, 'link to project') }}</p>
                    <p>{{ HTML::link('portfolios/create', 'create') }}</p>
                    <p>{{ HTML::link('portfolios/login', 'login') }}</p>
                    <p>{{ HTML::link('portfolios/show', 'show') }}</p>
				<!-- </div> -->

			@endforeach
			</div>

			<div class="col-md-7">
				
			</div>
		</div>

		</div>
	</div>
</div>
</body>
</html>

