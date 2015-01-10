#pragma strict

var MOVE_SCALE = 25;

function Start () {
	this.rigidbody2D.fixedAngle = true;
}

function Update () {
	var d = Time.deltaTime;
	var vertical = Input.GetAxis("Vertical") * d * this.MOVE_SCALE;
	var horizontal = Input.GetAxis("Horizontal")* d * this.MOVE_SCALE;
	
	transform.Translate(horizontal, vertical, 0);
}