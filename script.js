// Ejercicio 1: Unir palabras en una oración-+
let palabras = ["Esta", "es", "una", "oración."]; 

function unirPalabrasEnOración() {
  // Unimos las palabras del arreglo en una sola cadena utilizamos join()
  let oración = palabras.join(" ");
  console.log(oración);
}

unirPalabrasEnOración();

// Ejercicio 2: Duplicar los números---------------------------------------------------------------------------------- 
function duplicarNumeros(numeros) {
  // Un nuevo arreglo donde cada número se multiplica por 2.
  let numerosDuplicados = numeros.map(numero => numero * 2);
  console.log(numerosDuplicados);
}

// Ocupamos el ejemplo 
let misNumeros = [1, 2, 4, 5];
duplicarNumeros(misNumeros); // Salida: [2, 4, 8, 10]

// Ejercicio 3: Calcular suma y producto-------------------------------------------------------------------------------- 
function calcularSumaYProducto(numeros) {
  // Calculamos la suma de todos los números del arreglo.
  let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

  // Calculamos el producto de todos los números del arreglo.
  let producto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

  console.log("La suma es:", suma);
  console.log("El producto es:", producto);
}

let otrosNumeros = [1, 2, 3, 4];
calcularSumaYProducto(otrosNumeros); // La suma es: 10 y el producto es: 24

   //Ehjercicio 4 Cursos en Común-------------------------------------------------------------------------------------
   let cursosEstudiante1 = ['Matemáticas', 'Inglés', 'Programación'];
   let cursosEstudiante2 = ['Geografía', 'Español', 'Programación'];
   
   function encontrarCursosComunes(cursos1, cursos2) {
     // Usamos filter() para filtrar los cursos comunes
     let cursosComunes = cursos1.filter(function(curso) {
       return cursos2.includes(curso); // Verifica si ahy un curso que coincida
     });
   
     // Se imprimen los cursos comunes
     console.log("Curso en común: ", cursosComunes);
   }
   
   encontrarCursosComunes(cursosEstudiante1, cursosEstudiante2); // Salida: Curso en común: ['Programacion']

   // Ejercicio 5 Nombres de personas ------------------------------------------------------------------------------------
   let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

   // Imprimimos los nombres
   console.log(personas);
   
   // Eliminamos a "Dani" 
   personas.splice(1, 1);
   
   // Eliminamos a "Juan" 
   personas.splice(2, 1);
   
   // Movemos a "Luis" al principio
   let luis = personas.splice(1, 1); // Extraemos a Luis
   personas.unshift(luis[0]); // Ponemos a Luis al principio
   
   // Agregamos mi nombre al final
   personas.push("Fany");
   
   // Iteramos sobre el arreglo y lo imprimimos hasta encontrar a "Maria"
   for (let i = 0; i < personas.length; i++) {
     console.log(personas[i]);
     if (personas[i] === "Maria") {
       break; // Detenemos el bucle cuando encontramos a Maria
     }
   }
   
   // Imprimimos el índice de "Maria" en el arreglo
   console.log(personas.indexOf("Maria"));
   
   // Imprimimos el arreglo final para verificar los cambios
   console.log(personas); // ['Luis', 'Maria', 'Camila', 'Fany']
   
