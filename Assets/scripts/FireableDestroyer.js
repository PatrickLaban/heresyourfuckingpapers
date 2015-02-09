#pragma strict

var destroy : String = "question_mark_prefab";

@HideInInspector
var running_state : LevelRunningState;

function Start () {
	var g : GameObject;
	
	g = GameObject.Find("LevelRunningState") as GameObject;
	this.running_state = g.GetComponent("LevelRunningState") as LevelRunningState;
}

function Update () {

}

function OnCollisionEnter2D(c : Collision2D) {
	// eh naive	
	if (c.gameObject.name.IndexOf(this.destroy) == 0) {
		Destroy(c.gameObject);
		this.running_state.IncDodged();		
	}
}