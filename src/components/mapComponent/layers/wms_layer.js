import 'leaflet';
import 'leaflet.wms';

const L =require ('leaflet');
const wms = require ('leaflet.wms');

//Creo el recurso para filtrar la información de los atributos de la capa WMS
let CleanInfoSource = wms.Source.extend({
    'showFeatureInfo': function(latlng, infoFiltrada){
        console.log(infoFiltrada.split(" "));
        if (!this._map){return;}
        let codigoArray = infoFiltrada.split("\n");
        let codigo = codigoArray[6];
        let area = codigoArray[7];
        infoFiltrada ="El predio cuenta con un " + codigo + " y posee un " + area;
        this._map.openPopup(infoFiltrada, latlng);
    }
});

//Hago el llamado del servicio WMS empleando el recurso de filtrado de información 
const Layer_wms=  new CleanInfoSource("http://34.73.64.218:8080/geoserver/wms?;", {
    "transparent": "true",
    "format": "image/png",
    "info_format": "text/plain"
});

//Creo y exporto las capas requeridas del servicio WMS.
export const predios = Layer_wms.getLayer("repelon:rp_gc_predios_catastro");
export const perimetro = Layer_wms.getLayer("repelon:rp_u_perimetro");