function reverse_arr(arr){
    var n = arr.length
    if(n < 2){
        return arr;
    }
    for(var i = 0; i<n/2; i++){
        var temp=arr[i];
        var symetric = n-1-i;
        arr[i] = arr[symetric];
        arr[symetric] = temp
    }
    return arr;
}

var a = [1,2,3,4,5];
console.log(reverse_arr(a));

//console.log(a.reverse())