import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { markerCentro } from '../controls/markers';
import 'jquery';
import { perimetro, predios } from './wms_layer';

//BASEMAPS 
export const standard_osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '©OpenStreetMap, ©Standard',minZoom: 0, maxZoom: 24});
export const stadiamaps = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	maxZoom: 24,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});
//Minimapa
export const carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

//Agrupación mapas base
const baseMaps = {
	"OSM Standard": standard_osm,
	"Stadia Maps": stadiamaps
};

//Agrupación layers de contenido
const overlayMaps = {
	"Predios": predios,
	"Perimetro": perimetro,
	"Marcador": markerCentro
};

//Creo y exporto el control de layers.
export const layerControl = L.control.layers(baseMaps, overlayMaps);