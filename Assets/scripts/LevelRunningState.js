﻿#pragma strict

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
var txt_flash : UnityEngine.UI.Text;
@HideInInspector
var dinosaur_fire : FireObjects;
@HideInInspector
var questions : String[];
@HideInInspector
var question_counter : int = 0;

function Start () {
	var g : GameObject;
	var i : int;
	var j : int;
	
	this.phase = LevelPhase.PHASE1;
	this.is_paused = false;

	this.questions = new String[5];
	this.questions[0] = "Test0";
	this.questions[1] = "Test1";
	this.questions[2] = "Test2";
	this.questions[3] = "Test3";
	this.questions[4] = "Test4";

	// fisher yates eh
	for (i=this.questions.Length - 1; i >= 0; i--) {
		var tmp_s : String;
		
		j = Random.Range(0, i);
		tmp_s = this.questions[i];
		this.questions[i] = this.questions[j];
		this.questions[j] = tmp_s;
	}

	g = GameObject.Find("Answered") as GameObject;
	this.txt_answered = g.GetComponent("Text") as UnityEngine.UI.Text;	
	
	g = GameObject.Find("Dodged") as GameObject;
	this.txt_dodged = g.GetComponent("Text") as UnityEngine.UI.Text;	
	
	g = GameObject.Find("Flash") as GameObject;
	this.txt_flash = g.GetComponent("Text") as UnityEngine.UI.Text;
	
	g = GameObject.Find("dinosaur") as GameObject;
	this.dinosaur_fire = g.GetComponent("FireObjects") as FireObjects;
}

function PauseLevel() {
	this.is_paused = true;
}

function UnpauseLevel() {
	this.is_paused = false;
}

public static function Singleton() : LevelRunningState {
	var g : GameObject;
	
	g = GameObject.Find("LevelRunningState") as GameObject;
	if (g == null) {
		return null;
	} else {
		return g.GetComponent("LevelRunningState") as LevelRunningState;
	}
}


function IsPaused() {
	return is_paused;
}

function FinishedLevel() {
	Application.LoadLevel("main_menu");
}

function CheckPhase() {
	if (this.phase == LevelPhase.PHASE1) {
		if ((this.questions_answered >= 10) ||
			(this.questions_dodged >= 60)) {
			
			this.phase = LevelPhase.PHASE2;
			this.dinosaur_fire.FIRE_RATE *= 0.75;
			this.dinosaur_fire.curr_fire_function = this.dinosaur_fire.FirePatternCrescent;
		}
	} else if (this.phase == LevelPhase.PHASE2) {
		if ((this.questions_answered >= 20) ||
			(this.questions_dodged >= 120)) {
			var gg : GameGlobals = GameGlobals.Singleton();
			if (gg) {
				gg.finished_questions = true;
			}
			
			this.txt_flash.text = "Done with questions!";
			this.Invoke("FinishedLevel", 3);
		}
	}
}

function GetQuestion()
{
	this.question_counter += 1;
	if (this.question_counter >= this.questions.Length) {
		this.question_counter = 0;
	}
	return this.questions[this.question_counter];
	
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
	
	this.FlashQuestion();	
}

function FlashQuestion() {
	this.txt_flash.text = GetQuestion();
	this.PauseLevel();	
	this.Invoke("UnflashQuestion", 3);
}

function UnflashQuestion() {
	this.txt_flash.text = "";
	this.UnpauseLevel();
}
