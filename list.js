class List {

    constructor() {
        this.pos = 0;
        this.listSize = 0;
        this.data = [];
    }

    get() {
        return (this.data && this.data.length > 0) ? this.data[this.pos] : undefined;
    }

    length() {return this.listSize; }

    insert(v) { 
            this.data.unshift(v);
            this.listSize++;
    }

    clear() {
        delete this.data;
        this.data = [];
        this.listSize = this.pos = 0;
    }

    append(v) {
        this.data[this.listSize++] = v;
    }

    front() { this.pos = 0;}
    prev() { (this.pos > 0) ? --this.pos : this.pos = 0; }
    end() { this.pos = this.listSize-1; }
    next() { if (this.pos < this.listSize-1) { ++this.pos; return true; } return false; }
    moveTo(index) { this.pos = (this.index >= 0 && this.index <= this.listSize-1) ? index : 0; }
    currPos() { return this.pos; }

    find(listItem) {
        return this.data.indexOf(listItem.toString())
    }

    remove(listItem) {
        let index = this.find(listItem);
        (index > -1) ? this.data.splice(index,1) : undefined;
    } 
}

let t = new List();
t.insert('Good');
t.insert('News');
t.insert('Good');









for(t.front(); t.next();) console.log(`${t.currPos()} < ${t.length()} Values is: ${t.get()}`);


