@extends('layouts.admin')

@section('content')

<div class="col-md-12">
    {{ Form::model($laravelproject, array('method' => 'PATCH', 'route' => array('portfolios.update', $laravelproject->id), 'files'=>true)) }}
    @if($errors->any())
        <div class="alert alert-danger">
            <a href="#" class="close" data-dismiss="alert">&times;</a>
            {{ implode('', $errors->all('<li class="error">:message</li>')) }}
        </div>
    @endif
    <div class="control-group">
        {{ Form::label('name', 'name') }}
        {{ Form::text('name', Input::old('name'), array('class' => 'form-control', 'placeholder' => 'Please insert your postt title here...')) }}
    </div>
    <br>
    <div class="control-group">
        {{ Form::label('description', 'description') }}
        {{ Form::textarea('description', Input::old('description'), array('class' => 'ckeditor')) }}  
    </div>
    <br>
    <div class="control-group">
        {{ Form::label('image', 'This is the main body of your post.') }}
        {{ Form::file('image', Input::old('image'), array('class' => 'ckeditor')) }}
    </div>
    <hr>

    <br>
    {{ Form::submit('Update', array('class' => 'btn btn-success')) }}
    {{ link_to_route('portfolios.index', 'Cancel', null, array('class' => 'btn btn-warning')) }}
    {{Form::close() }}

</div>

@stop