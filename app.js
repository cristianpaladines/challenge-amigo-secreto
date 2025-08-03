let amigos = [];

console.log(amigos);

function agregarAmigo(){
    let getAmigo = document.getElementById("amigo").value;
    console.log("Valor del input: ", amigos);

    if (getAmigo !== ""){
        amigos.push(getAmigo);
        console.log("Lista de amigos:", amigos);
        
    } else {
        alert("Por favor, ingresa un nombre de amigo.");
    }
    limpiarCaja();
    mostrarAmigos();
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
    console.log("Probando limpiar caja")
}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i=0; i < amigos.length; i++){
        console.log("Lista para for: ", amigos[i]);
        lista.innerHTML = `<li>${amigos[i]}</li>` + lista.innerHTML;
    }
}

function sortearAmigo(){
    console.log("HOLA MUNDO DESDE SORTEAR")
    let prueba = Math.floor(Math.random()*amigos.length);
    console.log(prueba) 
}

