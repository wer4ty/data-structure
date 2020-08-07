function HashTable() {
    this.table = new Array(137);
    this.simpleHash = function(data) {
        let total = 0;
        for(let i=0; i<data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    this.put = function(data) {
        let pos = this.simpleHash(data);
        this.table[pos] = data;
    }

    this.showDistro = function() {

        let n = 0;
        for(let i=0; i<this.table.length; ++i) {
            if(this.table[i] != undefined) {
                console.log(`${i}: ${this.table[i]}`);
            }
        }
    }
}

// usage
let someNames = ["David", "Jennifer", "Donnie", "Raymond", "Dolores", "Mike", "Boby", "Tony", "Lucas"];
let hTable = new HashTable();
for(let i=0; i<someNames.length; i++) {
    hTable.put(someNames[i]);
}

hTable.showDistro();
