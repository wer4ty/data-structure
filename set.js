function Set() {
    this.dataStore = [];
    this.add = function(d) {
        if(this.dataStore.indexOf(d) < 0) {
            this.dataStore.push(d);
            return true;
        }
        else {
            return false;
        }
    }
    this.remove = function(d) {
        let pos = this.data.indexOf(d);
        if (pos > -1) {
            this.dataStores.splice(pos,1);
            return true;
        } else {
            return false;
        }
    }
    this.size = function() { return this.dataStore.length; }

    this.union = function(set) {
        let temp = new Set();
        this.dataStore.forEach(v => temp.add(v));
        set.dataStore.forEach(v => { (!temp.constrains(v)) ? temp.add(v)  : ''; })
        return temp;
    }
    this.intersect = function(set) {
        let temp = new Set();
        this.dataStore.forEach(v => {
            (set.constrains(v)) ? temp.add(v) : ''
        });
        return temp;
    }


    this.subset = function(set) {
        if(this.size > set.size()) {
            return false;
        }
        else {
            for(let m in this.dataStore) {
                if(!set.constrains(m))  return false;  
            }
        }
        return true;
    }
    this.difference = function() {}
    this.show = function()  { return this.dataStore; }

    function constrains(d) {
       return (this.dataStore.indexOf(d) > -1) 
    }


}

// usage
let names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Mike");

let names2 = new Set();
names.add("David2");
names.add("Jennifer2");
names.add("Mike2");
    (names.add("Mike")) ? console.log("Mike added") : console.log("Cannot add Mike") ;
names.union(names2);
console.log(names.show())