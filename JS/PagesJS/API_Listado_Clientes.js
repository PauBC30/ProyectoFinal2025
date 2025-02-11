console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"
const Api2 = "https://rickandmortyapi.com/api/character"

// Datos locales simulando la API
let Datos_Locales = []


let DatosFiltrados = []
let DatosFiltrados2 = []
let contenedor = document.getElementById('tbody');
let contenedor2 = document.getElementById('tbody2');



//aela
document.addEventListener('DOMContentLoaded', () => {
    consultarDatos()
    consultarDatos2()

});
//document.addEventListener('DOMContentLoaded', () => {
    //consultarApi()

//});

// Consultar Datos del API mediante Fetch(AJAX) AXIOS

function consultarDatos() {

    //fetchget
    fetch(Api_Usuarios) //1- se le indica la url de la api 
        
        .then(response => response.json()) // 2 -Conversion de datos , JSON 
        .then(result => {           //3- Resultado  result
            // custom error
            console.log(result)
            DatosFiltrados = result
            Mostrar_CampoTabla()
        })
        .catch(error => {      ///4- Catch
            // common error
            alert("Error ",error)
            return null;
        });
    
}

// //function consultarDatos() {
//     fetch(Api_Usuarios)
        
//         .then(response => response.json())
//         .then(result => {
//             // custom error
//             console.log(result)
//         })
//         .catch(error => {
//             // common error
//             return null;
//         });}

// //function consultarApi() {
//     fetch(Api_Usuarios)
        
//         .then(response => response.json())
//         .then(result => {
//             // custom error
//             console.log(result)
//         })
//         .catch(error => {
//             // common error
//             return null;
//         });}

function Mostrar_CampoTabla() {
    
    let html = ""

    DatosFiltrados.forEach(element => {

        console.log(element);

        html += `
        <tr>
            <td> ${element.id} </td>
            <td> ${element.name} </td>
            <td> ${element.email}</td>
        </tr>
        
        `

    });

    contenedor.innerHTML = html
}

function consultarDatos2() {

    //fetchget
    fetch(Api2) //1- se le indica la url de la api 
        
        .then(response => response.json()) // 2 -Conversion de datos , JSON 
        .then(result => {           //3- Resultado  result
            // custom error
            console.log(result.results)
            DatosFiltrados2 = result.results
            Mostrar_CampoTabla2()

        })
        .catch(error => {      ///4- Catch
            // common error
            alert("Error ",error)
            return null;
        });
    
}


function Mostrar_CampoTabla2() {
    
    let html = ""

    DatosFiltrados2.forEach(element => {

        console.log(element);

        html += `
        <tr>
            <td> ${element.name} </td>
            <td> ${element.status} </td>
            <td> <img src="${element.image}" alt=""> </td>
        </tr>
        
        `

    });

    contenedor2.innerHTML = html
}