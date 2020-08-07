class Dictionary {

    constructor() {
        this.data = new Array();
    }

    add(key, value) {
        this.data[key] = value;
    }

    find(key) {
        return this.data[key];
    }

    remove(key) {
        delete this.data[key];    
    }

    showAll() {
        Object.keys(this.data).sort().forEach(key => {
            console.log(`${key} -> ${this.data[key]}`);
        })
    }

    count() {
        let count = 0;
        Object.keys(this.data).forEach( (k) =>  count++ );
        return count;
    }

}


let pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("Tomy", "444");
pbook.add("David", "7770");
//console.log(`David extension: ${pbook.find('David')}`);
//pbook.showAll()


// exercise
function countWords(text) {
    let di = new Dictionary();
    text.split(' ').forEach( w => {
        let val = di.find(w);
        (!isNaN(val)) ? di.add(w,++val) : di.add(w,1);
    });
    di.showAll();
}


let text = "the brown fox jumped over the blue fox";
countWords(text);

