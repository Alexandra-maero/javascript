/* a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5” */

var random = Math.random();
if (random <= 5){
    console.log('Greater than 0,5');
}else{
    console.log('Lower than 0,5')
}

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/

var Age = 27;
if (Age < 2){
    console.log('Bebe')
}else if ((Age > 2)&&(Age < 12)){
    console.log('Niño')
}else if ((Age > 14)&&(Age < 19)){
    console.log('Adolescente')
}else if ((Age > 20)&&(Age < 30)){
    console.log('Joven')
}else if ((Age > 31)&&(Age < 60)){
    console.log('Adulto')
}else if ((Age > 61)&&(Age < 75)){
    console.log('Adulto Mayor')
}else if (Age > 75){
    console.log('Anciano')
}