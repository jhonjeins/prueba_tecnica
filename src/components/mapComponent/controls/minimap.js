import 'leaflet/dist/leaflet.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';

const L =require ('leaflet');
import 'leaflet-minimap';
import {carto_light} from '../layers/control-layers'

//Creo y exporto el minimapa definiendo la posición y el mapa base a emplear
export var minimap= new L.Control.MiniMap(carto_light, 
{ 
    toggleDisplay: true ,
    minimized:false,
    position: 'bottomright'
})

