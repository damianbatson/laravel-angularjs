<?php

class ProjectImagesTableSeeder extends Seeder {

    public function run()
    {
    	// Uncomment the below to wipe the table clean before populating
    	// DB::table('portfolios')->delete();

        $project_images = array(
		['name' => 'cyber', 'image1' => 'images/pic01.jpg', 'image2' => 'images/pic01.jpg', 'image3' => 'images/pic01.jpg', 'link' => 'http://www'],
		['name' => 'cybernetic', 'image1' => 'images/pic02.jpg', 'image2' => 'images/pic02.jpg', 'image3' => 'images/pic02.jpg', 'link' => 'cybernetic description'],
		['name' => 'cyberborg', 'image1' => 'images/pic03.jpg', 'image2' => 'images/pic03.jpg', 'image3' => 'images/pic03.jpg', 'link' => 'cyberborg description']

        );

        // Uncomment the below to run the seeder
        DB::table('project_images')->insert($project_images);
    }

}