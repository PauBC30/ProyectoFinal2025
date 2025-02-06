console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

let clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

console.log(personas[1].nombre)



//array se quita, y se coloca el nombre de nuestra lista(array)
personas.forEach(element => {
    console.log(element)
});

clientes.forEach(element => {
    if (element.activo == true) {
        console.log(element.nombre,element.activo)
    }
    
});

//cantidad de elementos de una lista
console.log(personas.length)


let buscarnombre = personas.find(x =>x.nombre === "Ana");

console.log(buscarnombre)
//buscando un elemento en una lista


let buscaractivo = personas.find(x =>x.activo === true);

console.log(buscaractivo)


function Filtrar() {
    let valor = document.getElementById('sensitive').value;
    console.log(valor)
}



function buscarDesdeInput() {
    let input1 = document.getElementById('buscarNombre').value;  //Metio el valor pepe
    let resultado = document.getElementById('resultadoBusqueda');

    //Busca en el arreglo 
    let busqueda = personas.find(x=> x.nombre === input1) //nombre == pepe


    //Aqui le indicamos si el resultado es verdadero o falso 
    if (busqueda) {

        resultado.innerHTML = `encontrado a la persona ${busqueda.nombre}`

    } else {
        resultado.innerHTML = `No encontrado a la persona`
    }
}



//Crear la funcion del onclick //check 
// Input id value //no tiene 
//  mostrar el resultado inner 
//caso 2
function primeraPersonaActiva() {
    let resultado = document.getElementById('resultadoActivo');//inner 

    let busqueda = personas.find(x=> x.activo == true)

    
  //Aqui le indicamos si el resultado es verdadero o falso 
if (busqueda) {
    
    resultado.innerHTML = `primera persona encontrada  ${busqueda.nombre}`

} else {
    resultado.innerHTML = `No se encontro nadie activo `
}

}

//Crear la funcion del onclick  
// Input id value 
//  mostrar el resultado inner 
//caso 6

function personasActivas() {
    let resultado = document.getElementById('listaActivos');

    personas.forEach(element => {
        
        if (element.activo == true) {
            
        resultado.innerHTML += `
        
            <li>nombre : ${element.nombre} </li>`
        
            
        }

    });
}










