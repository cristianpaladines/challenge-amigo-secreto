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
        lista.innerHTML = lista.innerHTML + `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    console.log("HOLA MUNDO DESDE SORTEAR")
    let elementoSorteado = document.getElementById("resultado");
    let prueba = Math.floor(Math.random()*amigos.length);
    let lista = document.getElementById("listaAmigos");

    if (amigos.length == 0){
        console.log("Lista vacia")
    } else{
        console.log(prueba, "=", amigos[prueba])
        elementoSorteado.innerHTML = `<li>El amigo secreto sorteado es: ${amigos[prueba]}</li>`;
    }

    lista.innerHTML = "";
    amigos = [];

}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

