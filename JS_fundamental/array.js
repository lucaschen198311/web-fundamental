//Array Challenges

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function evensOfOdds(arr) {
    let totalOdds = 0;
    let totalEvens = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            totalEvens += arr[i];
        }else{
            totalOdds += arr[i]
        }
    }
    if(totalEvens>totalOdds){
        return "evens are larger"
    }else if(totalEvens<totalOdds){
        return "odds are larger"
    }else{
        return "tied"
    }
}
   
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"


function betterThanAverage(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    let count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    if(n<2){
        return;
    } 
    let fibArr = [0, 1];
    for(let i=1; i<n-1; i++){
        numFib = fibArr[i-1] + fibArr[i];
        fibArr.push(numFib);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
