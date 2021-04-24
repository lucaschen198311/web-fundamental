function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

let piz1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
let piz2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
let piz3 = pizzaOven("Neapolitan", "Pesto", ["mozzarella"], ["mushrooms", "tomattos", "fish"]);
let piz4 = pizzaOven("New York Style", "Marinara Sauce", ["mozzarella", "Switss"], ["onion", "olives"]);

//console.log(piz1, piz2, piz3, piz4) 

let arr = [piz1, piz2, piz3, piz4]
function randomPizza(arr){
    let randomNum = Math.random()*arr.length;
    let idx = Math.trunc(randomNum);
    console.log(idx)
    return arr[idx]
}
let ranpiz = randomPizza(arr)
console.log(ranpiz)
