/**
 * ¿ Que sucede aquí? Puede que quieras coger papel y lápiz para apuntar qué valores se asigna a cada variable
 */

let variableA = 1;
let variableB = 2;
let variableC = 3;
let variableD = 4;
variableA = 2;
variableB = 4;
variableC = 1;
variableD = -7;

/**
 * En este punto, que valor tendrá 'variableD'. ¿Por qué? ¿Cómo podrías comprobarlo? Escribe el comando que te permita comprobar el valor de la variableD
 */

// Valdrá -7 porque hemos sobreescrito el valor de la varible con ese valor en la línea 12
console.log("Valor variableD Apartado 1: ", variableD);


/** ---------------------------------------------- */

variableD = variableD * 2;
 
/**
 * En este punto, que valor tendrá 'variableD'. ¿Por qué? ¿Cómo podrías comprobarlo? Piensa el valor que debería tener antes de mostrar su valor pantalla
 */

// Valdrá -14 porque multiplicamos el valor de la variableD por 2 y luego sobreescribimos el valor de la variableD
console.log("Valor variableD Apartado 2: ", variableD);



