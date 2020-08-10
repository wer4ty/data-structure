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
        console.log(K[i]);
    }
    return K[n][capacity];
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

console.log(knapsack(capacity, items, n));
console.log(items);

console.warn(knapsack_dynamic_programing(capacity,items,n));