#pragma strict

@HideInInspector
var approved : GameObject;
@HideInInspector
var rejected : GameObject;

function Start () {
	this.approved = GameObject.Find("approved");
	this.approved.SetActive(false);
	this.rejected = GameObject.Find("rejected");
	this.rejected.SetActive(false);

	var g : GameGlobals = GameGlobals.Singleton();	
	if (g != null) {
		var t : UnityEngine.UI.Toggle;
		var b : UnityEngine.UI.Button;
		
		if (g.finished_escort) {
			t = GameObject.Find("toggle_escort").GetComponent("Toggle") as UnityEngine.UI.Toggle;
			b = GameObject.Find("button_escort").GetComponent("Button") as UnityEngine.UI.Button;
			b.gameObject.SetActive(false);
			t.isOn = true;			
		}
		
		if (g.finished_invisible) {
			t = GameObject.Find("toggle_invisible").GetComponent("Toggle") as UnityEngine.UI.Toggle;
			b = GameObject.Find("button_invisible").GetComponent("Button") as UnityEngine.UI.Button;
			b.gameObject.SetActive(false);		
			t.isOn = true;
		}
	}
}

public function LaunchLevel(lev : String) {
	Application.LoadLevel(lev);
}

public function SubmitApplication() {
	var win_percent : float = 10.0;
	var g : GameGlobals = GameGlobals.Singleton();	
	
	if (g.finished_escort) {
		win_percent += 20.0;
	}
	
	if (g.finished_invisible) {
		win_percent += 20.0;
	}
	
	if (Random.value <= win_percent) {
		this.approved.SetActive(true);
	} else {
		this.rejected.SetActive(true);
	}
}

function Update () {

}