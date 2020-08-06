class Stack {

    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(elm) { this.data[this.top++] = elm; }
    pop() { return this.data[--this.top]; }
    peek() { return this.data[this.top-1]; }
    length() { return this.top; }
    clear() { this.top = 0; this.data = []; }

}



// usage

// 1) Base converted
let カ = (num, base) => {
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);

    } while (num > 0);
    let converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

//console.log(カ(4,2));


// 2) Polindrom Check
let タタ = (word) => {
    let s = new Stack();
    word.split('').map( (w) => s.push(w));
    let rword = "";
    while(s.length() > 0) rword += s.pop();
    console.log(word == rword);

}

//タタ("tehet");

// 3) Factorial by stack using
let ハ = (n) => {
    let s = new Stack();
    while (n > 1) s.push(n--);
    let res = 1;
    while(s.length() > 0 ) res *= s.pop();
    return res;
}

//console.log(ハ(5));


// 4) parentheses balance
let モ = (exp) => {
    let s = new Stack();
    exp.split('').forEach(l => {
        (l == '(') ? s.push(l) : '';
        (l == ')') ? s.pop() : '';
    });
    return s.length() == 0;
}

//console.log(モ("(2+3)*8-(25+8)+17)))"));

// 5) Expression evaluation
let ヒ = (exp) => {
    let s1 = new Stack();
    let s2 = new Stack();

    exp.split('').forEach(l => {
        if(!isNaN(parseFloat(l))) { 
          s1.push(parseFloat(l)) 
        }
         
        else {
          (s2.length() > 0 ) ? s1.push(s2.pop()) : '';
          s2.push(l);
        } 
    });

    s1.push(s2.pop()); // clear last operator

    console.log(s1);
    while(s1.length() > 0) s2.push(s1.pop());
    console.log(s2);

    // calculation
    s1.clear(); 
    while(s2.length() > 0) {
        let l = s2.pop()
        if(!isNaN(parseFloat(l))) { s1.push(l);  }
        else { 
            let op1 = s1.pop();
            let op2 = s1.pop();
            switch (l) {
                case "+": s1.push(op1+op2); break;
                case "-": s1.push(op1-op2); break;
                case "*": s1.push(op1*op2); break;
                case "/": s1.push(op1/op2); break;
            }
        }
    }
    console.log(s1.pop());

}
//ヒ("8-9+5");

// 6) Dispenser [Red, Yellow, White]
let シチ = (colorName) => {

    let s1 = new Stack();
    s1.push("White");
    s1.push("Yellow");
    s1.push("Red");

    let s2 = new Stack();
    while(s1.length() > 0) {
        let color = s1.pop();
        (color != colorName) ? s2.push(color) : ''
    }
    
    s1.clear();
    while(s2.length() > 0) 
        s1.push(s2.pop());

    console.log(s1);
}

シチ("Yellow");