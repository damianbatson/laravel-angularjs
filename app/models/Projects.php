<?php

// app/models/Comment.php
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;

class Projects extends Eloquent implements UserInterface, RemindableInterface {
        // let eloquent know that these attributes will be available for mass assignment
	// protected $fillable = array('author', 'text'); 

	protected $table = 'projects';

	protected $fillable = array('name', 'description', 'image');

	public static $rules = array(
		'name' => 'required| unique:projects',
		'description' => 'required',
		'image' => 'required|image|mimes:jpg,jpeg|max:3072'
		);

	public function user()
	{
		return $this->belongsTo('User');
	}


	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password');

	/**
	 * Get the unique identifier for the user.
	 *
	 * @return mixed
	 */
	public function getAuthIdentifier()
	{
		return $this->getKey();
	}

	/**
	 * Get the password for the user.
	 *
	 * @return string
	 */
	public function getAuthPassword()
	{
		return $this->password;
	}

	/**
	 * Get the e-mail address where password reminders are sent.
	 *
	 * @return string
	 */
	public function getReminderEmail()
	{
		return $this->email;
	}

	public function getRememberToken()
	{
	    return $this->remember_token;
	}

	public function setRememberToken($value)
	{
	    $this->remember_token = $value;
	}

	public function getRememberTokenName()
	{
	    return 'remember_token';
	}
}
