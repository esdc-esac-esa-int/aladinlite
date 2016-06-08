package esac.archive.absi.modules.cl.aladinlite.widget.client;

import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;

import esac.archive.absi.modules.cl.aladinlite.widget.client.model.ColorPalette;

public interface AladinLiteCDSWrapper {

    /*
     * Atomic calls
     */
    /**
     * Wrapper for CDS A.circle function. Used to draw footprints
     * @param ra in J2000
     * @param dec in J2000
     * @param radius in degrees
     * @param tgtColor color used for drawing the circle
     * @return JavaScriptObject representing A.circle javascript object
     */
    public JavaScriptObject createJ2000Circle(double ra, double dec, double radius, String tgtColor);

    /**
     * Wrapper for CDS A.polygon function. Used to draw footprints
     * @param tgtpolygon JsArray of points
     * @param obsid the observationId if any or null
     * @return
     */
    public JavaScriptObject createJ2000Polygon(JsArray<JavaScriptObject> tgtpolygon, String obsid);

    /**
     *
     * @param ra
     * @param dec
     * @return a javascript array [ra, dec]
     */
    public JavaScriptObject getRaDecArray(double ra, double dec);

    /**
     * Wrapper for CDS A.aladin.gotoObject function. Move Aladin Lite to the specified object.
     * @param inputObjectName String representing the name of the searched target
     */
    public void goToObject(String inputObjectName);

    /**
     * Wrapper for CDS A.aladin.view.setZoom function. Set the zoom level.
     * @param zoomDegrees
     */
    public void setZoom(double zoomDegrees);

    /**
     * Wrapper for A.graphicOverlay
     * @param color
     * @param lineWidth
     * @return the javascript object representing the overlay
     */
    public JavaScriptObject createOverlay(String color, double lineWidth);

    /**
     * Wrapper for A.aladin.displayJPG
     * @param imageURL
     */
    public void displayJPG(String imageURL, String transparency);

    /**
     * Wrapper for aladin.getBaseImageLayer().getColorMap().update function
     * @param color
     */
    public void changeBaseImageLayerColorMap(String color);

    /**
     * Wrapper for aladin.getBaseImageLayer().getColorMap().update('rainbow') function
     */
    public void setRainbowColorMap();

    /**
     * Wrapper for aladin.getBaseImageLayer().getColorMap().update('eosb') function
     */
    public void setEosbColorMap();

    /**
     * Wrapper for aladin.getBaseImageLayer().getColorMap().update('native') function
     */
    public void setNativeColorMap();

    /**
     * Wrapper for aladin.getBaseImageLayer().getColorMap().update('grayscale') function
     */
    public void setGrayscaleColorMap();

    /**
     * Wrapper for aladin.getBaseImageLayer().getColorMap().update('planck') function
     */
    public void setPlanckColorMap();

    /**
     * Wrapper for A.marker
     * @param ra
     * @param dec
     * @param popupHTMLTitle
     * @param popupHTMLDesc
     * @return the javascript object representing the marker
     */
    public JavaScriptObject createJ2000Marker(double ra, double dec, String popupHTMLTitle,
            String popupHTMLDesc);

    /**
     * Wrapper for A.catalog
     * @param catalogName
     * @param sourceSize
     * @param color
     * @return
     */
    public JavaScriptObject createCatalog(String catalogName, int sourceSize, String color);

    /*
     * Composite calls
     */
    /**
     * Draws a circle on top of the given overlay
     * @param overlayJsObject the overlay
     * @param ra in J2000
     * @param dec in J2000
     * @param radius in degrees
     * @param tgtColor color used for drawing the circle
     */
    public void addJ200CircleToOverlay(JavaScriptObject overlayJsObject, double ra, double dec,
            double radius, String tgtColor);

    /**
     * Draws the passed list of footprints on top of the given overlay
     * @param overlayJsObject the overlay
     * @param polygons list of footprints (one for each double[])
     */
    public void addJ2000PlygonsToOverlay(JavaScriptObject overlayJsObject, List<double[]> polygons);

    /**
     * One image map on top of an HiPS map with transparency
     * @param baseImageLayer base HiPS map
     * @param overlaySurveyId top image maps Survey Id
     * @param overlaySurveyName top image maps Survey Name
     * @param overlaySurveyRootUrl top image maps Survey URL
     * @param overlaySurveyFrame top image maps Survey Frame
     * @param overlayMaximumNorder top image maps Survey Maximum Norder
     * @param overlayImgFormat top image maps format (e.g. jpg)
     * @param overlayAlpha alpha transparency
     */
    public void doOverlayImageLayer(String baseImageLayer, String overlaySurveyId,
            String overlaySurveyName, String overlaySurveyRootUrl, String overlaySurveyFrame,
            int overlayMaximumNorder, String overlayImgFormat, double overlayAlpha);

    /**
     * One image map on top of an HiPS map with transparency + footprints
     * @param overlayJsObject
     * @param polygons
     * @param baseImageLayer
     * @param overlaySurveyId
     * @param overlaySurveyName
     * @param overlaySurveyRootUrl
     * @param overlaySurveyFrame
     * @param overlayMaximumNorder
     * @param overlayImgFormat
     * @param overlayAlpha
     */
    public void drawFootprintsAndOverlayImageLayer(JavaScriptObject overlayJsObject,
            List<double[]> polygons, String baseImageLayer, String overlaySurveyId,
            String overlaySurveyName, String overlaySurveyRootUrl, String overlaySurveyFrame,
            int overlayMaximumNorder, String overlayImgFormat, double overlayAlpha);

    /**
     * Create a new overlay and add it to aladin object
     * @param color
     * @param lineWidth
     * @return the javascript object representing the overlay
     */
    public JavaScriptObject createAndAddOverlay(String color, double lineWidth);

    /**
     * Draw an image on top of a HiPS maps
     * @param baseSurveyId
     * @param baseSurveyName
     * @param baseSurveyRootUrl
     * @param baseSurveyFrame
     * @param baseMaximumNorder
     * @param baseImageLayerColorMap
     * @param overlayColor
     * @param overlayLineWidth
     * @param imageURL
     */
    public void doDrawImage(String baseSurveyId, String baseSurveyName, String baseSurveyRootUrl,
            String baseSurveyFrame, int baseMaximumNorder, String baseImageLayerColorMap,
            String overlayColor, double overlayLineWidth, String imageURL, String imageTransparency);

    /**
     * Add given catalog to aladin
     * @param catalog
     */
    public void addCatalogAndSourcesToAladin(JavaScriptObject catalog,
            List<JavaScriptObject> markers);

    JavaScriptObject createJ2000Polyline(JsArray<JavaScriptObject> tgtpolyline);

    void addJ2000PolylineToOverlay(JavaScriptObject overlayJsObject, double[] polyline);

    /**
     * Load and display HiPS maps
     * @param surveyId
     * @param surveyName
     * @param surveyRootUrl
     * @param surveyFrame
     * @param maximumNorder
     * @param imgFormat - could be png or jpeg
     */
    void createAndSetImageSurveyWithImgFormat(String surveyId, String surveyName,
            String surveyRootUrl, String surveyFrame, int maximumNorder, String imgFormat);

    /**
     * Load and display HiPS maps
     * @param surveyId
     * @param surveyName
     * @param surveyRootUrl
     * @param surveyFrame
     * @param maximumNorder
     * @deprecated use createAndSetImageSurveyWithImgFormat instead
     */
    @Deprecated
    void createAndSetImageSurvey(String surveyId, String surveyName, String surveyRootUrl,
            String surveyFrame, int maximumNorder);

    void setOverlayImageLayerToNull();

    void addCatalogToAladin(JavaScriptObject catalog);

    void setCMBColorMap();

    void doOverlaySimpleImageLayer(String overlaySurveyId, String overlaySurveyName,
            String overlaySurveyRootUrl, String overlaySurveyFrame, int overlayMaximumNorder,
            String overlayImgFormat, double overlayAlpha);

    void setOverlayImageLayerAlpha(double alpha);

    JavaScriptObject createHpxImageSurvey(String overlaySurveyId, String overlaySurveyName,
            String overlaySurveyRootUrl, String overlaySurveyFrame, int overlayMaximumNorder,
            String overlayImgFormat);

    void setCubehelixColorMap();

    void setColorPalette(ColorPalette colorPalette);

    void reverseColorMap();

}
