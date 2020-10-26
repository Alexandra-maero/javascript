// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.   

/* function suma (alquiler, expensas){
    return alquiler + expensas
}

console.log(suma(12000,4000)); */

// b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

/*function suma (alquiler, expensas){
    if (typeof(alquiler) === 'number' && typeof (expensas) === 'number'){
    return alquiler + expensas
    }else{
        alert('One value is not a number')
    }
}

console.log(suma(12000,'4000'));*/

// c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero

/* function validate (numero1) {
    if (Number.isInteger(numero1)){
            return true
        } else{
            return false
        }
}
console.log(validate(100));

// d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function suma (alquiler, expensas){
    if (typeof(alquiler) === 'number' && typeof (expensas) === 'number'){
    } if (Number.isInteger(expensas) && (Number.isInteger(alquiler))){
        return alquiler + expensas
    }else{
        alert('One value is a decimal')
        return alquiler + (Math.round (expensas))
    }
}

console.log(suma(12000,3999.5)); */

// e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

/*function suma (alquiler, expensas){
    dos ()
}

function dos (alquiler, expensas) {
    if (typeof(alquiler) === 'number' && typeof (expensas) === 'number'){
    return alquiler + expensas
    }else{
        alert('One value is not a number')
    }}

console.log(suma());
console.log(dos(12000, '4000'));*/