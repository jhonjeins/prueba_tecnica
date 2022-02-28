import 'leaflet/dist/leaflet.css';
const L =require ('leaflet');

//Creo y exporto la función para la creación de los iconos.
export let imgIcon=(icon,sizeIcon)=>{
  return L.icon({
    iconUrl: icon,
    iconSize:sizeIcon, // size of the icon
  });
}

