import 'leaflet-easyprint';
import 'leaflet/dist/leaflet.css';

const L =require ('leaflet');

//Creo y exporto el plugin que se encarga de imprimir el mapa, definiendo las opciones principales.
export const imprimirMapa = L.easyPrint({
    title: 'Imprimir mapa',
    position: 'topleft',
    sizeModes: ['Current']
});
