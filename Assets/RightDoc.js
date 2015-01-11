#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(c : Collision2D) {
	var g : GameGlobals = GameGlobals.Singleton();
	if (g != null) {
		g.finished_invisible = true;
	}
	Application.LoadLevel ("main_menu");
}