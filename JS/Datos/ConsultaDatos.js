

//la crea array  
//lo -- crea objeto
//kv -- crea key : value 

function Creaboton() {
    
}


export let Datos_LiNav = [

    {
        Id: 1,
        Nombre: "Inicio", 
        Detalle: "Proyecto",   
        Url: "Inicio.html",
        Imagen: "/Assets/favicon.ico",
        Activo: true
    },
    {   Id: 2,
        Nombre: "Calculadora",
        Detalle: "Practica",      
        Url: "/Practica_Calculadora.html",
        Imagen: "/Assets/favicon.ico",
        Activo: false
    },
    {   Id: 3,
        Nombre: "Listado Clientes", 
        Detalle: "Practica",     
        Url: "/Practica_Listado_Clientes.html",
        Imagen: "/Assets/favicon.ico",
        Activo: false
    },
    {   Id: 4,
        Nombre: "Tarea Pokemon",   
        Detalle: "Practica",  
        Url: "/Practica_TareaPokemon.html",
        Imagen: "./Assets/Images/pokemon_header.jpeg",
        Activo: true
    },
    {   Id: 5,
        Nombre: "Tarea Netflix",    
        Detalle: "Practica", 
        Url: "/Practica_TareaNetflix.html",
        Imagen: "./Assets/Images/netflix_header.jpeg",
        Activo: true
    },
    {   Id: 7,
        Nombre: "API_TareaPokemon",    
        Detalle: "Proyecto", 
        Url: "/API_TareaPokemon.html",
        Imagen: "/Assets/favicon.ico",
        Activo: false
    },
    {   Id: 8,
        Nombre: "API_Listado_Cliente",    
        Detalle: "Proyecto", 
        Url: "/API_Listado_Clientes.html",
        Imagen: "/Assets/favicon.ico",
        Activo: false
    },
    {   Id: 9,
        Nombre: "API_VerUsuario",    
        Detalle: "Proyecto", 
        Url: "/API_VerUsuario.html",
        Imagen: "/Assets/favicon.ico",
        Activo: false
    },
    {   Id: 10,
        Nombre: "API_Contacto",    
        Detalle: "Proyecto", 
        Url: "/API_Contacto.html",
        Imagen: "/Assets/favicon.ico",
        Activo: false
    },
    {   Id: 11,
        Nombre: "Practica IF",    
        Detalle: "Practica ", 
        Url: "/Practica_IF.html",
        Imagen: "/Assets/favicon.ico",
        Activo: false
    },
    {   Id: 12,
        Nombre: "Practica CICLO",    
        Detalle: "Practica ", 
        Url: "/Practica_CICLO.html",
        Imagen: "/Assets/favicon.ico",
        Activo: false
    },
    {
        Id: 14,  
        Nombre: "Puntos Extra",  
        Detalle: "Puntos Extra",  
        Url: "/puntosextra.html", 
        Imagen: "/Assets/Images/perros_header.avif",
        Activo: true  
    }
];

export let urlCompleta = window.location.href; // Obtiene la URL completa
export let nombrePagina = window.location.pathname.split("/").pop().replace(".html", ""); // Elimina ".html"

export function obtenerNombrePagina() {
    const pathParts = window.location.pathname.split('/');
    let pageName = pathParts[pathParts.length - 1].replace('.html', '');
    
    if (pageName === 'Practica_TareaPokemon') return 'Tarea Pokemon';
    if (pageName === 'Practica_TareaNetflix') return 'Tarea Netflix';
    if (pageName === 'puntosextra') return 'Puntos Extra';
    
    return pageName;
}

export function obtenerImagenPorNombre(nombre) {
    const dato = Datos_LiNav.find(item => item.Nombre === nombre);
    
    if (!dato) {
        console.warn(`No se encontró el dato para la página: ${nombre}`);
        return "/Assets/favicon.ico";
    }

    return dato.Imagen;
}




