const numeros = [99, 221, 21, 98, 89, 127, 307, 75, 11];
let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) { //Si, cualquier número es mayor, a "mayor"
        mayor = numeros[i];  //entonces, mayor pasa a "actualizarse"
    }
}
//se declara fuera del for, para que no nos devuelva todos los nros 
console.log(mayor);
