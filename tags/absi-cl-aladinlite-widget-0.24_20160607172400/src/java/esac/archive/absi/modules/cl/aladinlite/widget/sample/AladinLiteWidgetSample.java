package esac.archive.absi.modules.cl.aladinlite.widget.sample;

import java.util.LinkedList;
import java.util.List;

import com.allen_sauer.gwt.log.client.Log;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Style.BorderStyle;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;

import esac.archive.absi.modules.cl.aladinlite.widget.sample.container.ObservationDetailsPanel;
import esac.archive.absi.modules.cl.aladinlite.widget.sample.contextmenu.AladinLiteSubPanel;

/**
 * Entry point for application. Leave empty (to avoid possible problems) when using inside a bigger
 * application.
 *
 * @author ileon Copyright (c) 2014- European Space Agency
 */
// public class AladinLiteWidgetSample {

public class AladinLiteWidgetSample implements EntryPoint {

    private ObservationDetailsPanel firstAladinLite;
    HandlerManager eventBus = new HandlerManager(this);

    // private ObservationDetailsPanel secondAladinLite;

    // @Override
    @Override
    public void onModuleLoad() {

        RootLayoutPanel.get().add(createTwoAladinLiteInstances());

        // VerticalPanel verticalPanel = createAladinPanelPopup();
        // RootLayoutPanel.get().add(verticalPanel);
    }

    private Widget createTwoAladinLiteInstances() {

        // eventBus.addHandler(AladinLiteCoordinatesChangedEvent.TYPE,
        // new AladinLiteCoordinatesChangedEventHandler() {
        //
        // @Override
        // public void onCoordsChanged(AladinLiteCoordinatesChangedEvent clickEvent) {
        // Log.debug("Coords changed");
        //
        // }
        // });

        final HorizontalPanel wrapperPanel = new HorizontalPanel();

        // Button button = new Button("<- init AL left instance");
        Button button2 = new Button("Draw polygon");
        Button button3 = new Button("Polyline");
        Button button4 = new Button("Draw complex polygon");
        Button button5 = new Button("Draw circle");
        Button button6 = new Button("Draw polygons");
        Button button7 = new Button("Overlay Image layer");
        Button button8 = new Button("Display JPG");
        Button button9 = new Button("Change color map");
        Button button10 = new Button("Click on footprint");
        Button button11 = new Button("Test method");

        String buttonWidth = "150px";

        // button.setWidth(buttonWidth);
        button2.setWidth(buttonWidth);
        button3.setWidth(buttonWidth);
        button4.setWidth(buttonWidth);
        button5.setWidth(buttonWidth);
        button6.setWidth(buttonWidth);
        button7.setWidth(buttonWidth);
        button8.setWidth(buttonWidth);
        button9.setWidth(buttonWidth);
        button10.setWidth(buttonWidth);
        button11.setWidth(buttonWidth);

        VerticalPanel buttonPanel = new VerticalPanel();
        // buttonPanel.add(button);
        buttonPanel.add(button2);
        buttonPanel.add(button3);
        buttonPanel.add(button4);
        buttonPanel.add(button5);
        buttonPanel.add(button6);
        buttonPanel.add(button7);
        buttonPanel.add(button8);
        buttonPanel.add(button9);
        buttonPanel.add(button10);
        buttonPanel.add(button11);
        // buttonPanel.add(button3);

        // button.addClickHandler(new ClickHandler() {
        //
        // @Override
        // public void onClick(ClickEvent event) {
        // // Set it back to option 1...
        // // if (secondAladinLite != null) {
        // // wrapperPanel.remove(secondAladinLite);
        // // secondAladinLite = null;
        // // }
        // firstAladinLite.attachAladinLiteContainer();
        // }
        // });

        button2.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                firstAladinLite.setAllSkyVisualizerRaDecAndZoom("129.22676006", "7.95322275288",
                        0.1);
                firstAladinLite
                .drawAllSkyVisualizerFootprint("Polygon J2000 129.200948 7.953656 129.229734 7.978535 129.252833 7.953195 129.223341 7.927710");
            }
        });

        button3.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {

                double[] polyline = { 2.29452158, 59.14978110, 10.12683778, 56.53733116,
                        14.1772154, 60.7167403, 21.45396446, 60.23528403, 28.59885697, 63.67010079 };

                firstAladinLite.goToObjectAndZoom("Gamma Cas", 10.0);
                firstAladinLite.drawPolyline(polyline);

            }

        });

        button4.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                // if (secondAladinLite != null) {
                // secondAladinLite.setAllSkyVisualizerRaDecAndZoom("10.7481577834",
                // "41.1119037382", 0.1);
                // secondAladinLite
                // .drawAllSkyVisualizerFootprint("Polygon J2000 10.721944 41.082269 10.715261 41.119589 10.732097 41.121515 10.729406 41.136880 10.774127 41.141998 10.780939 41.103756 10.763904 41.102176 10.766788 41.086471");
                // } else {
                firstAladinLite.setAllSkyVisualizerRaDecAndZoom("10.7481577834", "41.1119037382",
                        0.1);
                firstAladinLite
                .drawAllSkyVisualizerFootprint("Polygon J2000 10.721944 41.082269 10.715261 41.119589 10.732097 41.121515 10.729406 41.136880 10.774127 41.141998 10.780939 41.103756 10.763904 41.102176 10.766788 41.086471");
                // }

            }
        });

        button5.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                String ra = "83.66067";
                String dec = "22.03081";
                String radius = "0.04";
                String color = "cyan";
                Double fov = 0.2;
                // if (secondAladinLite != null) {
                // secondAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                // secondAladinLite.drawCircle(ra, dec, radius, color);
                // } else {
                firstAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                firstAladinLite.drawCircle(ra, dec, radius, color);
                // }

            }

        });

        button6.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {

                String ra = "83.66067";
                String dec = "22.03081";
                Double fov = 0.2;

                double[] firstPolygon = { 83.64287, 22.01713, 83.59872, 22.01692, 83.59852,
                        21.97629, 83.64295, 21.97629 };
                double[] secondPolygon = { 83.62807, 22.06330, 83.58397, 22.02280, 83.62792,
                        22.02258 };
                List<double[]> polygons = new LinkedList<double[]>();
                polygons.add(firstPolygon);
                polygons.add(secondPolygon);

                // if (secondAladinLite != null) {
                // secondAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                // secondAladinLite.drawPolygons(polygons);
                // } else {
                firstAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                firstAladinLite.drawPolygons(polygons);
                // }

            }

        });

        button7.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {

                String ra = "83.66067";
                String dec = "22.03081";
                Double fov = 160.0;

                String baseImageLayer = "P/Mellinger/color";
                String overlaySurveyName = "IRIS";
                String overlaySurveyId = "IRIS";
                String overlaySurveyRootUrl = "http://alasky.u-strasbg.fr/IRISColor/";
                String overlaySurveyFrame = "equatorial";
                int overlayMaximumNorder = 4;
                String overlayImgFormat = "jpg";
                double overlayAlpha = 0.3;

                // if (secondAladinLite != null) {
                // secondAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                // secondAladinLite.doOverlayImageLayer(baseImageLayer, overlaySurveyId,
                // overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame,
                // overlayImgFormat, overlayAlpha);
                // } else {
                firstAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                firstAladinLite.doOverlayImageLayer(baseImageLayer, overlaySurveyId,
                        overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame,
                        overlayMaximumNorder, overlayImgFormat, overlayAlpha);
                // }

            }

        });

        button8.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {

                String ra = "204.970214";
                String dec = "0.81206";
                Double fov = 0.15;

                // String baseImageLayer = "P/Mellinger/color";
                String baseSurveyName = "SDSS-DR9 r";
                String baseSurveyId = "SDSS-DR9 r";
                String baseSurveyRootUrl = "http://alasky.u-strasbg.fr/SDSS/DR9/band-r";
                String baseSurveyFrame = "equatorial";
                int baseMaximumNorder = 10;
                String baseImageLayerColorMap = "rainbow";
                String overlayColor = "#aa2222";
                double overlayLineWidth = 4;
                String imageURL = "http://images.ipac.caltech.edu/stsci/stsci-prc-2008-16-bu/stsci_stsci-prc-2008-16-bu_3614.jpg";

                // if (secondAladinLite != null) {
                // secondAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                // secondAladinLite.doOverlayImageLayer(baseImageLayer, overlaySurveyId,
                // overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame,
                // overlayImgFormat, overlayAlpha);
                // } else {
                firstAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                firstAladinLite.drawImage(baseSurveyId, baseSurveyName, baseSurveyRootUrl,
                        baseSurveyFrame, baseMaximumNorder, baseImageLayerColorMap, overlayColor,
                        overlayLineWidth, imageURL);
                // }

            }

        });

        button9.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {

                String colorMap = "rainbow";

                // if (secondAladinLite != null) {
                // secondAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
                // secondAladinLite.doOverlayImageLayer(baseImageLayer, overlaySurveyId,
                // overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame,
                // overlayImgFormat, overlayAlpha);
                // } else {
                firstAladinLite.changeBaseImageLayerColorMap(colorMap);
                // }

            }

        });

        // button10.addClickHandler(new ClickHandler() {
        //
        // @Override
        // public void onClick(ClickEvent event) {
        //
        // String ra = "83.66067";
        // String dec = "22.03081";
        // Double fov = 0.2;
        //
        // double[] firstPolygon = { 83.64287, 22.01713, 83.59872, 22.01692, 83.59852,
        // 21.97629, 83.64295, 21.97629 };
        // double[] secondPolygon = { 83.62807, 22.06330, 83.58397, 22.02280, 83.62792,
        // 22.02258 };
        // Map<String, double[]> polygons = new HashMap<String, double[]>();
        // polygons.put("observation1", firstPolygon);
        // polygons.put("observation2", secondPolygon);
        //
        // firstAladinLite.setAllSkyVisualizerRaDecAndZoom(ra, dec, fov);
        // firstAladinLite.drawPolygons(polygons);
        // // }
        //
        // }
        //
        // });

        button11.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {

                firstAladinLite.setAllSkyVisualizerRaDecAndZoom("129.22676006", "7.95322275288",
                        0.1);
                firstAladinLite.testMethod();

            }

        });

        firstAladinLite = new ObservationDetailsPanel(1);
        firstAladinLite.getElement().getStyle().setBorderColor("red");
        firstAladinLite.getElement().getStyle().setBorderWidth(1, Unit.PX);
        firstAladinLite.getElement().getStyle().setBorderStyle(BorderStyle.SOLID);
        firstAladinLite.getElement().getStyle().setBorderColor("red");
        firstAladinLite.setWidth("700px");
        firstAladinLite.setHeight("700px");

        // ObservationDetailsPanel.getAladinLiteContainer().addHandler(
        // new AladinLiteFoVChangedEventHandler() {
        //
        // @Override
        // public void onChangeEvent(AladinLiteFoVChangedEvent clickEvent) {
        // Log.debug("FoV changed");
        // }
        //
        // }, AladinLiteFoVChangedEvent.TYPE);
        //
        // ObservationDetailsPanel.getAladinLiteContainer().addHandler(
        // new AladinLiteCoordinatesChangedEventHandler() {
        //
        // @Override
        // public void onCoordsChanged(AladinLiteCoordinatesChangedEvent clickEvent) {
        // Log.debug("Coords changed");
        // }
        // }, AladinLiteCoordinatesChangedEvent.TYPE);

        wrapperPanel.add(firstAladinLite);
        wrapperPanel.add(buttonPanel);
        // wrapperPanel.add(secondAladinLite);

        return wrapperPanel;
    }

    private boolean checker = true;

    private VerticalPanel createAladinPanelPopup() {
        Log.info("Into AladinLiteWidgetSample.createAladinPanelPopup()");
        final AladinLiteSubPanel aladinLiteSubpanel = new AladinLiteSubPanel("div1");

        final DialogBox detailsDialogBox = new DialogBox();
        detailsDialogBox.getElement().getStyle().setBorderColor("red");
        detailsDialogBox.getElement().getStyle().setBorderStyle(BorderStyle.SOLID);
        detailsDialogBox.getElement().getStyle().setBorderWidth(5, Unit.PX);
        detailsDialogBox.add(aladinLiteSubpanel);
        detailsDialogBox.setGlassEnabled(true);
        detailsDialogBox.setAutoHideEnabled(true);

        VerticalPanel verticalPanel = new VerticalPanel();

        Button openButton = new Button("Open");
        Button closeButton = new Button("Close");

        openButton.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                detailsDialogBox.center();
                detailsDialogBox.show();
                aladinLiteSubpanel.goToRaDecAndZoom("129.22676006", "7.95322275288", 1);
                if (checker) {
                    checker = false;
                    aladinLiteSubpanel
                    .drawStcSPolygon(
                            "Polygon J2000 129.200948 7.953656 129.229734 7.978535 129.252833 7.953195 129.223341 7.927710",
                            "#FF0000");
                } else {

                    aladinLiteSubpanel
                    .drawStcSPolygon(
                            "Polygon J2000 129.200948 7.953656 129.229734 7.978535 129.252833 7.953195 129.223341 7.927710",
                            "#FFFF00");
                }

            }
        });

        closeButton.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(final ClickEvent event) {
                detailsDialogBox.hide();
            }
        });

        verticalPanel.add(openButton);
        verticalPanel.add(closeButton);

        return verticalPanel;
    }
}
