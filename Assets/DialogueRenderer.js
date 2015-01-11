#pragma strict

@HideInInspector
var dtree : DialogueTree;
var curr_node : DialogueTree.Node;

var dpanel_obj : GameObject;
var dtext_obj : GameObject;
var dtext_rt : RectTransform;
var dtext : UnityEngine.UI.Text;

var button_prefab : UnityEngine.Object;
var input_prefab : UnityEngine.Object;

var cleanup : function();

function BuildTree()
{
	var choices = new Array();
	var n : DialogueTree.Node;
	var next : DialogueTree.Node;
	
	this.dtree = new DialogueTree();
	
	n = new DialogueTree.Node("Your name?");
	this.dtree.root = n;
	
	next = new DialogueTree.Node("Your name doesn't match.", 0.6);
	n.choices = DialogueTree.Choice.InputChoiceFactory(next);
	
	n = next;
	next = new DialogueTree.Node("Your gender?");
	n.choices = DialogueTree.Choice.NextChoiceFactory(next);
	
	n = next;
	next = new DialogueTree.Node("That can't be right. What are you, really?", 0.2);
	n.choices = DialogueTree.Choice.InputChoiceFactory(next);
	
	n = next;
	next = new DialogueTree.Node("Where are you from?");
	n.choices = DialogueTree.Choice.NextChoiceFactory(next);
	
	n = next;
	next = new DialogueTree.Node("No, really, where are you from?", 0.8);
	n.choices = DialogueTree.Choice.InputChoiceFactory(next);
	
	n = next;	
	next = new DialogueTree.Node("You don't look like it.", 0.9);
	n.choices = DialogueTree.Choice.InputChoiceFactory(next);

	n = next;	
	next = new DialogueTree.Node("Do you speak English?", 0.4);
	n.choices = DialogueTree.Choice.NextChoiceFactory(next);
	
	n = next;	
	next = new DialogueTree.Node("I said, DO YOU SPEAK ENGLISH?", 0.3);
	n.choices = DialogueTree.Choice.NextChoiceFactory(next);
	
	n = next;
	next = new DialogueTree.Node("What is your job?");
	n.choices = DialogueTree.Choice.NextChoiceFactory(next);
	
	n = next;
	next = new DialogueTree.Node("How does that get you money?", 0.5);
	n.choices = DialogueTree.Choice.InputChoiceFactory(next);
	
	n = next;
	next = new DialogueTree.Node("Is that even legal?", 0.2);
	n.choices = DialogueTree.Choice.NextChoiceFactory(next);
	
	n = next;
	next = new DialogueTree.Node("OK, I'll let you through this time.");
	n.choices = DialogueTree.Choice.NextChoiceFactory(next);
	
	n = next;
	n.choices = DialogueTree.Choice.LevelChoiceFactory();
}

function Start () {
	this.BuildTree();
	
	this.button_prefab = Resources.Load("BareButton") as UnityEngine.Object;
	this.input_prefab = Resources.Load("BareInput") as UnityEngine.Object;
	
	this.dpanel_obj = GameObject.Find("dialogue_ui");
	this.dtext_obj = GameObject.Find("dialogue_text");
	this.dtext_rt = this.dtext_obj.GetComponent("RectTransform") as RectTransform;
	this.dtext = this.dtext_obj.GetComponent("Text") as UnityEngine.UI.Text;
	
	this.RenderDialogue(this.dtree.root);
}

function RenderChoice(c : DialogueTree.Choice, i : int) {
	var o : GameObject;
	var prefab : UnityEngine.Object;
	
	if (c.is_input) {
		prefab = this.input_prefab;
	} else {
		prefab = this.button_prefab;
	}
	
	o = Instantiate(prefab, new Vector3(0,0,0), Quaternion.identity ) as GameObject;
	
	var rt : RectTransform = o.GetComponent("RectTransform") as RectTransform;
	var b : UnityEngine.UI.Button;

	o.transform.SetParent(this.dpanel_obj.transform);
	o.transform.localPosition.x += (rt.rect.width / 2.0) + 10;	
	var top_y : float = this.dtext_rt.localPosition.y - (rt.rect.height / 2.0);
	o.transform.localPosition.y = top_y - (i*(rt.rect.height + 5));

	if (c.is_input) {
		var inp : UnityEngine.UI.InputField = o.GetComponent("InputField") as UnityEngine.UI.InputField;
		var button_obj : GameObject = GameObject.Find("button_submit") as GameObject;
		
		b = button_obj.GetComponent("Button") as UnityEngine.UI.Button;
	} else {
		var button_text : UnityEngine.UI.Text = o.transform.GetChild(0).gameObject.GetComponent("Text")
			as UnityEngine.UI.Text;
		
		b = o.GetComponent("Button") as UnityEngine.UI.Button;
		button_text.text = c.description;
	}
	
	b.onClick.RemoveAllListeners();
	this.cleanup = function() {
		o.SetActive(false);
		Destroy(o);
		
		// erg much kludge
		var n : DialogueTree.Node = c.jump_to();
		if (n == null) {			
			Application.LoadLevel(c.load_level);
		} else {
			this.RenderDialogue(n);
		}
	};	
	b.onClick.AddListener(this.cleanup);
}

function RenderDialogue(n : DialogueTree.Node)  {
	var i : int = 0;
	
	if (n.pass_through) {
		var choice = n.choices[0];
		var next : DialogueTree.Node = choice.jump_to();
		if (next == null) {			
			Application.LoadLevel(choice.load_level);
		} else {
			this.RenderDialogue(next);
		}
		return;
	}
	
	this.dtext.text = n.text;
	this.curr_node = n;
	
	for (var c : DialogueTree.Choice in n.choices) {
		this.RenderChoice(c, i);
			
		i += 1;
	}
}

function Update () {

}