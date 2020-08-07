class Queue {

    constructor() {
        this.data = [];
    }

    enqueue(elm) {
        this.data.push(elm);
    }

    dequeue() { return this.data.shift(); }
    front() {return this.data[0];}
    back() {return this.data[this.data.length - 1] }
    toString() { return this.data.join("\n");}
    empty() {return this.data.length == 0;}
}


class Dqueue {

    constructor() {
        this.data = [];
    }

    enqueue(elm, flag) {
        (flag) ? this.data.push(elm)  : this.data.unshift(elm);
    }

    dequeue(flag) { return (flag) ? this.data.shift() : this.data.pop(); }
    front() {return this.data[0];}
    back() {return this.data[this.data.length - 1] }
    toString() { return this.data.join("\n");}
    empty() {return this.data.length == 0;}
}




let q = new Queue();
//console.log(q);


let dq = new Dqueue();
dq.enqueue("Dor", true);
dq.enqueue("Marvin", true);
dq.enqueue("Diego", false);

dq.dequeue();
dq.dequeue();
console.log(dq.data);

