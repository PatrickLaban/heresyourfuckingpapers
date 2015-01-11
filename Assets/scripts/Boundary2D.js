#pragma strict

public enum BoundLocation { LEFT, RIGHT, TOP, BOTTOM };
var location : BoundLocation = BoundLocation.TOP;

public static function CameraBounds() {
	// ugh assuming screen is always wider than high
	var dims : float[] = new float[4];
	var terrible : float = Screen.height;
	var y_scale : float = terrible / Screen.width;
	
	dims[0] = Camera.main.transform.position.y - (Camera.main.orthographicSize*y_scale) + 1;
	dims[1] = Camera.main.transform.position.y + (Camera.main.orthographicSize*y_scale) - 1;
	dims[2] = Camera.main.transform.position.x - Camera.main.orthographicSize;
	dims[3] = Camera.main.transform.position.x + Camera.main.orthographicSize;
	
	return dims;
}

function Start () {
	var dims = Boundary2D.CameraBounds();
	
	switch (this.location) {
		case BoundLocation.BOTTOM:
			this.transform.position.y = dims[0] - this.collider2D.bounds.size.y;
			break;
		case BoundLocation.TOP:
			this.transform.position.y = dims[1] + this.collider2D.bounds.size.y;
			break;
		case BoundLocation.LEFT:
			this.transform.position.x = dims[2] - this.collider2D.bounds.size.x;
			break;
		case BoundLocation.RIGHT:
			this.transform.position.x = dims[3] + this.collider2D.bounds.size.x;
			break;
	}
}

function Update () {

}