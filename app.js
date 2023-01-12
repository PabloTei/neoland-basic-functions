// Iteración #1: Buscar el máximo

function sum(numberOne , numberTwo) {
   return Math.max(numberOne, numberTwo)
    
  }

console.log(sum(10, 5));


// Iteración #2: Buscar la palabra más larga --------- Este lo estoy pensando aún

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

    function findLongestWord(param) {
        
        let comp = "";

        for (const item of avengers) {
            
            if (item.length > comp.length) {
                
                comp = item;
                
            } 
        
        }   
        return comp;
    }

console.log(findLongestWord(avengers));


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


// Iteración #5: Calcular promedio de strings


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {

    let sumaNum = 0;
    let sumaStr = 0;

    for (const element of mixedElements) {
        
        if(element === element/1) {
            sumaNum += element;
            
        } else {

            parseInt.sumaStr;
            sumaStr += element.length;
           
        }
        
    }

    return sumaNum + sumaStr;

}

console.log(averageWord(mixedElements));


// Iteración #6: Valores únicos

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
    
  ];

function removeDuplicates(param) {
    let compElement = "";
    let comp = [];

        for (const element of duplicates) {

            if(element != compElement && comp.includes(element) === false) {

                compElement = element;
                comp.push(compElement);

            }
            
        }
         return comp;
}

console.log(removeDuplicates(duplicates));


// Iteración #7: Buscador de nombres


const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

    function finderName(name) {

        if (nameFinder.includes(name)) {

            console.log(true, nameFinder.indexOf(name));
            
        } else {

            console.log(false);
        }
          
    } 

console.log(finderName("Marc"));


// Iteration #8: Contador de repeticiones

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code',
  ];

  //function repeatCounter(param) {
    

        let i = 0;
        let newElement = "";

        for (const element of counterWords) {
        
      
            if(counterWords.includes(element)) {

                newElement = element;
                i ++;    
                console.log(newElement, i);

                
            } else {
                
            }
        

        }








  //

