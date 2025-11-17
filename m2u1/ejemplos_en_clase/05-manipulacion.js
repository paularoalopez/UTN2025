const titulo = document.querySelector('h1');
// console.log(titulo)
titulo.style.color = 'red'
titulo.classList.add('fondo')

const boton = document.getElementById('boton');

const texto = document.getElementById('texto');

console.log(boton,texto)

boton.addEventListener('click', () =>{
    texto.classList.toggle('invisible')
})


// METODOS DE CLASSLIST:

// .add: agrega clases
// .remove: elimina clases
// .toggle: alterna la presencia de una clase
// .replace: reemplaza una clase por otra
// .lenght: devuelve el numero de clases en el elemento

const aclaracion = document.getElementById('aclaracion')

console.log(aclaracion)

aclaracion.innerHTML = '<h6> Hola soy un texto </h6>'
// aclaracion.innerText = 'hoy soy otro texto'