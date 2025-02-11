console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"

// Datos locales simulando la API
let Datos_Locales = []


let DatosFiltrados = []
let contenedor = document.getElementById('tbody');


DatosFiltrados = Datos_Locales


//aela
document.addEventListener('DOMContentLoaded', () => {
    consultarDatos()

});
document.addEventListener('DOMContentLoaded', () => {
    consultarApi()

});


function consultarDatos() {
    fetch(Api_Usuarios)
        
        .then(response => response.json())
        .then(result => {
            // custom error
            console.log(result)
        })
        .catch(error => {
            // common error
            return null;
        });
}

function consultarApi() {
    fetch(Api_Usuarios)
        
        .then(response => response.json())
        .then(result => {
            // custom error
            console.log(result)
        })
        .catch(error => {
            // common error
            return null;
        });
}