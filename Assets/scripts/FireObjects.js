#pragma strict

var FIRE_RATE : float = 2.0f;

@HideInInspector
var curr_fire_delay : float = 0;
@HideInInspector
var curr_fire_function : Function;
@HideInInspector
var bullet_prefab : GameObject;
@HideInInspector
var foreground : GameObject;
@HideInInspector
var running_state : LevelRunningState;

function Start () {
	this.curr_fire_function = this.FirePatternHorizontal;
	this.bullet_prefab = Resources.Load("question_mark_prefab") as GameObject;
	this.foreground = GameObject.Find("foreground") as GameObject;	
	
	this.running_state = LevelRunningState.Singleton();
}

function CreateBulletAt(loc : Vector3, unit_velocity : Vector3)
{
	var bullet : GameObject;
	var fireable : Fireable;
	
	bullet = Instantiate(this.bullet_prefab, loc, Quaternion.identity) as GameObject;
	fireable = bullet.GetComponent("Fireable") as Fireable;
		
	bullet.transform.parent = this.foreground.transform;	
	bullet.transform.localPosition.z = 0;
	
	bullet.rigidbody2D.velocity = unit_velocity * fireable.SPEED;	

}

function FirePatternHorizontal() {
	var bottom_left : Vector3 = this.transform.collider2D.bounds.min;
	var top_right : Vector3 = this.transform.collider2D.bounds.max;	
	var down : Vector3 = Vector3(0, -1, 0);
			
	this.CreateBulletAt(Vector3(bottom_left.x, bottom_left.y, 0), down);
	this.CreateBulletAt(
		Vector3((bottom_left.x + top_right.x) / 2.0, bottom_left.y, 0),
		down);
		
	this.CreateBulletAt(Vector3(top_right.x, bottom_left.y, 0), down);		
}

function FirePatternCrescent() {
	var bottom_left : Vector3 = this.transform.collider2D.bounds.min;
	var top_right : Vector3 = this.transform.collider2D.bounds.max;
	var bottom_right : Vector3;
	var v : Vector3;
	
	v = bottom_left - this.transform.position;
	v.Normalize();
	this.CreateBulletAt(bottom_left, v);
	
	this.CreateBulletAt(
		Vector3((bottom_left.x + top_right.x) / 2.0, bottom_left.y, 0),
		Vector3(0, -1, 0));
		
	bottom_right = Vector3(top_right.x, bottom_left.y, 0);	
	v = bottom_right - this.transform.position;
	v.Normalize();
	this.CreateBulletAt(bottom_right, v);
	
}

function FixedUpdate () {
	if ((this.running_state != null) && this.running_state.IsPaused()) {
		return;
	}
	
	this.curr_fire_delay += Time.deltaTime;
	if (this.curr_fire_delay < this.FIRE_RATE) {
		return;
	}
		
	this.curr_fire_delay -= this.FIRE_RATE;
	
	this.curr_fire_function();
}