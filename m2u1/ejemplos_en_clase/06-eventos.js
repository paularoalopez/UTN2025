 const contenedor = document.querySelector('.contenedor');
//  console.log(contenedor)
const boton = document.getElementById('btn')

contenedor.addEventListener('mouseover', function() {
    contenedor.style.backgroundColor = "blue"
})

contenedor.addEventListener('mouseout', function() {
    contenedor.style.backgroundColor = "red"
})

boton.addEventListener('click' , function() {

    if(contenedor.style.display == "") {
        contenedor.style.display = "none"
    } else (
        contenedor.style.display = ""
    )

})