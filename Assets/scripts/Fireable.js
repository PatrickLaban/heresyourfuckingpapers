#pragma strict

var SPEED : float = 6.0f;  
var isPaused : boolean;
var MIN_X : float;
var MAX_X : float;
var MIN_Y : float;
var MAX_Y : float;


@HideInInspector
var running_state : LevelRunningState;
@HideInInspector
var curr_velocity : Vector3;
@HideInInspector
var velocity_paused : boolean;

function Start () {
	this.velocity_paused = false;
	var g : GameObject;
	
	g = GameObject.Find("LevelRunningState") as GameObject;
	this.running_state = g.GetComponent("LevelRunningState") as LevelRunningState;
}

function Update () {
	if (this.running_state.IsPaused()) {
		if (!this.velocity_paused) {
			this.curr_velocity = this.rigidbody2D.velocity;		
			this.rigidbody2D.velocity = Vector3(0, 0, 0);
			this.velocity_paused = true;
		}
	} else {
		if (this.velocity_paused &&
			(this.rigidbody2D.velocity != this.curr_velocity)) {
			this.rigidbody2D.velocity = this.curr_velocity;
			this.velocity_paused = false;
		}
	}
		
	if ((this.transform.position.x >= this.MAX_X) ||
		(this.transform.position.x <= this.MIN_X) ||
		(this.transform.position.y >= this.MAX_Y) ||
		(this.transform.position.y <= this.MIN_Y)) {
		Destroy(this.gameObject);
	}
	
}