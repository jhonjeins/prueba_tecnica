import 'leaflet-mouse-position';
import 'leaflet/dist/leaflet.css';

const L =require ('leaflet');
// Hago el llamado y exporto el plugin de leaflet mouseposition, creando un formato para la visualización de las coordenadas.
export const position_mouse= L.control.mousePosition({
    emptyString: '0º N<br>0º E',
  separator: '<br>',
  lngFormatter: function(num) {
    var direction = (num < 0) ? 'W' : 'E';
    var formatted = Math.abs(L.Util.formatNum(num, 3)) + 'º ' + direction;
    return formatted; 
  },
  latFormatter: function(num) {
    var direction = (num < 0) ? 'S' : 'N';
    var formatted = Math.abs(L.Util.formatNum(num, 3)) + 'º ' + direction;
    return formatted;
  }
}); 