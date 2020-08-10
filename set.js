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


/*
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 10000)
  });

  let result =  await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}

f();


function delay(ms) {
    return  new Promise( (resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

delay(3000).then( () => {
     console.log('execute after 3 seconds')
     return new Promise((resolve, reject) => { setTimeout(resolve, 1000) })
     }).then( () => {
          console.log('execute after 4 seconds')
          })



let inBetween = (s_in, s_out) => {
    return (x) => { return x >= s_in && x <= s_out };  
}

let inArray = (arr_temp) => {
    return (x) => { return arr_temp.includes(x); }
}

let arr = [1,2,3,4,5,6,7];
let res = arr.filter(inBetween(3, 6));
let res2 = arr.filter(inArray([1,2,10]));

console.log(res);
console.log(res2);

let byField = (fieldName) => {
    return (a,b) =>  {
        return a[fieldName] > b[fieldName] ? 1 : -1
    }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('age'));
console.log(users);
console.log(arr.filter(inBetween(3,6)));



function makeArmy() {
  let shooters = [];
  
  for(let ik=0; ik < 10; ik++) {
    let shooter = function() {  console.log(ik); };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();
console.log(army)
army.forEach(x => x());



function sum2(a) {
  return (b) => {
    return () => a + b;
  }
}

console.log(sum2(1)(2)(3));

inBetween = (a,b) => i => i >= a && i <= b;
inArray = (arr) => x => arr.includes(x);

let arr = [1,2,3,4,5,6,7];
let res = arr.filter(inBetween(3, 6));
console.log(res);

let res2 = arr.filter(inArray([5, 6, 10]));
console.log(res2);

*/

