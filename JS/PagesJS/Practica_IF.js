console.log(`Funcionando Archivo: Practica_IF`);




function verificarEdad() {
    let edad = document.getElementById("edad").value;
    let pais = document.getElementById("pais").value;

    console.log(edad)
    console.log(pais)

    if (edad >= 18) {
        alert(`Eres mayor de edad en ${pais}`)
    } else {
        alert(`No eres mayor de edad en ${pais}`)
    }
}

function verificarParImpar() {
    let numero3 = document.getElementById("numero3").value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 === 0) {
        document.getElementById("mensajeParImpar").innerText = `El numero ${numeroconvertido} es par`;
    } else {
        document.getElementById("mensajeParImpar").innerText = `El numero ${numeroconvertido} es impar`;
    }


}


function evaluarNota() {
    let nota = document.getElementById("nota").value;

    let numeroconvertido = parseInt(nota)
        //mayor 90 = excelente, mayor 70 = aprobaro, menor 70 = reprobado
if (numeroconvertido >=90) {
            alert("Excelente nota")
        } else if (numeroconvertido >= 70) {
            alert("Aprobado")
        } else {
            alert("Reprobado")
        }

    }















