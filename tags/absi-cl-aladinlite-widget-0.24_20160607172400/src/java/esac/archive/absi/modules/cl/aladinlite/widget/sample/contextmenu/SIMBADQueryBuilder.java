package esac.archive.absi.modules.cl.aladinlite.widget.sample.contextmenu;

import com.google.gwt.http.client.URL;
import com.google.gwt.i18n.client.NumberFormat;

import esac.archive.absi.modules.cl.aladinlite.widget.client.model.CoordinatesObject;

public class SIMBADQueryBuilder {

  private static String simbadService = "http://simbad.u-strasbg.fr/simbad/sim-coo";  
  public enum RadiusUnit{ deg, arcmin, arcsec }  
  
  public static String buildQuery(CoordinatesObject coords) {
    return buildQuery(coords, 2, RadiusUnit.arcmin);
  }
  
  public static String buildQuery(CoordinatesObject coords, int radius, RadiusUnit unit) {
    String url = simbadService;
    url +="?Coord="+NumberFormat.getFormat("###.###").format(coords.getRaDeg())+"d";
    url +=NumberFormat.getFormat("###.###").format(coords.getDecDeg())+"d";
    url+="&CooDefinedFrames=FK5-J2000&Radius="+radius+"&Radius.unit="+unit.toString();
    return URL.encode(url);
  }
  
}
