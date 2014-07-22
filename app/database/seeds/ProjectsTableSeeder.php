<?php

class ProjectsTableSeeder extends Seeder {

	public function run()
	{
		DB::table('projects')->delete();

		Projects::create(array(
			'name' => 'Chris Sevilleja',
			'image' => 'images/pic02.jpg',
			'description' => 'Look I am a test comment.'
		));

		Projects::create(array(
			'name' => 'Nick Cerminara',
			'image' => 'images/pic02.jpg',
			'description' => 'This is going to be super crazy.'
		));

		Projects::create(array(
			'name' => 'Holly Lloyd',
			'image' => 'images/pic02.jpg',
			'description' => 'I am a master of Laravel and Angular.'
		));

		Projects::create(array(
			'name' => 'Chris Sevilleja',
			'image' => 'images/pic02.jpg',
			'description' => 'Look I am a test comment.'
		));

		Projects::create(array(
			'name' => 'Nick Cerminara',
			'image' => 'images/pic02.jpg',
			'description' => 'This is going to be super crazy.'
		));

		Projects::create(array(
			'name' => 'Holly Lloyd',
			'image' => 'images/pic02.jpg',
			'description' => 'I am a master of Laravel and Angular.'
		));
	}
}