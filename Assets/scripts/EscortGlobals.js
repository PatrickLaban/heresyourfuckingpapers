#pragma strict

public var max_checkpoints = 2;
@HideInInspector
var checkpoints = 0;

public function CheckpointHit()
{
	this.checkpoints += 1;
	if (this.checkpoints >= this.max_checkpoints) {
		Application.LoadLevel("nop");
	}
}

function Start () {

}

function Update () {

}