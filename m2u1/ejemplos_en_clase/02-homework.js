const cajadeTexto = document.getElementById('texto');
let contador = document.getElementById('caracteres');

cajadeTexto.addEventListener('input',function(){
    // console.log(cajadeTexto.value.length);
    contador.innerText = cajadeTexto.value.length;
    
}, false)