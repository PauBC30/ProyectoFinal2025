import { obtenerNombrePagina, obtenerImagenPorNombre } from '../Datos/ConsultaDatos.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        const nombrePagina = obtenerNombrePagina();
        const imagen = obtenerImagenPorNombre(nombrePagina);
        
        console.log('Página actual:', nombrePagina);
        console.log('Imagen seleccionada:', imagen);

        document.getElementById('Header').innerHTML = `
            <header class="header-container">
                <div class="header-content">
                    <div class="header-image">
                        <img src="${imagen}" alt="${nombrePagina} Header Image" 
                            onerror="this.src='/Assets/favicon.ico'"
                            class="header-img">
                    </div>
                    <div class="header-text">
                        <h1 class="header-title">${nombrePagina}</h1>
                        <p>Completa tu búsqueda aquí</p>
                        </p>
                    </div>
                </div>
            </header>
        `;
    } catch (error) {
        console.error('Error al mostrar el header:', error);
        document.getElementById('Header').innerHTML = `
            <div class="error">Error al cargar el header</div>
        `;
    }
});