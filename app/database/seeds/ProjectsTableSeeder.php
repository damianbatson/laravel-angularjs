<?php

class ProjectsTableSeeder extends Seeder {

	public function run()
	{

		$laravelprojects = [
		['name' => 'cyber', 'image' => 'images/pic01.jpg', 'description' => 'cyber description'],
		['title' => 'cybernetic', 'image' => 'images/pic02.jpg', 'description' => 'cybernetic description'],
		['title' => 'cyberborg', 'image' => 'images/pic03.jpg', 'description' => 'cyberborg description']
		];
		
		DB::table('laravelprojects') ->insert($laravelprojects);
	}

}