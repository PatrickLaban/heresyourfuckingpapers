#pragma strict

var fireable_name : String = "question_mark_prefab";

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
	if (c.gameObject.name.IndexOf(this.fireable_name) == 0) {
		Destroy(c.gameObject);		
		this.running_state.IncAnswered();
	}
}