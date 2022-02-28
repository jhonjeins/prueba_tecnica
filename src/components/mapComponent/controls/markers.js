const L =require ('leaflet');
import 'leaflet-marker-rotation/src/rotatedMarker';
import { imgIcon } from './icons/imgIcon';
import ubication from '../../../assets/img/ubication.png'; //Lamado de la imagen ubication.png y almaceno en una variable

export var dynamicMarker=(icono, coords,angle)=>{
    return L.rotatedMarker(coords, {
        icon: icono,
        rotationOrigin:'center',
        rotationAngle: angle
    });
}
//Creo la funcion para la creación de marcadores con leaflet
export let leafletMarker=(coords, icono, mensajePop)=>{
    return L.marker(coords, {
        icon: icono
    }).bindPopup(mensajePop);
}


//Creo y exporto el marcador correspondiente ubicado en el centro del mapa.
export const markerCentro = leafletMarker([10.494550942951536, -75.12537974040967],imgIcon(ubication,[30,30]), "Este es el centro del mapa")

