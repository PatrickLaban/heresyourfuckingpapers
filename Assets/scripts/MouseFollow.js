#pragma strict

var MOVE_SPEED : float = 15;

var CLAMP_MIN_X : float;
var CLAMP_MAX_X : float;
var CLAMP_MIN_Y : float;
var CLAMP_MAX_Y : float;

@HideInInspector
var target : Vector3;
@HideInInspector
var running_state : LevelRunningState;

function Start () {
	this.target = this.transform.position;
	var g : GameObject;
	
	g = GameObject.Find("LevelRunningState") as GameObject;
	this.running_state = g.GetComponent("LevelRunningState") as LevelRunningState;	
}

function Update () {
	var t : float = Time.deltaTime;
	var diff : Vector3;
	var target : Vector3;
	
	if ((this.running_state != null) && this.running_state.IsPaused()) {
		return;
	}
	
	target = Camera.main.ScreenToWorldPoint( Input.mousePosition );	
	
	diff = (target - this.transform.position);
	diff.Normalize();
	diff = diff * t * this.MOVE_SPEED;
	diff.z = 0;
	
	this.transform.Translate(diff);
	if (this.transform.position.x > this.CLAMP_MAX_X) {
		this.transform.position.x = this.CLAMP_MAX_X;
	} else if (this.transform.position.x < this.CLAMP_MIN_X) {
		this.transform.position.x = this.CLAMP_MIN_X;
	} else if (this.transform.position.y > this.CLAMP_MAX_Y) {
		this.transform.position.y = this.CLAMP_MAX_Y;
	} else if (this.transform.position.y < this.CLAMP_MIN_Y) {
		this.transform.position.y = this.CLAMP_MIN_Y;
	}
}