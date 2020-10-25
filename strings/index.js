/* a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var estrofa = 'Nos encontramos en la calle. Yo dirí­a casualidad. Aun conservaba esa mirada. Ese garbo, ese swing, ese charm'
console.log(estrofa.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var verso = 'Me gusta estar a un lado del camino';
var string = (verso.substring(0,6));
console.log(string);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var versoDos = 'La cobardía es asunto de los hombres, no de los amantes'
var stringDos = (versoDos.substring(52, 55));
console.log(stringDos);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var versoTres = 'lOS AMORES COBARDES NO LLEGAN A AMORES'
console.log(versoTres.substring(0,1).toUpperCase() + versoTres.substring(1,38).toLowerCase());

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var versoCuatro = 'Quien me ha robado el mes  abril'
var pos = versoCuatro.indexOf('  ');
console.log(pos);

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var titulo = 'relaciones internacionales'
var pos1 = titulo.indexOf(' i');
console.log(titulo.substring(0,1).toUpperCase() + titulo.substring(1,10).toLocaleLowerCase() + titulo.substring(10,12).toUpperCase() + titulo.substring(12,26));
