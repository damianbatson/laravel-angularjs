<?php

class ProjectImagesTableSeeder extends Seeder {

    public function run()
    {
        DB::table('projects')->delete();

        ProjectImages::create(array(
            'name' => 'Chris Sevilleja',
            'image' => 'images/pic02.jpg',
            'image' => 'Look I am a test comment.'
            'link' =>'htttp://www.dvice.com'
        ));

        ProjectImages::create(array(
            'name' => 'Chris Sevilleja',
            'image' => 'images/pic02.jpg',
            'image' => 'Look I am a test comment.'
            'link' =>'htttp://www.dvice.com'
        ));

        ProjectImages::create(array(
            'name' => 'Chris Sevilleja',
            'image' => 'images/pic02.jpg',
            'image' => 'Look I am a test comment.'
            'link' =>'htttp://www.dvice.com'
        ));

        ProjectImages::create(array(
            'name' => 'Chris Sevilleja',
            'image' => 'images/pic02.jpg',
            'image' => 'Look I am a test comment.'
            'link' =>'htttp://www.dvice.com'
        ));

        ProjectImages::create(array(
            'name' => 'Chris Sevilleja',
            'image' => 'images/pic02.jpg',
            'image' => 'Look I am a test comment.'
            'link' =>'htttp://www.dvice.com'
        ));

        ProjectImages::create(array(
            'name' => 'Chris Sevilleja',
            'image' => 'images/pic02.jpg',
            'image' => 'Look I am a test comment.'
            'link' =>'htttp://www.dvice.com'
        ));
    }

}