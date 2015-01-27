#pragma strict

//var MOVE_SCALE = 25;
var moveSpeed : float = 25;
@HideInInspector
var LOCAL_EPSILON : float = 0.1;
@HideInInspector
var moveDirection : Vector3;
@HideInInspector
var target : Vector3;

function Start () {
	this.rigidbody2D.fixedAngle = true;
	this.target = this.transform.position;
}

function Update () {
	/**
	var d = Time.deltaTime;
	var vertical = Input.GetAxis("Vertical") * d * this.MOVE_SCALE;
	var horizontal = Input.GetAxis("Horizontal")* d * this.MOVE_SCALE;
	
	transform.Translate(horizontal, vertical, 0);
	**/
	var currentPosition : Vector3 = this.transform.position;
		
	if( Input.GetButton("Fire1") ) {		
		var moveToward : Vector3 = Camera.main.ScreenToWorldPoint( Input.mousePosition );
		
		this.moveDirection = moveToward - currentPosition;
		this.moveDirection.z = 0; 
		this.moveDirection.Normalize();
		
		this.target = (this.moveDirection * this.moveSpeed) + currentPosition;
	}
	
	var dist : Vector3 = this.target - this.transform.position;
	if (dist.magnitude > this.LOCAL_EPSILON) {
		this.transform.position = Vector3.Lerp( currentPosition, this.target, Time.deltaTime );		
	}
}