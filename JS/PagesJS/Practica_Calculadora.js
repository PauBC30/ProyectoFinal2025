
console.log(`Funcionando Archivo: Practica_Calculadora`);

function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    //mostrar
    //alert, console.log, inner
    //cl snippet
    console.log("Mostrar Nombre : " + nombre);
    console.log("Mostrar Edad : " + edad);

}


function realizarSuma() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let suma = parseInt(numero1) + parseInt(numero2);

    document.getElementById('resultado').innerText = suma

    console.log("Suma: " + suma);



}

