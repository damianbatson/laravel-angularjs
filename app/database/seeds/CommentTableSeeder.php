<?php
// app/database/seeds/CommentTableSeeder.php

class CommentTableSeeder extends Seeder 
{

	public function run()
	{
		DB::table('comments')->delete();

		Comment::create(array(
			'name' => 'Chris Sevilleja',
			'description' => 'Look I am a test comment.'
		));

		Comment::create(array(
			'name' => 'Nick Cerminara',
			'description' => 'This is going to be super crazy.'
		));

		Comment::create(array(
			'name' => 'Holly Lloyd',
			'description' => 'I am a master of Laravel and Angular.'
		));
	}

}