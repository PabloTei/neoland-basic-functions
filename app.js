// Iteración #1: Buscar el máximo

function sum(numberOne , numberTwo) {
   return Math.max(numberOne, numberTwo)
    
  }

console.log(sum(10, 5));


// Iteración #2: Buscar la palabra más larga --------- Este lo estoy pensando aún

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

for (let i = 0; i < avengers.length; i++) {

    let long = avengers[i++];
    

if (avengers[i].length > long.length) {
        
        long = avengers[i];
        
        console.log(avengers[i]);
    
    } else {
        
    }
    
}


// Iteración #3: Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {

    let total = 0;
    
    for (const number of numbers) {
        total += number

    }

return total;
        
}

console.log(sumAll(numbers))


// Iteración #4: Calcular el promedio

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    
    let total = 0;
    let i = 0;

    for (const number1 of numbers1) {
        
        i++;
        total += number1;
        
    }

    let promedio = total / i;

    return promedio;

}

console.log(average(numbers1));
    


