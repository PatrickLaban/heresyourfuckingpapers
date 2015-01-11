using UnityEngine;
using System.Collections;

public class DisplayMessage : MonoBehaviour {

	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnCollision2D(Collision2D other) {
		GUI.Label(new Rect(5,5,5,5), "Label text");
		Debug.Log ("test");	
		}
}
