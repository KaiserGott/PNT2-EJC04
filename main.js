/*
Crear una funcion que use otras dos. Todas van a ser asincronicas. Las dos
funciones hijas tienen que simular el llamado a un servicio usando setTimeout y la
clase Promise(se puede mezclar con async/await). Crear una funcion padre que use
a las anteriores. Agregarle lo que falte, como palabras reservadas y demas.
*/

let data = [];

async function getCharacter(id){
  // gets the response from the api and put it inside a constant
  const response = await fetch('https://rickandmortyapi.com/api/character/'+id);
  //the response have to be converted to json type file, so it can be used
  const data = await response.json();
  //the addData adds the object "data" to an array
  addData(data)
}

function addData(object) {
  // the push method add a new item to an array
  // here it will be adding the object from the function getRandomUser each time it is called
  data.push(object);
  //the fetched data is available only on this scope
  console.log("This is the value of date inside the function addData:")
  console.log(data)
}

//Calls the function that fetches the data
//Aca busco a Tiny Rick
//Aca busco a Rick Montoya

getCharacter(353)
.then (getCharacter(771))
.then (console.log(data))
.then (mostrarArraysNombres(data));

function mostrarArraysNombres (data) {
    data.map(personajesRick => {
    console.log("Entre en el metodo")
    console.log(personajesRick.name)
})}


/*
//devuelve un string
function obtenerUsuario(id) {}
//devuelve un array de strings
function obtenerPublicaciones(idUsuario) {}
async function obtenerInfoCompletaUsuario(idUsuario) {
try {
const usuario = obtenerUsuario(idUsuario);
const publicaciones = obtenerPublicaciones(idUsuario);
console.log(`Nombre de usuario: ${usuario.nombre}`);
console.log(`Publicaciones del usuario: ${publicaciones.join(', ')}`);
} catch (error) {
console.error('Error:', error);
}
}
obtenerInfoCompletaUsuario(1);*/