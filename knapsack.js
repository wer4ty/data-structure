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