#pragma strict

private var ray :Ray;
private var hit :RaycastHit;
var bScore : TextMesh;

function Start () {

}

function Awake(){
	bScore.text = "Score: " + PlayerPrefs.GetInt("brickScore");
}

function Update () {

	if(Input.GetMouseButtonDown(0)){
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit)){
			if(hit.transform.name == "BrickBreakerOption"){
		
			}
			if(hit.transform.name == "TempleRunOption"){
				Application.LoadLevel("TempleRun");
			}
		}
	}
}