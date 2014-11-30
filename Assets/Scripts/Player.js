#pragma strict

function Start () {
	rigidbody.velocity.x = 20;

}

function Update () {
	if(rigidbody.velocity.x >0){
	rigidbody.velocity.x -= 0.1;
	}
	else{
	rigidbody.velocity.x =0;
	}

}

function Jump() {

}