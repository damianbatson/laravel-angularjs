@extends ('layouts/admin')

@section ('content')

<!-- <div class="container">
	<div class="row">
		<div class='col-lg-12'> -->
			<div class="col-md-4">
			<div class="panel panel info">
				<div class="panel panel-heading">Dashboard</div>
				<div class="panel panel-body">

				<h2>Hello {{ ucwords(Auth::user()->username) }}</h2>
				{{ HTML::link('logout', 'Logout') }}
				</div>

			</div>
			</div>

			<div class="col-md-8"></div>

<!-- 		</div>
	</div>
</div> -->

@stop