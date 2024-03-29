var numero = 0;
var cantidad = 0;
var datos = [];

async function apirandomuser() {
    numero = 0;

    /*Obtener valor de elemento a traves del id*/
    cantidad = document.getElementById("cantidad").value;

    /*Llama a los valores por medio de otro servidor*/
    const respuesta = await fetch("https://randomuser.me/api?results="+cantidad);
    datos = await respuesta.json();

    muestra();
}

function anterior() {
    numero--;
    if (numero < 0) {
        //numero = 0;
        numero = cantidad - 1;
    }
    muestra();
}

function siguiente() {
    numero++;
    if (numero == cantidad) {
        //numero--;
        numero = 0;
    }
    muestra();
}

function muestra() {
    console.log("Arreglo posicion: "+numero);

    /*Obtiene los componentes por medio del id*/
    let foto = document.getElementById("foto");
    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");

    /*Asigna valores a los componentes del HTML*/
    foto.setAttribute("src", datos.results[numero].picture.large);
    nombre.innerHTML = datos.results[numero].name.first+" "+datos.results[numero].name.last;
    telefono.innerHTML = datos.results[numero].phone;

    /*Cambiar estilos por medio de JS*/
    nombre.style.color = "red";
}