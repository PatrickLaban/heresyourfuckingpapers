#pragma strict

public var finished_escort = false;
public var finished_invisible = false;

function Awake() {
	DontDestroyOnLoad(this.transform.gameObject);
}

public static function Singleton() : GameGlobals {
	var o : GameObject = GameObject.Find("GameGlobals");
	if (o == null) {
		return null;
	}
	return o.GetComponent("GameGlobals") as GameGlobals;
}

public function PlayGame() {
	// TODO: open an intro dialogue
	Application.LoadLevel("main_menu");
}

function Start () {

}

function Update () {

}