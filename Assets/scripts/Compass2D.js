#pragma strict

@HideInInspector
var target : GameObject;

function Start () {
	this.target = GameObject.Find("basic_document_r");
}

function Update () {
	var x : float = this.target.transform.position.x - this.transform.position.x;
	var y : float = this.target.transform.position.y - this.transform.position.y;
	var ax : float = Mathf.Abs(x);
	var ay : float = Mathf.Abs(y);
	
	var angle : float = Mathf.Atan(ax / ay) * Mathf.Rad2Deg;
	
	/* angle is always off y-axis in quadrant I since arrow starts pointing up */
	if ((x > 0) && (y > 0)) {
		/* Quadrant I */
		this.transform.eulerAngles = new Vector3(0, 0, -angle);		
	} else if ((x < 0) && (y > 0)) {
		/* Quadrant II */
		this.transform.eulerAngles = new Vector3(0, 0, angle);
	} else if ((x < 0) && (y < 0)) {
		/* Quadrant III */
		this.transform.eulerAngles = new Vector3(0, 0, 180 - angle);
	} else {
		/* Quadrant IV */
		this.transform.eulerAngles = new Vector3(0, 0, 180 + angle);
	}	
}