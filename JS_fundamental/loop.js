/*Please work on the following challenges and upload your work when done.

Print odds 1-20 - Using a loop write code that will console.log all of the odd values from 1 up to 20.
Print the sequence - Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
Sigma - Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050in the end.
Factorial - Write code that will multiply values from 1 to some value n until the variable product is larger than 100 million (1e8 for short). At the end console.log that value of n.*/

function addOdds(num){
    for (let i = 1; i <= num; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}

addOdds(20)

function printSeq(){
    for(let i = 4; i>=-3.5; i -= 1.5){
        console.log(i);
    }
}

printSeq()

function sigma(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(sigma(100));

 function Factorial(){
    let i = 1;
    let prod = 1;
    while(prod<=100000000){
        i++;
        prod *= i;
    }
    console.log(i);
 }

 Factorial()
