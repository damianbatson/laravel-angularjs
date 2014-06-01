<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel PHP Framework</title>
{{ HTML::style('css/styles.css') }}
</head>
<body>
    <div id="mainContainer">
        <div id="mainInnerContainer">
            <div id="columnTwo">
                <a href="http://laravel.com" title="Laravel PHP Framework"></a>

                    @foreach ($laravelprojects as $laravelproject)
                    	<li>
                        	<h2>{{ $laravelproject->id }}</h2>
                            <h2>{{ $laravelproject->name }}</h2>
                            <img src="{{ $laravelproject->image }}">
                            <p>{{ $laravelproject->description }}</p>
                            <p>{{ HTML::link('projects/'.$laravelproject->id, 'link to project') }}</p>
                            <p>{{ HTML::link('portfolios/create', 'create') }}</p>
                            <p>{{ HTML::link('portfolios/login', 'login') }}</p>
                            <p>{{ HTML::link('portfolios/show', 'show') }}</p>
                        </li>
                    @endforeach

            </div>
        </div>
    </div>
</body>
</html>