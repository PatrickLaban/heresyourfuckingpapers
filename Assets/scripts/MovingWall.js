#pragma strict

public var is_x_axis : boolean;
public var min_val : float;
public var max_val : float;
public var MOVE_SCALE = 4;
@HideInInspector
public var dir : int = 1;

function Start () {

}

function FixedUpdate () {
	var diff = this.dir * Time.deltaTime * MOVE_SCALE;
	var curr : float;
	var mov : Vector3;
	
	if (this.is_x_axis) {
		mov = new Vector3(diff, 0, 0);
	} else {
		mov = new Vector3(0, diff, 0);		
	}
	
	this.transform.Translate(mov);
	
	if (this.is_x_axis) {
		curr = this.transform.position.x;
	} else {
		curr = this.transform.position.y;
	}
	
	if (curr <= this.min_val) {
		this.dir *= -1;
	} else if (curr >= this.max_val) {
		this.dir *= -1;
	}
}