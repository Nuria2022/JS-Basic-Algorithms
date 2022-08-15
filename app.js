//Iteración #1: Variables

//1.2 Crea una variable llamada x, asigna el valor 50 a ella.
//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = "Hulk"

//1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x = 50

//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
let h = 5
let y= 10

//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y


//------------------------------------------------------------------------------------//
//Iteración #2: Variables avanzadas

//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = { name: 'Jack Sparrow', age: 10 };
console.log(character)
character.age = 25
console.log(character)

//1.2 Declara 3 variables con los nombres y valores siguientes 
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
//Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`)

//1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
//ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price)

//1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
//y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

//globalBasePrice = 25000 ||  finalPrice = basePrice + globalBasePrice
globalBasePrice = 25000

console.log(car1.basePrice + globalBasePrice);
console.log(car2.basePrice + globalBasePrice);


//------------------------------------------------------------------------------------//
//Iteración #3

//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
let multiplication = 10 * 5;

console.log(multiplication);

//1.2 Divide 10 por 2 y muestra el resultado en un console.
let division = 10 / 2;

console.log(division);

//1.3 Muestra mediante un console el resto de dividir 15 por 9.
let resto = 15 % 9;

console.log(resto)

//1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
let p = 10
let j = 5
let o = p * j

//1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.
let c = 10
let m = 5
let i = c * m


//------------------------------------------------------------------------------------//
//Iteración #4: Arrays

//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const nameAvenger = avengers[0];
console.log(nameAvenger);

/*1.2 Cambia el primer elemento de avengers a "IRONMAN"*/
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "Ironman";
console.log(avengers);

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers1[0]);
console.log(avengers1[1]);
console.log(avengers1[2]);

/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array*/
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
console.log(rickAndMortyCharacters);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop();
console.log(rickAndMortyCharacters1);
console.log(rickAndMortyCharacters1[0]);
console.log(rickAndMortyCharacters1[4]);


//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.splice(1, 1);
console.log(rickAndMortyCharacters2);


//------------------------------------------------------------------------------------//
//Iteración #5: Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 2;

// 1.1 ejemplo if (/* COMPLETAR */)
if (number1 === 10) {
    console.log('number1 es estrictamente igual a 10')
}

//1.2
if (number2 / number1 == 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

//1.3
if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}

//1.4

if (number3 != number1) {
    console.log("number3 es distinto number1");
}

//1.5
if ((number3 * 5) == number1) {
    console.log("number3 por 5 es igual a number1");
}

// 1.6
if (((number3 * 5) == number1) && ((number1 * 2) == number2)) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

//1.7
if (((number2 / 2) == number1) || ((number1 / 5) == number3)) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


//------------------------------------------------------------------------------------//
//Iteración #6: Bucles

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let p = 0; p < 10; p++) {
    console.log(p)
}

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.
for (let x = 0; x < 10; x++) {
    if (x % 2 == 0) {
        console.log(x);
    }
}

/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.*/

for (let p = 0; p < 10; p++) {
    if (p < 9) {
        console.log("intentando dormir");
    }
    else {
        console.log("Dormido");
    }

}
