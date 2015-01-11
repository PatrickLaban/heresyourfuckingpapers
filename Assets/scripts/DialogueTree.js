#pragma strict

public class DialogueTree {
	public var root : DialogueTree.Node;
	
	public function DialogueTree() {
		this.root = null;
	}
	
	public class Speaker {
		public var name : String;
	}
	
	public class Node {
		public var text : String;
		public var choices : DialogueTree.Choice[];
		public var pass_through : boolean;
		
		public function Node(text : String) {
			this.text = text;
			this.pass_through = false;
		}
		
		public function Node(text : String, pass_through_percent : float) {
			this.text = text;
			this.pass_through = (Random.value <= pass_through_percent);
		}
	}
	
	public class Choice {
		public var description : String;
		public var next_node : DialogueTree.Node;
		public var load_level : String;
		public var is_input : boolean;
		
		public function Choice(desc : String, n : DialogueTree.Node) {
			this.description = desc;
			this.next_node = n;
			this.is_input = false;
		}
		
		public function jump_to() {
			return this.next_node;
		}
		
		public static function 
			NextChoiceFactory(jump_to : DialogueTree.Node) : DialogueTree.Choice[] {
			var def_choice : DialogueTree.Choice[] = new DialogueTree.Choice[1];
			def_choice[0] = new DialogueTree.Choice("next", jump_to);
			
			return def_choice;
		}
		
		public static function 
			InputChoiceFactory(jump_to : DialogueTree.Node) : DialogueTree.Choice[] {
			var def_choice : DialogueTree.Choice[] = new DialogueTree.Choice[1];
			def_choice[0] = new DialogueTree.Choice("next", jump_to);
			def_choice[0].is_input = true;
			
			return def_choice;
		}
		
		public static function LevelChoiceFactory() : DialogueTree.Choice[] {
			var def_choice : DialogueTree.Choice[] = new DialogueTree.Choice[1];
			def_choice[0] = new DialogueTree.Choice("next", null);
			def_choice[0].load_level = "main_menu";
			
			
			return def_choice;		
		}		
	}
}

