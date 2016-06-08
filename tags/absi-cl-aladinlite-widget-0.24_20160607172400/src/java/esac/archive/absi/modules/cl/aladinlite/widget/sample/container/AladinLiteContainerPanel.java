package esac.archive.absi.modules.cl.aladinlite.widget.sample.container;

import java.util.ArrayList;
import java.util.List;

import com.allen_sauer.gwt.log.client.Log;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;

import esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteConstants;
import esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget;

/**
 * @author Ignacio Leon - Copyright (c) 2013 - ESA/ESAC.
 */
public class AladinLiteContainerPanel extends Composite {

    /** Aladin Lite widget. */
    private AladinLiteWidget aladinLiteWidget;

    /** List of javascript footprints. */
    private JsArray<JavaScriptObject> footprintJsArray;

    /** Aladin footprint overlay. */
    private JavaScriptObject aladinFootprintOverlay;

    /** Aladin footprint overlay. */
    private JavaScriptObject aladinPolylineOverlay;

    /** Image width. */
    private static final int IMAGE_WIDTH = 535;
    /** Image height. */
    private static final int IMAGE_HEIGHT = 535;

    /** Aladin lite div name. */
    private String aladinLiteDivName;

    /**
     * Class Constructor.
     * @param inputAladinLiteDivName Aladin Lite div name.
     */
    public AladinLiteContainerPanel(final String inputAladinLiteDivName) {
        this.aladinLiteDivName = inputAladinLiteDivName;
        initView();
    }

    /** Initialize Image Details panel. */
    public final void initView() {
        Log.debug("Into AladinLiteSubPanel.initView()");
        SimplePanel aladinLiteSubPanel = new SimplePanel();

        double width = IMAGE_WIDTH;
        double height = IMAGE_HEIGHT;
        String surveyString = "P/DSS2/color";
        String cooFrameString = AladinLiteConstants.FRAME_J2000;
        boolean showLayersControlBoolean = false;
        boolean showGotoControlBoolean = false;
        boolean showFullscreenControlBoolean = false;
        boolean showShareControlBoolean = false;
        boolean showReticleBoolean = false;
        boolean showZoomControlBoolean = false;
        boolean showFrameBoolean = true;
        String targetString = "0 +0";
        double zoomDouble = 0.1;
        Widget aladinLiteParentWidget = aladinLiteSubPanel;

        // Initialize Aladin Lite Widget
        this.aladinLiteWidget = new AladinLiteWidget(this.aladinLiteDivName, width, height,
                surveyString, cooFrameString, showLayersControlBoolean, showGotoControlBoolean,
                showFullscreenControlBoolean, showShareControlBoolean, showReticleBoolean,
                showZoomControlBoolean, showFrameBoolean, targetString, zoomDouble,
                aladinLiteParentWidget);

        aladinLiteSubPanel.add(this.aladinLiteWidget);

        initWidget(aladinLiteSubPanel);
    }

    /**
     * Go to object name and zoom input number of degrees in the sky.
     * @param objectName Input object name.
     * @param zoomDegrees Input degrees.
     */
    public final void goToObjectAndZoom(final String objectName, final double zoomDegrees) {
        // Log.debug("Into AladinLiteSubPanel.goToObjectAndZoom(" + objectName + "," + zoomDegrees
        // + ")");
        this.aladinLiteWidget.goToObject(objectName);
        this.aladinLiteWidget.setZoom(zoomDegrees);
    }

    // J2000 coordinates
    public void drawCircle(String ra, String dec, String radius, String tgtColor) {
        aladinFootprintOverlay = this.aladinLiteWidget.createAndAddOverlay("#ee2345", 3);
        this.aladinLiteWidget.addJ200CircleToOverlay(aladinFootprintOverlay,
                Double.parseDouble(ra), Double.parseDouble(dec), Double.parseDouble(radius),
                tgtColor);
    }

    // J2000 coordinates
    public void drawFootprints(List<double[]> polygonsInPoints) {
        aladinFootprintOverlay = this.aladinLiteWidget.createAndAddOverlay("#ee2345", 3);
        this.aladinLiteWidget.addJ2000PlygonsToOverlay(aladinFootprintOverlay, polygonsInPoints);
    }

    public void drawPolyline(double[] polylinePoints) {
        aladinFootprintOverlay = this.aladinLiteWidget.createAndAddOverlay("#ee2345", 3);
        this.aladinLiteWidget.addJ2000PolylineToOverlay(aladinFootprintOverlay, polylinePoints);
    }

    public void doOverlayImageLayer(String baseImageLayer, String overlaySurveyId,
            String overlaySurveyName, String overlaySurveyRootUrl, String overlaySurveyFrame,
            int overlayMaximumNorder, String overlayImgFormat, double overlayAlpha) {

        this.aladinLiteWidget.doOverlayImageLayer(baseImageLayer, overlaySurveyId,
                overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame, overlayMaximumNorder,
                overlayImgFormat, overlayAlpha);
    }

    public void doDrawImage(String baseSurveyId, String baseSurveyName, String baseSurveyRootUrl,
            String baseSurveyFrame, int baseMaximumNorder, String baseImageLayerColorMap,
            String overlayColor, double overlayLineWidth, String imageURL) {
        this.aladinLiteWidget.doDrawImage(baseSurveyId, baseSurveyName, baseSurveyRootUrl,
                baseSurveyFrame, baseMaximumNorder, baseImageLayerColorMap, overlayColor,
                overlayLineWidth, imageURL, "0.6");
    }

    public void changeBaseImageLayerColorMap(String colorMap) {
        this.aladinLiteWidget.changeBaseImageLayerColorMap(colorMap);
    }

    /**
     * Go to input ra and dec sky position and zoom input number of degrees in the sky.
     * @param ra Input ra
     * @param dec Input dec
     * @param zoomDegrees Input degrees.
     */
    public final void goToRaDecAndZoom(final String ra, final String dec, final double zoomDegrees) {
        // Log.debug("Into AladinLiteSubPanel.goToRaDecAndZoom(" + ra + "," + dec + "," +
        // zoomDegrees
        // + ")");
        this.aladinLiteWidget.goToRaDec(ra, dec);
        Timer timer = new Timer() {

            @Override
            public void run() {
                Log.debug("Setting zoom...");
                aladinLiteWidget.setZoom(zoomDegrees);
            }
        };
        timer.schedule(2000);
    }

    /**
     * Draw input stc-s polygon inside AladinLite component.
     * @param stcS Input polygon.
     * @param color Input color.
     */
    public final void drawStcSPolygon(final String stcS, final String color) {
        Log.debug("Into AladinLiteSubPanel.drawStcSPolygon(" + stcS + "," + color + ")");
        List<String> stcsPolygon = new ArrayList<String>();
        stcsPolygon.add(stcS);

        this.footprintJsArray = this.aladinLiteWidget.createFootprintArrayFromSTCS(stcsPolygon);

        this.aladinFootprintOverlay = this.aladinLiteWidget.createOverlayAndAddFootprints(
                "HST Footprint", color, this.footprintJsArray);
    }

    /** Remove all footprint from AladinLite. */
    public final void removeFootprints() {
        // Log.debug("Into AladinLiteSubPanel.removeFootprints()");
        if (this.aladinFootprintOverlay != null) {
            this.aladinLiteWidget.removeAllFootprintsFromOverlay(this.aladinFootprintOverlay);
        }
    }

    @Override
    protected final void onLoad() {
        super.onLoad();
        Log.debug("Into AladinLiteContainerPanel.onLoad(" + this.aladinLiteDivName + ")");
    }

    @Override
    protected final void onAttach() {
        super.onAttach();
        Log.debug("Into AladinLiteContainerPanel.onAttach(" + this.aladinLiteDivName + ")");
        // this.aladinLiteWidget.requestRedraw();
    }

    /**
     * As a "no results" view, remove all footprints and zoom out.
     */
    public final void setNoResults() {
        removeFootprints();
        this.aladinLiteWidget.setZoom(170);
    }

    public void testMethod() {
        this.aladinLiteWidget.testCDSJavascriptHere();
    }

}
