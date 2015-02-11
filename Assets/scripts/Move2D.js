#pragma strict

var moveSpeed : float = 25;
var doLerp : boolean = true;

@HideInInspector
var LOCAL_EPSILON : float = 1.0;
@HideInInspector
var moveDirection : Vector3;
@HideInInspector
var target : Vector3;

function Start () {
	this.rigidbody2D.fixedAngle = true;
	this.target = this.transform.position;
}

function Update () {
	if( Input.GetButton("Fire1") ) {
		this.target = Camera.main.ScreenToWorldPoint( Input.mousePosition );
		this.target.z = this.transform.position.z;
	}
	
	var dir : Vector3 = this.target - this.transform.position;
	var mag : float = dir.magnitude;
		
	if (mag > this.LOCAL_EPSILON) {
		dir.Normalize();
		this.rigidbody2D.velocity = (dir * this.moveSpeed);
		//this.transform.position = Vector3.Lerp(this.transform.position, this.target,
		//	this.moveSpeed * Time.deltaTime);
	} else {	
		this.rigidbody2D.velocity = Vector3(0,0,0);	
		this.target = this.transform.position;		
	}
	/**
	var d = Time.deltaTime;
	var vertical = Input.GetAxis("Vertical") * d * this.MOVE_SCALE;
	var horizontal = Input.GetAxis("Horizontal")* d * this.MOVE_SCALE;
	
	transform.Translate(horizontal, vertical, 0);
	
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
		if (this.doLerp) {
			this.transform.position = Vector3.Lerp( currentPosition, this.target, Time.deltaTime );		
		} else {
			this.transform.position = this.target;
		}
	}
	**/
}