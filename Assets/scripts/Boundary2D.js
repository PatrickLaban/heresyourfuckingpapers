#pragma strict

public enum BoundLocation { LEFT, RIGHT, TOP, BOTTOM };
var location : BoundLocation = BoundLocation.TOP;

public static function CameraBounds() {
	// ugh assuming screen is always wider than high
	var dims = {};
	var terrible : float = Screen.height;
	var y_scale : float = terrible / Screen.width;
	
	dims['min_y'] = Camera.main.transform.position.y - (Camera.main.orthographicSize*y_scale) + 1;
	dims['max_y'] = Camera.main.transform.position.y + (Camera.main.orthographicSize*y_scale) - 1;
	dims['min_x'] = Camera.main.transform.position.x - Camera.main.orthographicSize;
	dims['max_x'] = Camera.main.transform.position.x + Camera.main.orthographicSize;
	
	return dims;
}

function Start () {
	var dims = Boundary2D.CameraBounds();
	
	switch (this.location) {
		case BoundLocation.BOTTOM:
			var tmp0 : float = dims['min_y'];
			this.transform.position.y = tmp0 - this.collider2D.bounds.size.y;
			break;
		case BoundLocation.TOP:
			var tmp1 : float = dims['max_y'];
			this.transform.position.y = tmp1 + this.collider2D.bounds.size.y;
			break;
		case BoundLocation.LEFT:
			var tmp2 : float = dims['min_x'];
			this.transform.position.x = tmp2 - this.collider2D.bounds.size.x;
			break;
		case BoundLocation.RIGHT:
			var tmp3 : float = dims['max_x'];
			this.transform.position.x = tmp3 + this.collider2D.bounds.size.x;
			break;
	}
}

function Update () {

}