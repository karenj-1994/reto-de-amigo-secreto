// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function sortearAmigo (){
    if (amigos.length===0){
        alert ("escribe el nombre de un amigo");

    }else{
        let ElegirAUnAmigo=Math.floor(Math.random()*(amigos.length))
        console.log(amigos[ElegirAUnAmigo]);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        let elementoresultado=document.createElement('li');
        elementoresultado.textContent=`el amigo secreto es ${amigos[ElegirAUnAmigo]}`;
        resultado.appendChild(elementoresultado);
    }
}

function mostraramigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo=>{let elementolista=document.createElement('li');
        elementolista.textContent=amigo;
        lista.appendChild(elementolista);})
    }


function agregarAmigo(){
let nuevoAmigo =document.getElementById("amigo").value;



if(nuevoAmigo ===""){
    alert("por favor inserte un nombre");
}else{amigos.push(nuevoAmigo);
    console.log(amigos);
limpiarCaja()
mostraramigo()
}
return
} 
function limpiarCaja() {
  document.querySelector('#amigo').value = '';



  
}
