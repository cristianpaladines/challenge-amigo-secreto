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
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

