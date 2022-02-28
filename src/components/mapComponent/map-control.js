import 'leaflet/dist/leaflet.css';
import './map.scss';
import 'leaflet-minimap';
import 'leaflet-easyprint';


const L =require ('leaflet');


import {standard_osm, layerControl} from './layers/control-layers'
import { minimap } from './controls/minimap';
import { imprimirMapa } from './controls/print';
import { position_mouse } from './controls/mouse_position';

//Creo y exporto el mapa base principal, definiendo el centro y un zoom predeterminado.
export const map = L.map('map', {
    center: [10.494550942951536, -75.12537974040967],
    zoom: 15,
    layers: [standard_osm]
});

//Adiciono elementos del mapa
minimap.addTo(map);
imprimirMapa.addTo(map);
position_mouse.addTo(map);
layerControl.addTo(map);

// Control de escala
new L.control.scale({imperial: false, position:'bottomright'}).addTo(map)

