#pragma strict

public var is_active : boolean = false;
public var next_checkpoint : String = "";
@HideInInspector
var finished = false;

function Start () {
}

/*
function RandomPos() : Vector3 {
	var dims = Boundary2D.CameraBounds();
	var min_y : float = dims['min_y'];
	var max_y : float = dims['max_y'];
	var min_x : float = dims['min_x'];
	var max_x : float = dims['max_x'] as float;
	
	min_x += this.collider2D.bounds.size.x;
	max_x -= this.collider2D.bounds.size.x;
	min_y += this.collider2D.bounds.size.y;
	max_y -= this.collider2D.bounds.size.y;
	
	var x = min_x + (Random.value * (max_x - min_x));
	var y = min_y + (Random.value * (max_y - min_y));
	return new Vector3(x, y, 0);
}
*/

function OnCollisionEnter2D(collision : Collision2D) {
	if (this.finished) {
		return;
	}
	
	if (!this.is_active) {
		// TODO: something clever here to tease player for trying shortcuts
		return;
	}
	
	if (collision.transform.name != "document") {
		return;
	}
	
	/*
	// do this first so we have the original sprite
	var o = Checkpoint.Instantiate(this, this.RandomPos(), Quaternion.identity);	
	o.transform.parent = GameObject.Find("background").transform;
	o.transform.localPosition.z = 0;
	*/
	
	var done : GameObject = GameObject.Find("checkpoint_done");
	if (done == null) {
		return;
	}

	var r : SpriteRenderer = this.GetComponent(SpriteRenderer);
	r.sprite = done.GetComponent(SpriteRenderer).sprite;
	finished = true;
	
	if (this.next_checkpoint == "") {
		var g : GameGlobals = GameGlobals.Singleton();		
		g.finished_escort = true;
		Application.LoadLevel("main_menu");
	} else {		
		var next : Checkpoint = GameObject.Find(this.next_checkpoint).GetComponent("Checkpoint") as Checkpoint;
		next.is_active = true;
	}
}

function Update () {
}