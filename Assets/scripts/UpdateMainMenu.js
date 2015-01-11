#pragma strict

function Start () {
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

function Update () {

}