timeMeasure = (startFunctionTime) => {
   return  (Date.now() - startFunctionTime);
}

max = (a,b) => (a > b) ? a : b; 

knapsack = (capacity, items, n) => {
    if(n == 0 || capacity == 0) 
        return 0;

    if(items[n-1].size > capacity)
        return knapsack(capacity, items, n-1)
    else
        return max(
            items[n-1].value + knapsack(capacity-items[n-1].size, items, n-1), 
            knapsack(capacity, items, n-1)
            );
}

knapsack_dynamic_programing = (capacity, items, n) => {
    let K = new Array(capacity+1).fill([]);
    
    for(let i=0; i<=n; i++) {
        for(let w =0; w<= capacity; w++) {
            if (i == 0 || w == 0) { 
                K[i][w] = 0; 
            }
            else if (items[i-1].size <= w) { 
                K[i][w] = max(items[i-1].value + K[i-1][w-items[i-1].size], K[i-1][w]) 
            }
            else {
                K[i][w] = K[i-1][w];
            }
        }
    }
    return K[n][capacity];
}

greedy_approach_knapsack = (capacity, items, n) => {
    let temp = items.map( x =>  { 
        return {value: x.value, size: x.size, ratio: parseFloat((x.value / x.size).toFixed(4)) }  
    }).sort((a,b) => a.ratio > b.ratio ? 1 : -1 );

  
    if(n == 0 || capacity == 0) 
        return 0;

    let res = 0;
    
    for (let i = n; i--; i >=0) {
        if(n == 0 || capacity == 0){
            break;
        }

        if (capacity >= temp[i].size) {
            res += temp[i].value;
            capacity -= temp[i].size;
            temp.splice(i, 1);
            n--;
        }
    }
    return res;

}

// usage 
let items = [
    {value: 4, size: 3, name: "MotionController"},
    {value: 5, size: 4, name: "SollarLaptop"},
    {value: 10, size: 7, name: "IcePen"},
    {value: 11, size: 8, name: "IronPaper"},
    {value: 13, size: 9, name: "QuarkWall"}
];

let capacity = 16;
let n =5;


startTime = Date.now();
console.log(knapsack(capacity, items, n));
console.log(`knapsack recursive: ${timeMeasure(startTime)} miliseconds`)

startTime = Date.now();
console.log(knapsack_dynamic_programing(capacity,items,n));
console.log(`knapsack_dynamic_programing: ${timeMeasure(startTime)} miliseconds`)

startTime = Date.now();
console.log(greedy_approach_knapsack(capacity,items,n));
console.log(`greedy_approach_knapsack: ${timeMeasure(startTime)} miliseconds`)