using UnityEngine;
using System.Collections;

public class WrongDoc : MonoBehaviour {

	// Use this for initialization
	void Start () {

	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnCollisionEnter2D(Collision2D colli) {
		string[] bad_doc_responses = new string[]{
			"You need to do a medical check! Please see one of our pre-approved doctors.",
			"You need to give us a letter from your psychiatrist!",
			"You need to give us a list of every address you've ever lived in in the last ten years!",
			"You need to give us a list of every job you've had in the last ten years!",
			"You need to give us a list of every international trip you have made in the last ten years!",
			"You need to give us the contact details of five people who know you personally! They cannot be family members.",
			"You need to give us copies of all your communication between you and your partner for the duration of your relationship!",
			"You need to give us a list of every publication you have been published in!",
			"You need to give us police records from every country you've lived in for at least a year for the last ten years!",
			"You need to give us police records from your State Department of Justice! We know they say you cannot use that information for immigration purposes, but we need it anyway.",
			"You need to give us a detailed chart of how you are related to your sponsor!",
			"You need to give us your IELTS or TOEFL English Language test results! Even if English is your first language.",
			"You need to give us transcripts from every school you have ever been to!",
			"You need to sit a writing test! It does not matter that you scored straight As for your language exams in high school - that was over ten years ago.",
			"You need to know that your biggest responsibility as a new citizen is to vote for the Ruling Party because they gave you the gift of permanent residency!X",
			"You need to surrender your old passport!",
			"You need to give us all the financial statements of you and your sponsor to show that you can afford this trip!",
			"You need to write a Statement of Intent about your plans for your university degree!",
			"You need to give us a full set of fingerprints, both digitally and in print!",
			"You need to do a TB test! Please see one of our pre-approved radiographers.",
			"You need to do a blood test! Please see one of our approved pathologists.",
			"You need to translate all your documents into English!",
			"You need to give us photocopies of every page of every passport you have ever had!",
			"You need to give us your FBI record! Please follow these instructions that were already outdated.",
			"You need to tell us every email address you have used in the last ten years!"};
		//int indexer = Random.Next(bad_doc_responses.Count);
		GameObject g = GameObject.Find ("WrongText");
		UnityEngine.UI.Text t = g.GetComponent<UnityEngine.UI.Text> ();
		t.text = bad_doc_responses[Random.Range(0, bad_doc_responses.Length - 1)];
		Destroy (this.gameObject);
	}
}
