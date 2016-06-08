package esac.archive.absi.modules.cl.aladinlite.widget.sample.contextmenu;

import java.util.ArrayList;
import java.util.List;

import com.allen_sauer.gwt.log.client.Log;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;

import esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteConstants;
import esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget;

/**
 * @author Ignacio Leon - Copyright (c) 2013 - ESA/ESAC.
 */
public class AladinLiteSubPanel extends Composite {

    /** Aladin Lite widget. */
    private AladinLiteWidget aladinLiteWidget;

    /** List of javascript footprints. */
    private JsArray<JavaScriptObject> footprintJsArray;

    /** Aladin footprint overlay. */
    private JavaScriptObject aladinFootprintOverlay;

    /** Image width. */
    private static final int IMAGE_WIDTH = 256;
    /** Image height. */
    private static final int IMAGE_HEIGHT = 256;

    /** Aladin lite div name. */
    private String aladinLiteDivName;

    /** Class Constructor. */
    public AladinLiteSubPanel(String inputAladinLiteDivName) {
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
        boolean showFrameBoolean = false;
        String targetString = "0 +0";
        // int zoomInteger = 60;
        int zoomInteger = 1;
        Widget aladinLiteWidget = aladinLiteSubPanel;

        // Initialize Aladin Lite Widget
        this.aladinLiteWidget = new AladinLiteWidget(this.aladinLiteDivName, width, height,
                surveyString, cooFrameString, showLayersControlBoolean, showGotoControlBoolean,
                showFullscreenControlBoolean, showShareControlBoolean, showReticleBoolean,
                showZoomControlBoolean, showFrameBoolean, targetString, zoomInteger,
                aladinLiteWidget);

        aladinLiteSubPanel.add(this.aladinLiteWidget);

        initWidget(aladinLiteSubPanel);
    }

    public final void goToObjectAndZoom(String objectName, double zoomDegrees) {
        Log.debug("Into AladinLiteSubPanel.goToObjectAndZoom(" + objectName + "," + zoomDegrees
                + ")");
        this.aladinLiteWidget.goToObject(objectName);
        this.aladinLiteWidget.setZoom(zoomDegrees);
    }

    public final void goToRaDecAndZoom(final String ra, final String dec, final double zoomDegrees) {
        Log.debug("Into AladinLiteSubPanel.goToRaDecAndZoom(" + ra + "," + dec + "," + zoomDegrees
                + ")");
        this.aladinLiteWidget.goToRaDec(ra, dec);
        this.aladinLiteWidget.setZoom(zoomDegrees);
    }

    public final void drawStcSPolygon(String stcS, String color) {
        removeFootprints();
        Log.debug("Into AladinLiteSubPanel.drawStcSPolygon(" + stcS + "," + color + ")");
        List<String> stcsPolygon = new ArrayList<String>();
        stcsPolygon.add(stcS);

        this.footprintJsArray = this.aladinLiteWidget.createFootprintArrayFromSTCS(stcsPolygon);

        this.aladinFootprintOverlay = this.aladinLiteWidget.createOverlayAndAddFootprints(
                "HST Footprint", color, this.footprintJsArray);
    }

    public void removeFootprints() {
        Log.debug("Into AladinLiteSubPanel.removeFootprints()");
        if (this.aladinFootprintOverlay != null) {
            this.aladinLiteWidget.removeAllFootprintsFromOverlay(this.aladinFootprintOverlay);
        }
    }

    @Override
    protected void onLoad() {
        super.onLoad();
        Log.debug("Into AladinLiteSubPanel.onLoad()");
    }

    @Override
    protected void onAttach() {
        super.onAttach();
        Log.debug("Into AladinLiteSubPanel.onAttach()");
    }

    @Override
    protected void onUnload() {
        super.onUnload();
        Log.debug("Into AladinLiteSubPanel.onUnload()");
    }

    @Override
    protected void onDetach() {
        super.onDetach();
        Log.debug("Into AladinLiteSubPanel.onDetach()");
    }
}
