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


                        <h2>{{ $project_images->id }}</h2>
                        <h2>{{ $project_images->name }}</h2>
                        <img src="../{{ $project_images->image1 }}">
                        <img src="../{{ $project_images->image2 }}">
                        <img src="../{{ $project_images->image3 }}">
                        <p><a href="{{$project_images->link}}">link</a></p>


            </div>
        </div>
    </div>
</body>
</html>