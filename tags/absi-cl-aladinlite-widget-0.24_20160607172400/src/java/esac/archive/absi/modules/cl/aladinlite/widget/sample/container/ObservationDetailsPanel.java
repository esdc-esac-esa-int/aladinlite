package esac.archive.absi.modules.cl.aladinlite.widget.sample.container;

import java.util.List;

import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.LayoutPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.TabPanel;

/**
 * Observation details panel.
 */
public class ObservationDetailsPanel extends Composite {

    /** Color for footprints. */
    private static final String FOOTPRINTS_COLOR = "#FFFF00";

    /** Aladin Lite panel. */
    private static AladinLiteContainerPanel aladinLiteContainerPanel = new AladinLiteContainerPanel(
            "aladin-div-1");

    /** Wrapper for image details (image + AladinLite). */
    private FlexTable imageDetailsPanelWrapper;

    /** Panel search info. */
    private int searchInfo;

    /**
     * Default constructor.
     * @param inputPanelId Input panel id.
     */
    public ObservationDetailsPanel(final int inputSearchInfo) {
        this.searchInfo = inputSearchInfo;
        initView();
    }

    public static AladinLiteContainerPanel getAladinLiteContainer() {
        return aladinLiteContainerPanel;
    }

    public AladinLiteContainerPanel detachAndGetAladinLiteContainer() {
        getAladinLiteContainer().removeFromParent();
        return getAladinLiteContainer();
    }

    public AladinLiteContainerPanel attachAladinLiteContainer() {
        this.imageDetailsPanelWrapper.setWidget(0, 1, detachAndGetAladinLiteContainer());
        return getAladinLiteContainer();
    }

    /** Initialize view. */
    public final void initView() {

        // this.aladinLiteContainerPanel = new AladinLiteContainerPanel("aladin-div-"
        // + this.searchInfo);

        // Use TabPanel, there is a bug in TabLayoutPanel...
        // See http://code.google.com/p/google-web-toolkit/issues/detail?id=7065
        TabPanel detailsTabPanel = new TabPanel();

        detailsTabPanel.add(new HTML("Summary"), "Summary");
        detailsTabPanel.add(new HTML("Summary"), "Planes");
        detailsTabPanel.add(new HTML("Summary"), "Artifacts");
        detailsTabPanel.add(new HTML("Summary"), "Publications");
        // detailsTabPanel.addStyleName(DETAILS_TAB_STYLE_NAME);

        // define constants for tabs
        detailsTabPanel.selectTab(0);
        // detailsTabPanel.setSize(Constants.DETAILS_PANEL_DEFAULT_SIZE + "px", "100%");
        // detailsTabPanel.setWidth("100%");
        detailsTabPanel.setSize("100%", "100%");

        ScrollPanel scrollDetailsTab = new ScrollPanel();
        scrollDetailsTab.setSize("100%", "100%");
        scrollDetailsTab.add(detailsTabPanel);

        // Wrapper to center the images on the middle
        this.imageDetailsPanelWrapper = new FlexTable();
        this.imageDetailsPanelWrapper.setSize("100%", "100%");
        this.imageDetailsPanelWrapper.setWidget(0, 0, new HTML("Summary"));
        this.imageDetailsPanelWrapper.setWidget(0, 1, detachAndGetAladinLiteContainer());
        this.imageDetailsPanelWrapper.getFlexCellFormatter().setVerticalAlignment(0, 0,
                HasVerticalAlignment.ALIGN_MIDDLE);
        this.imageDetailsPanelWrapper.getFlexCellFormatter().setHorizontalAlignment(0, 0,
                HasHorizontalAlignment.ALIGN_CENTER);
        this.imageDetailsPanelWrapper.getFlexCellFormatter().setVerticalAlignment(0, 1,
                HasVerticalAlignment.ALIGN_MIDDLE);
        this.imageDetailsPanelWrapper.getFlexCellFormatter().setHorizontalAlignment(0, 1,
                HasHorizontalAlignment.ALIGN_CENTER);
        // this.imageDetailsPanelWrapper.setStyleName(IMAGE_DETAILS_PANEL_STYLE_NAME);

        LayoutPanel centerPanel = new LayoutPanel();
        centerPanel.add(this.imageDetailsPanelWrapper);
        centerPanel.add(scrollDetailsTab);
        centerPanel.setWidgetTopHeight(this.imageDetailsPanelWrapper, 0, Unit.PX, 550, Unit.PX);
        centerPanel.setWidgetTopBottom(scrollDetailsTab, 445, Unit.PX, 0, Unit.PX);

        DockLayoutPanel dock = new DockLayoutPanel(Unit.PX);
        dock.addNorth(new HTML("Summary"), 39);
        dock.add(centerPanel);
        // dock.setStyleName(OBSERVATION_DETAILS_PANEL_STYLE_NAME);
        initWidget(dock);
    }

    public final void setAllSkyVisualizerRaDecAndZoom(final String ra, final String dec,
            final double zoomDegrees) {
        // getAladinLiteContainer().goToRaDecAndZoom(ra, dec, zoomDegrees);
        getAladinLiteContainer().goToRaDecAndZoom(ra, dec, zoomDegrees);
    }

    public final void drawAllSkyVisualizerFootprint(final String stcS) {
        // getAladinLiteContainer().removeFootprints();
        getAladinLiteContainer().drawStcSPolygon(stcS, FOOTPRINTS_COLOR);
    }

    public final void drawCircle(String ra, String dec, String radius, String color) {
        // getAladinLiteContainer().removeFootprints();
        getAladinLiteContainer().drawCircle(ra, dec, radius, "cyan");
    }

    public final void drawPolygons(List<double[]> polygonsPoints) {
        getAladinLiteContainer().drawFootprints(polygonsPoints);
    }

    public final void drawPolyline(double[] polylinePoints) {
        getAladinLiteContainer().drawPolyline(polylinePoints);
    }

    public final void goToObjectAndZoom(final String objectName, final double fov) {
        // Log.debug("Into AladinLiteSubPanel.goToObjectAndZoom(" + objectName + "," + zoomDegrees
        // + ")");
        getAladinLiteContainer().goToObjectAndZoom(objectName, fov);
    }

    // public void drawPolygons(Map<String, double[]> polygons) {
    // getAladinLiteContainer().drawFootprints(polygons);
    // }

    public final void drawImage(String baseSurveyId, String baseSurveyName,
            String baseSurveyRootUrl, String baseSurveyFrame, int baseMaximumNorder,
            String baseImageLayerColorMap, String overlayColor, double overlayLineWidth,
            String imageURL) {
        getAladinLiteContainer().doDrawImage(baseSurveyId, baseSurveyName, baseSurveyRootUrl,
                baseSurveyFrame, baseMaximumNorder, baseImageLayerColorMap, overlayColor,
                overlayLineWidth, imageURL);
    }

    public void doOverlayImageLayer(String baseImageLayer, String overlaySurveyId,
            String overlaySurveyName, String overlaySurveyRootUrl, String overlaySurveyFrame,
            int overlayMaximumNorder, String overlayImgFormat, double overlayAlpha) {
        getAladinLiteContainer().doOverlayImageLayer(baseImageLayer, overlaySurveyId,
                overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame, overlayMaximumNorder,
                overlayImgFormat, overlayAlpha);
    }

    public void changeBaseImageLayerColorMap(String colorMap) {
        getAladinLiteContainer().changeBaseImageLayerColorMap(colorMap);
    }

    public void testMethod() {
        getAladinLiteContainer().testMethod();

    }

}
