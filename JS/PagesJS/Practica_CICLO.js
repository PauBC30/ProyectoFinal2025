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

















