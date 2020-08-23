class Node {
	constructor(d) {
		this.data = d;
		this.left = null;
		this.right = null;
		this.parent = null;
		this.occurences = 1;
	}
}

class BST {
	constructor() {
		this.root = null;
		this.order = {pre: 1, in: 2, post: 3};
		this.numberOfNodes = 0;
		this.numberOfEdges = -1;
	}

	insert(d) {
		if (this.root == null) this.root = new Node(d);
		else {
			let tmp = this.root;
			while (true) {
				if (d <= tmp.data) {

					if (d == tmp.data) 
						tmp.occurences++;
					

					if (tmp.left == null) { 
						tmp.left = new Node(d); 
						tmp.left.parent = tmp;
						break; 
					} else { tmp = tmp.left; }
				}
				else {
					if (tmp.right == null) { 
						tmp.right = new Node(d); 
						tmp.right.parent = tmp; 
						break;
					} else { tmp = tmp.right; }
				}
			}
		}
		this.numberOfNodes++;
		this.numberOfEdges++;
	}

	find(d) {
		let t = this.root;
		while(!(t == null)) {
			if (d == t.data) return t;
			if (d < t.data) t = t.left;
			if (d > t.data) t = t.right;
		}
		return null;
	}

	display(node, order=this.order.in) {

		if (!(node == null)) {
			switch(order) {
				case this.order.pre: {
					console.log(node.data); this.display(node.left, order); this.display(node.right, order); break;
				}
				case this.order.in: {
					this.display(node.left, order); console.log(node.data); this.display(node.right, order); break;
				}
				case this.order.post: {
					this.display(node.left, order); this.display(node.right, order); console.log(node.data); break;
				}
			}
			
		}
	}

	
	remove(d) {
		let t = this.find(d);
		if (t == null) return null;

		// leaf
		if (t.left == null && t.right == null) {
			(t.parent.data >= t.data) ? t.parent.left = null : t.parent.right = null;
			t.parent = null;
		}

		// first check right subtree (find minimum and switch their values)
		if (!(t.right == null)) {
			let min = t.right;
			while (!(min.left == null)) { min = min.left; }
			
			t.data = min.data;
			min.parent.left = null;
			min.parent = null;
			return;
		}

		// else check left subtree (find maximum and switch values)
		if (!(t.left == null)) {
			let max = t.left;
			while(!(max.right == null)) { max = max.right; }

			t.data = max.data;
			max.parent.right = null;
			max.parent = null;
			return;
		}
	}
	
}


// usage 
let bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(13);
bst.insert(99);
bst.insert(22);
bst.remove(23);
console.log(`${bst.display(bst.root, bst.order.pre)}\n Nodes: ${bst.numberOfNodes} Edges: ${bst.numberOfEdges}`);


let text = `How often do you take a moment to reflect on your thoughts and emotions? Have you ever explored the underlying causes of your behavior? Self-awareness drives us closer to ourselves. It lets us gain clarity over our emotions, and helps to identify the strengths and weaknesses that lie within us. Self-awareness is the byproduct of perceptual experiences. We cannot be aware of ourselves without focusing on what is happening to us right now and how we are responding to it.`;

let text_bst = new BST();
text.split(' ').forEach( (word) => {
	text_bst.insert(word);
});

console.log(text_bst.find('a'));