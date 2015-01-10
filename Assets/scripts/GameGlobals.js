#pragma strict

function Awake() {
	DontDestroyOnLoad(this.transform.gameObject);
}

public function PlayGame() {
	Application.LoadLevel("nop");
}

function Start () {

}

function Update () {

}