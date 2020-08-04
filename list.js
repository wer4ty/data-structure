class List {

    constructor() {
        this.pos = 0;
        this.length = 0;
        this.listSize = 0;
        this.data = [];
    }

    get() {
        return (this.data && this.data.length > 0) ? this.data[this.pos] : undefined;
    }

    insert(v) { 
        let data_temp = [];
        data_temp[0] = v;
        for(let i = 1; i<this.listSize; i++) {
            data_temp[i] = this.data[i];
        }
        
        this.data = data_temp;
    }

    clear() {
        delete this.data;
        this.data = [];
        this.listSize = 0;
    }

    append(v) {
        this.data[this.listSize++] = v;
    }
}

let t = new List();
t.insert('Good');
t.insert('News');
console.log(t);



