const titulo = document.getElementById("title-h1")
const parrafo = document.getElementById("parrafo-p")

// Opcion1 = Realizamos el cambio del texto y el retardo sin incluir al innerHTML en una funcion. 

// setTimeout (() => {
//     parrafo.innerHTML = "Realizando un cambio" 
// }, 3000) 



// Opcion 2 = Realizamos el cambio del texto y el retardo con innerHTML dentro de una funcion.

const cambioTexto = (() => { parrafo.innerHTML = "Realizando un cambio" })

// setTimeout (cambioTexto, 3000)


// HACEMOS EJERCICIO: Cambiar el color al H1 pasado 3 segundos.

const cambiarColor = (() =>{
    titulo.style.backgroundColor = "grey";
    titulo.style.color = "red";
})

// setTimeout(cambiarColor, 3000);



// Cambiar el color al H1 y el texto al parrafo pasado 3 segundos, colocandolos dentro de una funcion.

const cambiarColorTexto = (() => {
    cambioTexto(); 
    cambiarColor();
})

setTimeout(cambiarColorTexto, 3000);