class Node {
	constructor(key, d) {
		this.data = d;
		this.key = key;
		this.left = null;
		this.right = null;
		this.height = 0;
	}
}

class AVLTree {
		constructor() {
			this.root = null;
			this.order = {pre: 1, in: 2, post: 3};
		}

		addNode(d, key) {
			this.root = this.putNode(this.root, key, d);
		}

		print() {
			console.log(JSON.stringify(this.root));
		}

		putNode(node, key, d) {
			if (!node) return new Node(key, d);

			if (node.key > key)  {
				node.left = this.putNode(node.left, key, d)
			} 
			else if (node.key < key)  {
				node.right = this.putNode(node.right, key, d)
			} 
			else if (node.key == key) {
				node.data = d;
			}

			node.height = 1 + this.getSize(node.left) + this.getSize(node.right);

			return this.balance(node);
			
		}

		deleteNode(node, key) {

			let deleteMin = (node) => {
				if (node.left == null) return node.right;

				node.left = deleteMin(node.left);
				node.height = 1 + this.getSize(node.left) + this.getSize(node.right);

				return node;
			}

			if(!node) return null;

			if (node.key > key) node.left = this.deleteNode(node.left, key);
			else if (node.key < key) node.right = this.deleteNode(node.right, key);
			else {
				if (!node.right) return node.left;
				if (!node.left) return node.right;

				let t = node;
				node = this.getMin(t.right);
				node.right = deleteMin(t.right);
				node.left = t.left;

				return this.balance(node);
			}

			return this.balance(node);
		}

		getMin(node) {
			if (!node.left) return node;
			return this.getMin(node.left);
		}

		correctHeight(node) {
			let heightLeft = this.getSize(node.left);
			let heightRight = this.getSize(node.right);

			node.height = ( (heightLeft > heightRight) ? heightLeft : heightRight ) + 1;
		}

		balance(node) {
			let bfactor = (node) => {
				return this.getSize(node.right) - this.getSize(node.left);
			}


			this.correctHeight(node);

			if (bfactor(node) == 2) {

				if (bfactor(node.right) < 0) {
					node.right = this.rotateRight(node.right);
				}
				return this.rotateLeft(node);
			}

			if (bfactor(node) == -2) {

				if(bfactor(node.left) > 0) {
					node.left = this.rotateLeft(node.left);
				}
				return this.rotateRight(node);
			}

			return node;
		}

		rotateRight(node) {
			let tempNode = node.left;
			node.left = tempNode.right;
			tempNode.right = node;

			this.correctHeight(node);
			this.correctHeight(tempNode);

			return tempNode;
		}

		rotateLeft(node) {
			let tempNode = node.right;
			tempNode.right = node.left;
			node.left = node;

			this.correctHeight(node);
			this.correctHeight(tempNode);

			return node;
		}

		getSize(node) {
			if (!node) return 0;
			return node.height;
		}

		display(node=this.root, order=this.order.pre) {

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

}


// usage 
let array = [10,9,8,7,6,5,4,3,2,1,0];
//array.generate_numbers(100);

let avl_tree = new AVLTree();

array.forEach(function(element){
	avl_tree.addNode(element, element);
	avl_tree.print();
});

//avl_tree.display();
//avl_tree.deleteNode(7);
//avl_tree.print();