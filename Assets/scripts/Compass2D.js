#pragma strict

@HideInInspector
var target : GameObject;

function Start () {
	this.target = GameObject.Find("basic_document_r");
}

function Update () {
	var x : float = this.target.transform.position.x - this.transform.position.x;
	var y : float = this.target.transform.position.y - this.transform.position.y;
	
	var angle : float = Mathf.Atan(x / y) * Mathf.Rad2Deg;
	
	// handedness is backwards for some reason, probably investigate later	
	this.transform.eulerAngles = new Vector3(0, 0, -angle);
}