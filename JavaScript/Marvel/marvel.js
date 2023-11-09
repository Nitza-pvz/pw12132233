var numero = 0;
var cantidad = 0;
var personaje = "";
var datos = [];

async function apimarvel() {
    numero = 0;

    personaje = document.getElementById("personaje").value;

    const respuesta = await fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="+personaje);
    datos = await respuesta.json();

    caja();
}

function anterior() {
    numero--;
    if (numero < 0) {
        numero = cantidad - 1;
    }
    caja();
}

function siguiente() {
    numero++;
    if (numero == cantidad) {
        numero = 0;
    }
    caja();
}

function caja() {
    let foto = document.getElementById("foto");
    let nombre = document.getElementById("nombre");
    let descripcion = document.getElementById("descripcion");
    let comicsDisp = document.getElementById("comicsDisponibles");

    cantidad = datos.data.total;
    console.log(cantidad);
    console.log("Arreglo posicion: "+numero);

    foto.setAttribute("src", datos.data.results[numero].thumbnail.path+"."+datos.data.results[numero].thumbnail.extension);
    nombre.innerHTML = datos.data.results[numero].name;
    descripcion.innerHTML = datos.data.results[numero].description;
    comicsDisp.innerHTML = datos.data.results[numero].comics.available;

    nombre.style.color = "blue";
}