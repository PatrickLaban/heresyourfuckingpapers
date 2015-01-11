#pragma strict

var MOVE_SCALE = 0.2;
@HideInInspector
var leader : GameObject;
@HideInInspector
var ignored : boolean;

function Start () {
	this.GetFollowLeader();
	this.rigidbody2D.fixedAngle = true;
}

function GetFollowLeader() {
	if (this.leader == null) {
		this.leader = GameObject.Find("user");
		if (this.leader) {
			Physics2D.IgnoreCollision(this.collider2D, this.leader.collider2D);
			this.ignored = true;
		}
	}
	return this.leader;
}

function FixedUpdate () {
	var leader = this.GetFollowLeader();
	if (leader == null) {
		return;
	}
	
	var x_diff = leader.transform.position.x - this.transform.position.x;
	var y_diff = leader.transform.position.y - this.transform.position.y;
	var t = Time.deltaTime;
	
	x_diff = x_diff * t * this.MOVE_SCALE;
	y_diff = y_diff * t * this.MOVE_SCALE;
	
	this.transform.Translate(x_diff, y_diff, 0);
}