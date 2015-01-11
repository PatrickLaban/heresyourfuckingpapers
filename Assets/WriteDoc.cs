using UnityEngine;
using System.Collections;

public class WriteDoc : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnCollisionEnter2D(Collision2D colli) {
		Application.LoadLevel ("main_menu");
	}
}
