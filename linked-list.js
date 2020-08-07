class Node {
    constructor(elm) {
        this.element = elm;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
        this.head.next = this.head;
    }

    find(item) {
        let current = this.head;
        while (current.element != item) {
            current = current.next;
        }
        return current;
    }

    insert(newElm, item) {
        let newNode = new Node(newElm);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
        newNode.prev = current;
    }

    display() {
        let current = this.head;
        while(!(current.next == null) && !(current.next.element == "head") ) {
            console.log(current.next.element);
            current = current.next;
        }
    }

    findPrev(item) {
        let current = this.head;
        while(!(current.next == null) && (current.next.element != item)) {
            current = current.next
        }
        return current;
    }

    remove(item) {
        let prevNode = this.findPrev(item);
        if (!(prevNode.next == null))
            prevNode.next = prevNode.next.next;
    }
}


let cities = new LinkedList();
cities.insert("Jerusalem", "head");
cities.insert("Boston", "Jerusalem");
cities.insert("Texas", "Boston");

cities.remove('Boston');

cities.display();
