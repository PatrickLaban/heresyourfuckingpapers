#pragma strict

enum LevelPhase { PHASE1, PHASE2 }
var phase : LevelPhase;

@HideInInspector
var is_paused : boolean;

@HideInInspector
var questions_answered : int;
@HideInInspector
var questions_dodged : int;
@HideInInspector
var txt_dodged : UnityEngine.UI.Text;
@HideInInspector
var txt_answered : UnityEngine.UI.Text;
@HideInInspector
var dinosaur_fire : FireObjects;

function Start () {
	var g : GameObject;
	
	this.phase = LevelPhase.PHASE1;
	this.is_paused = false;

	g = GameObject.Find("Answered") as GameObject;
	this.txt_answered = g.GetComponent("Text") as UnityEngine.UI.Text;	
	
	g = GameObject.Find("Dodged") as GameObject;
	this.txt_dodged = g.GetComponent("Text") as UnityEngine.UI.Text;	
	
	g = GameObject.Find("dinosaur") as GameObject;
	this.dinosaur_fire = g.GetComponent("FireObjects") as FireObjects;
}

function PauseGame() {
	this.is_paused = true;
}

function UnpauseGame() {
	this.is_paused = false;
}

function IsPaused() {
	return is_paused;
}

function CheckPhase() {
	if (this.phase == LevelPhase.PHASE1) {
		if ((this.questions_dodged >= 80) ||
			(this.questions_answered >= 10)) {		
			this.phase = LevelPhase.PHASE2;
			this.dinosaur_fire.curr_fire_function = this.dinosaur_fire.FirePatternCrescent;
		}
	} else if (this.phase == LevelPhase.PHASE2) {
		if ((this.questions_answered >= 25) ||
			(this.questions_dodged >= 160)) {
			var gg : GameGlobals = GameGlobals.Singleton();
			if (gg) {
				gg.finished_questions = true;
			}
			Application.LoadLevel("main_menu");
		}
	}
}

function IncDodged() {
	this.questions_dodged += 1;
	this.txt_dodged.text = "Questions Dodged: " + this.questions_dodged;
	this.CheckPhase();
}

function IncAnswered() {
	this.questions_answered += 1;
	this.txt_answered.text = "Questions Answered: " + this.questions_answered;
	this.CheckPhase();
}

function Update () {
	if (Input.GetButton("Fire2")) {
		this.is_paused = !this.is_paused;
	}
}