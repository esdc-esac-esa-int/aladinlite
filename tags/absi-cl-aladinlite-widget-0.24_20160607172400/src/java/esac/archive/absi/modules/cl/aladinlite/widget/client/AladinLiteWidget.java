package esac.archive.absi.modules.cl.aladinlite.widget.client;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.allen_sauer.gwt.log.client.Log;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.shared.EventBus;
import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Widget;

import esac.archive.absi.modules.cl.aladinlite.widget.client.event.AladinLiteClickEvent;
import esac.archive.absi.modules.cl.aladinlite.widget.client.event.AladinLiteCoordinatesOrFoVChangedEvent;
import esac.archive.absi.modules.cl.aladinlite.widget.client.event.AladinLiteHoverEvent;
import esac.archive.absi.modules.cl.aladinlite.widget.client.event.AladinLiteSelectEndEvent;
import esac.archive.absi.modules.cl.aladinlite.widget.client.event.AladinLiteSelectEvent;
import esac.archive.absi.modules.cl.aladinlite.widget.client.event.AladinLiteSelectStartEvent;
import esac.archive.absi.modules.cl.aladinlite.widget.client.model.AladinLiteObject;
import esac.archive.absi.modules.cl.aladinlite.widget.client.model.ColorPalette;
import esac.archive.absi.modules.cl.aladinlite.widget.client.model.CoordinatesObject;
import esac.archive.absi.modules.cl.aladinlite.widget.client.model.TapServiceSourceObject;

/**
 * Wrapper panel to hold an Aladin Lite component.
 *
 * @author ileon
 */
public class AladinLiteWidget extends Composite implements AladinLiteCDSWrapper {

    /** Aladin lite gwt div component. */
    private HTML aladinLiteGwtDiv;

    /** Name of the html div for the aladin lite js component. */
    private String aladinLiteDivName;

    /** Aladin Lite javascript object. */
    private JavaScriptObject aladinLiteJavascriptObject;

    /** Component width. */
    private double width;

    /** Component height. */
    private double height;

    /** Sky survey to use. */
    private String surveyString;

    /** Sky survey to use. */
    private JavaScriptObject surveyJSObj = null;

    /** Frame value (J2000/GAL) */
    private String cooFrameString;

    /** Show layers control?. */
    private boolean showLayersControlBoolean;

    /** Show go to control?. */
    private boolean showGotoControlBoolean;

    /** Show full screen control?. */
    private boolean showFullscreenControlBoolean;

    /** Show share control?. */
    private boolean showShareControlBoolean;

    /** Show reticle?. */
    private boolean showReticleBoolean;

    /** Show zoom control?. */
    private boolean showZoomControlBoolean;

    /** Show frame?. */
    private boolean showFrameBoolean;

    /** Initial position. */
    private String targetString;

    /** Initial zoom. */
    private double zoomDouble;

    /** Is this widget already attached?. */
    private boolean isAttached;

    private static SimpleEventBus eventBus = null;

    /**
     * Static variable, otherwise it cannot be accessed from static method, and if it is not a
     * static method it cannot be called by javascript listener...
     */
    private static Widget associatedWidget;

    /**
     * Default constructor.
     */
    @SuppressWarnings("static-access")
    public AladinLiteWidget(String divName, double width, double height, String surveyString,
            String cooFrameString, boolean showLayersControlBoolean,
            boolean showGotoControlBoolean, boolean showFullscreenControlBoolean,
            boolean showShareControlBoolean, boolean showReticleBoolean,
            boolean showZoomControlBoolean, boolean showFrameBoolean, String targetString,
            double zoomDouble, Widget widget) {
        this.aladinLiteDivName = divName;
        this.width = width;
        this.height = height;
        this.surveyString = surveyString;
        this.cooFrameString = cooFrameString;
        this.showLayersControlBoolean = showLayersControlBoolean;
        this.showGotoControlBoolean = showGotoControlBoolean;
        this.showFullscreenControlBoolean = showFullscreenControlBoolean;
        this.showShareControlBoolean = showShareControlBoolean;
        this.showReticleBoolean = showReticleBoolean;
        this.showZoomControlBoolean = showZoomControlBoolean;
        this.showFrameBoolean = showFrameBoolean;
        this.targetString = targetString;
        this.zoomDouble = zoomDouble;
        // Really bad practice, but see comment above...
        this.associatedWidget = widget;
        this.isAttached = false;
        initView();
    }

    /**
     * Constructor used by ESASky
     */
    @SuppressWarnings("static-access")
    public AladinLiteWidget(EventBus eventBus, String divName, double width, double height,
            String surveyString, String cooFrameString, boolean showLayersControlBoolean,
            boolean showGotoControlBoolean, boolean showFullscreenControlBoolean,
            boolean showShareControlBoolean, boolean showReticleBoolean,
            boolean showZoomControlBoolean, boolean showFrameBoolean, String targetString,
            double zoomDouble, Widget widget) {
        this.eventBus = (SimpleEventBus) eventBus;
        this.aladinLiteDivName = divName;
        this.width = width;
        this.height = height;
        this.surveyString = surveyString;
        this.cooFrameString = cooFrameString;
        this.showLayersControlBoolean = showLayersControlBoolean;
        this.showGotoControlBoolean = showGotoControlBoolean;
        this.showFullscreenControlBoolean = showFullscreenControlBoolean;
        this.showShareControlBoolean = showShareControlBoolean;
        this.showReticleBoolean = showReticleBoolean;
        this.showZoomControlBoolean = showZoomControlBoolean;
        this.showFrameBoolean = showFrameBoolean;
        this.targetString = targetString;
        this.zoomDouble = zoomDouble;
        // Really bad practice, but see comment above...
        this.associatedWidget = widget;
        this.isAttached = false;
        initView();
    }

    /**
     * Constructor used by ESASky
     */
    @SuppressWarnings("static-access")
    public AladinLiteWidget(EventBus eventBus, String divName, double width, double height,
            String surveyId, String surveyName, String surveyRootUrl, String surveyFrame,
            int maximumNorder, String imgFormat, String cooFrameString,
            boolean showLayersControlBoolean, boolean showGotoControlBoolean,
            boolean showFullscreenControlBoolean, boolean showShareControlBoolean,
            boolean showReticleBoolean, boolean showZoomControlBoolean, boolean showFrameBoolean,
            String targetString, double zoomDouble, Widget widget) {
        this.eventBus = (SimpleEventBus) eventBus;
        this.aladinLiteDivName = divName;
        this.width = width;
        this.height = height;
        this.surveyString = surveyId;
        this.surveyJSObj = this.createHpxImageSurvey(surveyId, surveyName, surveyRootUrl,
                surveyFrame, maximumNorder, imgFormat);
        this.cooFrameString = cooFrameString;
        this.showLayersControlBoolean = showLayersControlBoolean;
        this.showGotoControlBoolean = showGotoControlBoolean;
        this.showFullscreenControlBoolean = showFullscreenControlBoolean;
        this.showShareControlBoolean = showShareControlBoolean;
        this.showReticleBoolean = showReticleBoolean;
        this.showZoomControlBoolean = showZoomControlBoolean;
        this.showFrameBoolean = showFrameBoolean;
        this.targetString = targetString;
        this.zoomDouble = zoomDouble;
        // Really bad practice, but see comment above...
        this.associatedWidget = widget;
        this.isAttached = false;
        initView();
    }

    /** Initialize view. */
    public final void initView() {

        this.aladinLiteGwtDiv = new HTML();

        this.aladinLiteGwtDiv.getElement().setId(this.aladinLiteDivName);
        this.aladinLiteGwtDiv.getElement().getStyle().setWidth(this.width, Unit.PX);
        this.aladinLiteGwtDiv.getElement().getStyle().setHeight(this.height, Unit.PX);

        initWidget(this.aladinLiteGwtDiv);
    }

    @Override
    public void onAttach() {

        super.onAttach();

        Log.debug("Into AladinLiteWidget.onAttach(" + this.aladinLiteDivName + ")");

        if (!this.isAttached) {
            this.isAttached = true;
            if (surveyJSObj == null) {
                this.aladinLiteJavascriptObject = createJsObject(this.aladinLiteDivName,
                        this.surveyString, this.cooFrameString, this.showLayersControlBoolean,
                        this.showGotoControlBoolean, this.showFullscreenControlBoolean,
                        this.showShareControlBoolean, this.showReticleBoolean,
                        this.showZoomControlBoolean, this.showFrameBoolean, this.targetString,
                        this.zoomDouble);
            } else {
                this.aladinLiteJavascriptObject = createJsAladinObjectWithJsSurvey(
                        this.aladinLiteDivName, this.surveyJSObj, this.cooFrameString,
                        this.showLayersControlBoolean, this.showGotoControlBoolean,
                        this.showFullscreenControlBoolean, this.showShareControlBoolean,
                        this.showReticleBoolean, this.showZoomControlBoolean,
                        this.showFrameBoolean, this.targetString, this.zoomDouble);
            }
            // printJsObject(this.aladinLiteJavascriptObject);
            bind(this.aladinLiteJavascriptObject, this);

        }
    }

    private native void printJsObject(JavaScriptObject object)/*-{
		console.log(object);

    }-*/;

    private native JavaScriptObject createJsObject(String divNameString, String surveyString,
            String cooFrameString, boolean showLayersControlBoolean,
            boolean showGotoControlBoolean, boolean showFullscreenControlBoolean,
            boolean showShareControlBoolean, boolean showReticleBoolean,
            boolean showZoomControlBoolean, boolean showFrameBoolean, String targetString,
            double zoomDouble) /*-{
		return $wnd.A.aladin('#' + divNameString, {
			survey : surveyString,
			cooFrame : cooFrameString,
			showLayersControl : showLayersControlBoolean,
			showGotoControl : showGotoControlBoolean,
			showFullscreenControl : showFullscreenControlBoolean,
			showShareControl : showShareControlBoolean,
			showReticle : showReticleBoolean,
			showZoomControl : showZoomControlBoolean,
			showFrame : showFrameBoolean,
			target : targetString,
			zoom : zoomDouble
		});
    }-*/;

    private native JavaScriptObject createJsAladinObjectWithJsSurvey(String divNameString,
            JavaScriptObject mysurvey, String cooFrameString, boolean showLayersControlBoolean,
            boolean showGotoControlBoolean, boolean showFullscreenControlBoolean,
            boolean showShareControlBoolean, boolean showReticleBoolean,
            boolean showZoomControlBoolean, boolean showFrameBoolean, String targetString,
            double zoomDouble) /*-{
		return $wnd.A.aladin('#' + divNameString, {
			survey : mysurvey,
			cooFrame : cooFrameString,
			showLayersControl : showLayersControlBoolean,
			showGotoControl : showGotoControlBoolean,
			showFullscreenControl : showFullscreenControlBoolean,
			showShareControl : showShareControlBoolean,
			showReticle : showReticleBoolean,
			showZoomControl : showZoomControlBoolean,
			showFrame : showFrameBoolean,
			target : targetString,
			zoom : zoomDouble
		});
    }-*/;

    private native void bind(JavaScriptObject aladinLiteJsObject, AladinLiteWidget instance)/*-{

		var wtocheck;
		var latestFoV = instance.@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::getFovDeg()();
		var latestCenterLat = instance.@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::getCenterLatitudeDeg()();
		setInterval(
				function(aladinLiteJsObject) {
					if (latestFoV !== instance.@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::getFovDeg()()
							|| latestCenterLat !== instance.@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::getCenterLatitudeDeg()()) {
						clearTimeout(wtocheck);
						latestFoV = instance.@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::getFovDeg()();
						latestCenterLat = instance.@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::getCenterLatitudeDeg()();
						wtocheck = setTimeout(
								function() {
									@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::fireCoordinatesOrFoVChangedEvent()();
								}, 2000);
					}
				}, 1000);

		// define function triggered when an object is clicked
		aladinLiteJsObject
				.on(
						'objectClicked',
						function(object) {
							@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::fireClickEvent(Lesac/archive/absi/modules/cl/aladinlite/widget/client/model/AladinLiteObject;)(object);
							@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::fireBroadcastSelectEvent(Lesac/archive/absi/modules/cl/aladinlite/widget/client/model/AladinLiteObject;)(object);
						});

		// define function triggered when an object is hovered
		aladinLiteJsObject
				.on(
						'objectHovered',
						function(object) {
							@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::fireHoverEvent(Lesac/archive/absi/modules/cl/aladinlite/widget/client/model/AladinLiteObject;)(object);
						});

		aladinLiteJsObject
				.on(
						'select',
						function(object) {
							@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::fireSelectEvent(Lesac/archive/absi/modules/cl/aladinlite/widget/client/model/AladinLiteObject;)(object);
						});

		aladinLiteJsObject
				.fire(
						'selectstart',
						function(object) {
							@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::fireSelectStartEvent(Lesac/archive/absi/modules/cl/aladinlite/widget/client/model/AladinLiteObject;)(object);
						});

		aladinLiteJsObject
				.fire(
						'selectend',
						function(object) {
							@esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget::fireSelectEndEvent(Lesac/archive/absi/modules/cl/aladinlite/widget/client/model/AladinLiteObject;)(object);
						});

    }-*/;

    private static void fireCoordinatesOrFoVChangedEvent() {
        if (AladinLiteWidget.eventBus != null) {
            AladinLiteWidget.eventBus.fireEvent(new AladinLiteCoordinatesOrFoVChangedEvent());
        }
    }

    private static void fireBroadcastSelectEvent(AladinLiteObject object) {
        AladinLiteWidget.eventBus.fireEvent(new AladinLiteClickEvent(object));
    }

    private static void fireHoverEvent(AladinLiteObject object) {
        associatedWidget.fireEvent(new AladinLiteHoverEvent(object));
    }

    private static void fireClickEvent(AladinLiteObject object) {
        associatedWidget.fireEvent(new AladinLiteClickEvent(object));
    }

    private static void fireSelectEvent(AladinLiteObject object) {
        associatedWidget.fireEvent(new AladinLiteSelectEvent(object));
    }

    private static void fireSelectStartEvent(AladinLiteObject object) {
        associatedWidget.fireEvent(new AladinLiteSelectStartEvent(object));
    }

    private static void fireSelectEndEvent(AladinLiteObject object) {
        associatedWidget.fireEvent(new AladinLiteSelectEndEvent(object));
    }

    public CoordinatesObject convertMouseXYToRaDecDeg(double mouseX, double mouseY) {
        return cds_convertMouseXYToRaDecDeg(this.aladinLiteJavascriptObject, mouseX, mouseY);
    }

    private native CoordinatesObject cds_convertMouseXYToRaDecDeg(
            JavaScriptObject aladinLiteJsObject, double mouseX, double mouseY)/*-{
		var xy = $wnd.AladinUtils.viewToXy(mouseX, mouseY,
				aladinLiteJsObject.view.width, aladinLiteJsObject.view.height,
				aladinLiteJsObject.view.largestDim,
				aladinLiteJsObject.view.zoomFactor);
		var pos = aladinLiteJsObject.view.projection.unproject(xy.x, xy.y);
		// pos.ra, pos.dec
		return pos;
    }-*/;

    public CoordinatesObject convertRaDecDegToMouseXY(double raDeg, double decDeg) {
        return cds_convertRaDecDegToMouseXY(this.aladinLiteJavascriptObject, raDeg, decDeg);
    }

    private native CoordinatesObject cds_convertRaDecDegToMouseXY(
            JavaScriptObject aladinLiteJsObject, double raDeg, double decDeg)/*-{
		var xy = $wnd.AladinUtils.radecToViewXy(raDeg, decDeg,
				aladinLiteJsObject.view.projection,
				aladinLiteJsObject.view.cooFrame,
				aladinLiteJsObject.view.width, aladinLiteJsObject.view.height,
				aladinLiteJsObject.view.largestDim,
				aladinLiteJsObject.view.zoomFactor);
		return {
			mousex : xy.vx,
			mousey : xy.vy
		};
		//		var pos = aladinLiteJsObject.view.projection.unproject(xy.vx, xy.vy);
		// pos.ra, pos.dec
		//		return pos;
    }-*/;

    @Override
    public void goToObject(String inputObjectName) {
        cds_goToObject(this.aladinLiteJavascriptObject, inputObjectName);
    }

    private native void cds_goToObject(JavaScriptObject aladinLiteJsObject, String inputObjectName) /*-{
		aladinLiteJsObject.gotoObject(inputObjectName);
    }-*/;

    public void goToRaDec(String ra, String dec) {
        goToRaDec(this.aladinLiteJavascriptObject, ra, dec);
    }

    private native void goToRaDec(JavaScriptObject aladinLiteJsObject, String ra, String dec) /*-{
		aladinLiteJsObject.gotoRaDec(ra, dec);
    }-*/;

    public void increaseZoom() {
        increaseZoom(this.aladinLiteJavascriptObject);
    }

    private native void increaseZoom(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.increaseZoom();
    }-*/;

    public void decreaseZoom() {
        decreaseZoom(this.aladinLiteJavascriptObject);
    }

    private native void decreaseZoom(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.decreaseZoom();
    }-*/;

    public String getCooFrame() {
        return cds_getCooFrame(this.aladinLiteJavascriptObject);
    }

    private native String cds_getCooFrame(JavaScriptObject aladinLiteJsObject) /*-{
		return aladinLiteJsObject.view.cooFrame;
    }-*/;

    /*****************************************************/
    /*************** HpxImageSurvey methods *********************/
    /*****************************************************/
    @Override
    public JavaScriptObject createHpxImageSurvey(String overlaySurveyId, String overlaySurveyName,
            String overlaySurveyRootUrl, String overlaySurveyFrame, int overlayMaximumNorder,
            String overlayImgFormat) {
        return cds_createHpxImageSurvey(overlaySurveyId, overlaySurveyName, overlaySurveyRootUrl,
                overlaySurveyFrame, overlayMaximumNorder, overlayImgFormat);
    }

    private native JavaScriptObject cds_createHpxImageSurvey(String overlaySurveyId,
            String overlaySurveyName, String overlaySurveyRootUrl, String overlaySurveyFrame,
            int overlayMaximumNorder, String overlayImgFormat) /*-{
		var survey = new $wnd.HpxImageSurvey(overlaySurveyId,
				overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame,
				overlayMaximumNorder, {
					imgFormat : overlayImgFormat
				});
		console.log("survey: " + survey);
		return survey;
    }-*/;

    /*****************************************************/
    /*************** Overlay methods *********************/
    /*****************************************************/
    @Override
    public JavaScriptObject createAndAddOverlay(String color, double lineWidth) {

        JavaScriptObject overlay = this.cds_createOverlay(color, lineWidth);
        addOverlayToAladin(this.aladinLiteJavascriptObject, overlay);
        return overlay;
    }

    @Override
    public JavaScriptObject createOverlay(String color, double lineWidth) {
        return cds_createOverlay(color, lineWidth);
    }

    private native JavaScriptObject cds_createOverlay(String color, double lineWidth) /*-{
		return $wnd.A.graphicOverlay({
			color : color,
			lineWidth : lineWidth
		});
    }-*/;

    private native void addOverlayToAladin(JavaScriptObject aladinLiteJsObject,
            JavaScriptObject overlayJsObject) /*-{
		aladinLiteJsObject.addOverlay(overlayJsObject);
    }-*/;

    @Override
    public void addJ200CircleToOverlay(JavaScriptObject overlayJsObject, double ra, double dec,
            double radius, String tgtColor) {
        JavaScriptObject circle = cds_createJ2000Circle(ra, dec, radius, tgtColor);
        cds_addJ2000CircleToOverlay(overlayJsObject, circle);
    }

    @Override
    public JavaScriptObject createJ2000Circle(double ra, double dec, double radius, String tgtColor) {
        return cds_createJ2000Circle(ra, dec, radius, tgtColor);
    }

    private native JavaScriptObject cds_createJ2000Circle(double ra, double dec, double radius,
            String tgtColor)/*-{
		return $wnd.A.circle(ra, dec, radius, {
			color : tgtColor
		});
    }-*/;

    private native void cds_addJ2000CircleToOverlay(JavaScriptObject overlayJsObject,
            JavaScriptObject tgtcircle)/*-{
		overlayJsObject.add(tgtcircle);
    }-*/;

    @Override
    public void addJ2000PolylineToOverlay(JavaScriptObject overlayJsObject, double[] polyline) {
        // JsArray<JavaScriptObject> polylineJSArray = getNativeJsArray();
        JsArray<JavaScriptObject> mypolyline = cds_getNativeJsArray();
        JsArray<JavaScriptObject> mypolylinepoints = cds_getNativeJsArray();
        JavaScriptObject mypoint = cds_getNativeJsArray();

        double ra;
        double dec;
        for (int j = 0; j < polyline.length; j = j + 2) {
            ra = polyline[j];
            dec = polyline[j + 1];
            Log.debug("ra: " + ra + " dec: " + dec);
            mypoint = cds_getRaDecArray(ra, dec);
            mypolylinepoints.push(mypoint);
        }
        // mypolyline.push(mypolylinepoints);
        // polylineJSArray.push(createJ2000Polyline(mypolyline));
        // mypolyline = getNativeJsArray();
        JavaScriptObject pl = createJ2000Polyline(mypolylinepoints);
        cds_addJsJ2000PolylineToOverlay(overlayJsObject, pl);
    }

    @Override
    public JavaScriptObject createJ2000Polyline(JsArray<JavaScriptObject> tgtpolyline) {
        return cds_createJ2000Polyline(tgtpolyline);
    }

    private native JavaScriptObject cds_createJ2000Polyline(JsArray<JavaScriptObject> tgtpolyline)/*-{
		console.log(tgtpolyline);
		return $wnd.A.polyline(tgtpolyline);
    }-*/;

    private native void cds_addJsJ2000PolylineToOverlay(JavaScriptObject overlayJsObject,
            JavaScriptObject tgtpolyline)/*-{
		console.log(tgtpolyline);
		overlayJsObject.add(tgtpolyline);
    }-*/;

    @Override
    public void addJ2000PlygonsToOverlay(JavaScriptObject overlayJsObject, List<double[]> polygons) {
        JsArray<JavaScriptObject> polygonsJSArray = cds_getNativeJsArray();
        JsArray<JavaScriptObject> mypolygon = cds_getNativeJsArray();
        JavaScriptObject mypoint = cds_getNativeJsArray();

        for (double[] polygonPoints : polygons) {
            double ra = polygonPoints[0];
            double dec = polygonPoints[1];
            for (int j = 0; j < polygonPoints.length; j++) {
                if (j % 2 != 0) {
                    dec = polygonPoints[j];
                    mypoint = cds_getRaDecArray(ra, dec);
                    mypolygon.push(mypoint);

                } else {
                    ra = polygonPoints[j];
                }
            }
            polygonsJSArray.push(createJ2000Polygon(mypolygon, null));
            mypolygon = cds_getNativeJsArray();
        }
        cds_addJsJ2000PolygonsToOverlay(overlayJsObject, polygonsJSArray);
    }

    @Override
    public JavaScriptObject createJ2000Polygon(JsArray<JavaScriptObject> tgtpolygon, String obsId) {
        return cds_createJ2000Polygon(tgtpolygon, obsId);
    }

    private native JavaScriptObject cds_createJ2000Polygon(JsArray<JavaScriptObject> tgtpolygon)/*-{
		return $wnd.A.polygon(tgtpolygon);
    }-*/;

    private native JavaScriptObject cds_createJ2000Polygon(JsArray<JavaScriptObject> tgtpolygon,
            String obsid)/*-{
		return $wnd.A.polygon(tgtpolygon, obsid);
    }-*/;

    private native void cds_addJsJ2000PolygonsToOverlay(JavaScriptObject overlayJsObject,
            JsArray<JavaScriptObject> tgtpolygon)/*-{
		overlayJsObject.addFootprints(tgtpolygon);
    }-*/;

    @Override
    public JavaScriptObject getRaDecArray(double ra, double dec) {
        return cds_getRaDecArray(ra, dec);
    }

    private native JavaScriptObject cds_getRaDecArray(double ra, double dec)/*-{
		var point = new Array();
		point[0] = ra;
		point[1] = dec;
		return point;
    }-*/;

    @Override
    public JavaScriptObject createCatalog(String catalogName, int sourceSize, String color) {
        return cds_createCatalog(catalogName, sourceSize, color);
    }

    private native JavaScriptObject cds_createCatalog(String catalogname, int tgtsourcesize,
            String tgtcolor)/*-{
		return $wnd.A.catalog({
			name : catalogname,
			sourceSize : tgtsourcesize,
			color : tgtcolor
		});
    }-*/;

    @Override
    public void addCatalogAndSourcesToAladin(JavaScriptObject catalog,
            List<JavaScriptObject> markers) {
        cds_addCatalogToAladin(this.aladinLiteJavascriptObject, catalog);
        JsArray<JavaScriptObject> myMarkers = cds_getNativeJsArray();
        for (JavaScriptObject currentMarker : markers) {
            myMarkers.push(currentMarker);
        }
        cds_addSourcesToCatalog(catalog, myMarkers);
    }

    @Override
    public void addCatalogToAladin(JavaScriptObject catalog) {
        cds_addCatalogToAladin(this.aladinLiteJavascriptObject, catalog);
    }

    private native void cds_addCatalogToAladin(JavaScriptObject aladinLiteObj,
            JavaScriptObject catalog)/*-{
		aladinLiteObj.addCatalog(catalog);
    }-*/;

    private native void cds_addSourcesToCatalog(JavaScriptObject catalog,
            JsArray<JavaScriptObject> markers)/*-{
		catalog.addSources(markers);
    }-*/;

    @Override
    public JavaScriptObject createJ2000Marker(double ra, double dec, String popupHTMLTitle,
            String popupHTMLDesc) {
        return cds_createJ2000Marker(ra, dec, popupHTMLTitle, popupHTMLDesc);
    }

    private native JavaScriptObject cds_createJ2000Marker(double ra, double dec,
            String popupHTMLTitle, String popupHTMLDesc)/*-{
		return $wnd.A.marker(ra, dec, {
			popupTitle : popupHTMLTitle,
			popupDesc : popupHTMLDesc
		});
    }-*/;

    /*****************************************************/
    /*************** Base Image Overlay layers methods ***********/
    /*****************************************************/
    @Override
    public void drawFootprintsAndOverlayImageLayer(JavaScriptObject overlayJsObject,
            List<double[]> polygons, String baseImageLayer, String overlaySurveyId,
            String overlaySurveyName, String overlaySurveyRootUrl, String overlaySurveyFrame,
            int overlayMaximumNorder, String overlayImgFormat, double overlayAlpha) {
        addJ2000PlygonsToOverlay(overlayJsObject, polygons);
        doOverlayImageLayer(baseImageLayer, overlaySurveyId, overlaySurveyName,
                overlaySurveyRootUrl, overlaySurveyFrame, overlayMaximumNorder, overlayImgFormat,
                overlayAlpha);
    }

    @Override
    public void doOverlayImageLayer(String baseImageLayer, String overlaySurveyId,
            String overlaySurveyName, String overlaySurveyRootUrl, String overlaySurveyFrame,
            int overlayMaximumNorder, String overlayImgFormat, double overlayAlpha) {
        cds_doOverlayImageLayer(this.aladinLiteJavascriptObject, baseImageLayer, overlaySurveyId,
                overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame, overlayMaximumNorder,
                overlayImgFormat, overlayAlpha);
    }

    public native void cds_doOverlayImageLayer(JavaScriptObject aladinLiteJsObject,
            String baseImageLayer, String overlaySurveyId, String overlaySurveyName,
            String overlaySurveyRootUrl, String overlaySurveyFrame, int overlayMaximumNorder,
            String overlayImgFormat, double overlayAlpha)/*-{

		aladinLiteJsObject.setBaseImageLayer(baseImageLayer);
		aladinLiteJsObject.setOverlayImageLayer(aladinLiteJsObject
				.createImageSurvey(overlaySurveyId, overlaySurveyName,
						overlaySurveyRootUrl, overlaySurveyFrame,
						overlayMaximumNorder, {
							imgFormat : overlayImgFormat
						}));
		aladinLiteJsObject.getOverlayImageLayer().setAlpha(overlayAlpha);
    }-*/;

    @Override
    public void doOverlaySimpleImageLayer(String overlaySurveyId, String overlaySurveyName,
            String overlaySurveyRootUrl, String overlaySurveyFrame, int overlayMaximumNorder,
            String overlayImgFormat, double overlayAlpha) {
        cds_doOverlaySimpleImageLayer(this.aladinLiteJavascriptObject, overlaySurveyId,
                overlaySurveyName, overlaySurveyRootUrl, overlaySurveyFrame, overlayMaximumNorder,
                overlayImgFormat, overlayAlpha);
    }

    public native void cds_doOverlaySimpleImageLayer(JavaScriptObject aladinLiteJsObject,
            String overlaySurveyId, String overlaySurveyName, String overlaySurveyRootUrl,
            String overlaySurveyFrame, int overlayMaximumNorder, String overlayImgFormat,
            double overlayAlpha)/*-{

		aladinLiteJsObject.setOverlayImageLayer(aladinLiteJsObject
				.createImageSurvey(overlaySurveyId, overlaySurveyName,
						overlaySurveyRootUrl, overlaySurveyFrame,
						overlayMaximumNorder, {
							imgFormat : overlayImgFormat
						}));
		aladinLiteJsObject.getOverlayImageLayer().setAlpha(overlayAlpha);
    }-*/;

    @Override
    public void setOverlayImageLayerAlpha(double alpha) {
        cds_setOverlayImageLayerAlpha(this.aladinLiteJavascriptObject, alpha);
    }

    private native void cds_setOverlayImageLayerAlpha(JavaScriptObject aladinLiteJsObject,
            double alpha)/*-{
		aladinLiteJsObject.getOverlayImageLayer().setAlpha(alpha);
    }-*/;

    @Override
    public void setOverlayImageLayerToNull() {
        cds_setOverlayImageLayerToNull(this.aladinLiteJavascriptObject);
    }

    public native void cds_setOverlayImageLayerToNull(JavaScriptObject aladinLiteJsObject)/*-{
		aladinLiteJsObject.setOverlayImageLayer(null);
    }-*/;

    /*****************************************************/
    /*************** Image methods ***********************/
    /*****************************************************/

    /**
     * There is a little bug in the code of CDS for Aladin.prototype.displayPNG function. They are
     * referring to aladin variable
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
    @Override
    public void doDrawImage(String baseSurveyId, String baseSurveyName, String baseSurveyRootUrl,
            String baseSurveyFrame, int baseMaximumNorder, String baseImageLayerColorMap,
            String overlayColor, double overlayLineWidth, String imageURL, String imageTransparency) {

        cds_createAndSetBaseImageLayer(this.aladinLiteJavascriptObject, baseSurveyId,
                baseSurveyName, baseSurveyRootUrl, baseSurveyFrame, baseMaximumNorder);
        cds_changeBaseImageLayerColorMap(this.aladinLiteJavascriptObject, baseImageLayerColorMap);
        cds_displayJPG(this.aladinLiteJavascriptObject, imageURL, imageTransparency);
    }

    @Override
    public void displayJPG(String imageURL, String transparency) {
        cds_displayJPG(this.aladinLiteJavascriptObject, imageURL, transparency);
    }

    public void displayJPG(String imageURL, String transparency, double fov) {
        cds_displayJPG(this.aladinLiteJavascriptObject, imageURL, transparency, fov);
    }

    // private native void cds_displayJPGWithTransparency(JavaScriptObject aladinLiteJsObject,
    // String imageURL) /*-{
    // aladinLiteJsObject.displayJPG(imageURL, aladinLiteJsObject);
    // }-*/;

    private native void cds_displayJPG(JavaScriptObject aladinLiteJsObject, String imageURL,
            String tgttransparency, double fov) /*-{
		aladinLiteJsObject.displayJPG(imageURL, aladinLiteJsObject, {
			transparency : tgttransparency
		}, fov);
    }-*/;

    private native void cds_displayJPG(JavaScriptObject aladinLiteJsObject, String imageURL,
            String tgttransparency) /*-{
		aladinLiteJsObject.displayJPG(imageURL, aladinLiteJsObject, {
			transparency : tgttransparency
		});
    }-*/;

    public void testCDSJavascriptHere() {
        testCDSJavascriptHere(this.aladinLiteJavascriptObject);
    }

    private native void testCDSJavascriptHere(JavaScriptObject aladinLiteJsObject)/*-{

		// ############################# POLYLINE ###################################
		//		aladinLiteJsObject.gotoObject("Gamma Cas");
		//		aladinLiteJsObject.view.setZoom("10");
		//		var overlay = $wnd.A.graphicOverlay({
		//			color : '#ee2345',
		//			lineWidth : 2
		//		});
		//		aladinLiteJsObject.addOverlay(overlay);
		//		var tgtpolyline = $wnd.A.polyline([ [ 2.29452158, 59.14978110 ],
		//				[ 10.12683778, 56.53733116 ], [ 14.1772154, 60.7167403 ],
		//				[ 21.45396446, 60.23528403 ], [ 28.59885697, 63.67010079 ] ]);
		//		console.log(tgtpolyline);
		//
		//		overlay.add(tgtpolyline);

		// ############################# SHOW HEALPIX GRID ###################################
		aladinLiteJsObject
				.setBaseImageLayer(aladinLiteJsObject
						.createImageSurvey(
								'PACS70-test12',
								'PACS70-test12',
								'http://skies.esac.esa.int/Herschel/tests/PACS70_test12b',
								'equatorial', 10));

		aladinLiteJsObject.setBaseImageLayer(aladinLiteJsObject
				.createImageSurvey('DSS colored', 'DSS colored',
						'http://alasky.u-strasbg.fr/DSS/DSSColor/',
						'equatorial', 10));

		aladinLiteJsObject.showHealpixGrid(true);

		// // ###############################################################################
		//		aladinLiteJsObject.gotoObject("Arp 240");
		//
		//		aladinLiteJsObject.setBaseImageLayer(aladinLiteJsObject
		//				.createImageSurvey('SDSS-DR9 r', 'SDSS-DR9 r',
		//						'http://alasky.u-strasbg.fr/SDSS/DR9/band-r',
		//						'equatorial', 10));
		//		aladinLiteJsObject.getBaseImageLayer().getColorMap().update('rainbow');
		//		var simbad = $wnd.A.catalog({
		//			name : 'Simbad',
		//			sourceSize : 16,
		//			color : '#4050F0'
		//		});
		//		aladinLiteJsObject.addCatalog(simbad);
		//		simbad
		//				.addSources([
		//						$wnd.A
		//								.marker(
		//										204.97010833333336,
		//										0.8400166666666667,
		//										{
		//											popupTitle : 'NGC 5257',
		//											popupDesc : '<em>Object type:</em> HII galaxy<br/><em>Morphological type:</em> Sbc<br/><br/>More info <a href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NGC+5257">in Simbad</a>'
		//										}),
		//						$wnd.A
		//								.marker(
		//										204.9903125,
		//										0.8309694444444445,
		//										{
		//											popupTitle : 'NGC 5258',
		//											popupDesc : '<em>Object type:</em>  Galaxy in Pair of Galaxies <br/><em>Morphological type:</em> Sb<br/><br/>More info <a href="http://simbad.u-strasbg.fr/simbad/sim-id?Ident=NGC+5258">in Simbad</a>'
		//										}) ]);
		//		var overlay = $wnd.A.graphicOverlay({
		//			color : '#aa2222',
		//			lineWidth : 4
		//		});
		//		aladinLiteJsObject.addOverlay(overlay);
		//		overlay.addFootprints($wnd.A.polygon([ [ 204.970214, 0.81206 ],
		//				[ 204.97110047, 0.80993368 ], [ 204.978723, 0.79165 ],
		//				[ 204.999152, 0.800162 ], [ 204.99482125, 0.81055582 ],
		//				[ 205.002941, 0.813851 ], [ 204.99986816, 0.82141125 ],
		//				[ 205.010312, 0.825578 ], [ 205.002112, 0.846123 ],
		//				[ 204.981546, 0.837916 ], [ 204.98157771, 0.83783654 ],
		//				[ 204.962977, 0.830202 ], [ 204.9703941, 0.81213504 ] ]));
		//
		//		aladinLiteJsObject
		//				.displayJPG(
		//						'http://images.ipac.caltech.edu/stsci/stsci-prc-2008-16-bu/stsci_stsci-prc-2008-16-bu_3614.jpg',
		//						aladinLiteJsObject);
    }-*/;

    private native void cds_createAndSetBaseImageLayer(JavaScriptObject aladinLiteJsObject,
            String surveyId, String surveyName, String surveyRootUrl, String surveyFrame,
            int maximumNorder) /*-{
		aladinLiteJsObject.setBaseImageLayer(aladinLiteJsObject
				.createImageSurvey(surveyId, surveyName, surveyRootUrl,
						surveyFrame, maximumNorder));
    }-*/;

    @Override
    public void changeBaseImageLayerColorMap(String color) {
        cds_changeBaseImageLayerColorMap(this.aladinLiteJavascriptObject, color);
    }

    private native void cds_changeBaseImageLayerColorMap(JavaScriptObject aladinLiteJsObject,
            String color) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap().update(color);
    }-*/;

    /*****************************************************/
    /*************** Image Survey methods ****************/
    /*****************************************************/

    public void setImageSurvey(String surveyIdentifier) {
        setImageSurvey(this.aladinLiteJavascriptObject, surveyIdentifier);
    }

    private native void setImageSurvey(JavaScriptObject aladinLiteJsObject, String surveyIdentifier) /*-{
		aladinLiteJsObject.setImageSurvey(surveyIdentifier);
    }-*/;

    @Override
    @Deprecated
    public void createAndSetImageSurvey(String surveyId, String surveyName, String surveyRootUrl,
            String surveyFrame, int maximumNorder) {
        cds_createAndSetImageSurvey(this.aladinLiteJavascriptObject, surveyId, surveyName,
                surveyRootUrl, surveyFrame, maximumNorder);
    }

    private native void cds_createAndSetImageSurvey(JavaScriptObject aladinLiteJsObject,
            String surveyId, String surveyName, String surveyRootUrl, String surveyFrame,
            int maximumNorder) /*-{
		aladinLiteJsObject.setImageSurvey(aladinLiteJsObject
				.createImageSurvey(surveyId, surveyName, surveyRootUrl,
						surveyFrame, maximumNorder));
    }-*/;

    @Override
    public void createAndSetImageSurveyWithImgFormat(String surveyId, String surveyName,
            String surveyRootUrl, String surveyFrame, int maximumNorder, String imgFormat) {
        cds_createAndSetImageSurveyWithImgFormat(this.aladinLiteJavascriptObject, surveyId,
                surveyName, surveyRootUrl, surveyFrame, maximumNorder, imgFormat);
    }

    private native void cds_createAndSetImageSurveyWithImgFormat(
            JavaScriptObject aladinLiteJsObject, String surveyId, String surveyName,
            String surveyRootUrl, String surveyFrame, int maximumNorder, String imgFormat) /*-{
		aladinLiteJsObject.setImageSurvey(aladinLiteJsObject.createImageSurvey(
				surveyId, surveyName, surveyRootUrl, surveyFrame,
				maximumNorder, {
					imgFormat : imgFormat
				}));
    }-*/;

    /*****************************************************/
    /**** Catalog (~sources!) insert/remove methods ******/
    /*****************************************************/

    public JsArray<JavaScriptObject> createSourcesArray(List<TapServiceSourceObject> sources,
            String message) {
        JsArray<JavaScriptObject> sourcesArray = cds_getNativeJsArray();
        int index = 0;
        for (TapServiceSourceObject source : sources) {
            addSourceToArray(this.aladinLiteJavascriptObject, sourcesArray, source.getRa(),
                    source.getDec(), message, index);
            index++;
        }
        return sourcesArray;
    }

    public JsArray<JavaScriptObject> createSourcesArrayWithNames(
            List<TapServiceSourceObject> sources) {
        JsArray<JavaScriptObject> sourcesArray = cds_getNativeJsArray();
        int index = 0;
        for (TapServiceSourceObject source : sources) {
            addSourceToArray(this.aladinLiteJavascriptObject, sourcesArray, source.getRa(),
                    source.getDec(), source.getIauName(), index);
            index++;
        }
        return sourcesArray;
    }

    public JsArray<JavaScriptObject> createSourcesArrayWithNames(
            List<TapServiceSourceObject> sources, String catalogueName) {
        JsArray<JavaScriptObject> sourcesArray = cds_getNativeJsArray();
        int index = 0;
        for (TapServiceSourceObject source : sources) {
            addSourceToArrayWithDetails(this.aladinLiteJavascriptObject, sourcesArray,
                    source.getRa(), source.getDec(), source.getIauName(), catalogueName, index);
            index++;
        }
        return sourcesArray;
    }

    private native void addSourceToArrayWithDetails(JavaScriptObject aladinLiteJsObject,
            JsArray<JavaScriptObject> sourcesArray, String ra, String dec, String sourceName,
            String catalogueName, int index) /*-{
		sourcesArray.push(aladinLiteJsObject.createSource(ra, dec, {
			sourcename : sourceName,
			catalogue : catalogueName,
			idx : index
		}));
    }-*/;

    public JsArray<JavaScriptObject> createSingleSourceArray(String ra, String dec, String message) {
        JsArray<JavaScriptObject> sourcesArray = cds_getNativeJsArray();
        addSourceToArray(this.aladinLiteJavascriptObject, sourcesArray, ra, dec, message, 0);
        return sourcesArray;
    }

    private native void addSourceToArray(JavaScriptObject aladinLiteJsObject,
            JsArray<JavaScriptObject> sourcesArray, String ra, String dec, String message, int index) /*-{
		sourcesArray.push(aladinLiteJsObject.createSource(ra, dec, {
			message : message,
			idx : index
		}));
    }-*/;

    public JavaScriptObject createCatalogAndAddSources(String catalogName, String catalogColor,
            JsArray<JavaScriptObject> sourcesArray) {
        return createCatalogAndAddSources(this.aladinLiteJavascriptObject, catalogName,
                catalogColor, sourcesArray);
    }

    private native JavaScriptObject createCatalogAndAddSources(JavaScriptObject aladinLiteJsObject,
            String catalogName, String catalogColor, JsArray<JavaScriptObject> sourcesArray) /*-{
		var newCatalog = aladinLiteJsObject.createCatalog({
			name : catalogName,
			color : catalogColor,
			sourceSize : 6
		});
		aladinLiteJsObject.addCatalog(newCatalog);
		newCatalog.addSources(sourcesArray);
		return newCatalog;
    }-*/;

    public JavaScriptObject createCatalog(String catalogName, String catalogColor,
            int sourceSizeValue) {
        return createCatalog(this.aladinLiteJavascriptObject, catalogName, catalogColor,
                sourceSizeValue);
    }

    private native JavaScriptObject createCatalog(JavaScriptObject aladinLiteJsObject,
            String catalogName, String catalogColor, int sourceSizeValue) /*-{
		var newCatalog = aladinLiteJsObject.createCatalog({
			name : catalogName,
			color : catalogColor,
			sourceSize : sourceSizeValue
		});
		aladinLiteJsObject.addCatalog(newCatalog);
		return newCatalog;
    }-*/;

    // public void addSourcesToCatalog(JavaScriptObject catalog,
    // JsArray<JavaScriptObject>
    // sourcesArray) {
    // addSourcesToCatalog(catalog, sourcesArray);
    // }

    public native void addSourcesToCatalog(JavaScriptObject catalog,
            JsArray<JavaScriptObject> sourcesArray) /*-{
		catalog.addSources(sourcesArray);
    }-*/;

    // public void selectSource(JavaScriptObject catalog, int idx) {
    // selectSource(catalog, idx);
    // }

    /**
     * select the source at the given idx within the catalog without removing the selection from
     * previously selected sources
     * @param catalog
     * @param idx
     */
    public native void selectSourceFromCatalogue(JavaScriptObject catalog, int idx) /*-{
		if (catalog) {
			if (catalog != null) {
				var source = catalog.getSource(idx);
				source.select();
			}
		}
    }-*/;

    /**
     * remove the selection from all selected sources within a given catalog
     * @param catalog
     */
    public native void cleanSelectionOnCatalogue(JavaScriptObject catalog) /*-{
		if (catalog) {
			if (catalog != null) {
				catalog.deselectAll();
			}
		}
    }-*/;

    /**
     * deselect the source at the given idx within the given catalog
     * @param catalog
     * @param idx
     */
    public native void deselectSourceFromCatalogue(JavaScriptObject catalog, int idx) /*-{
		if (catalog) {
			if (catalog != null) {
				var source = catalog.getSource(idx);
				source.deselect();
			}
		}
    }-*/;

    public native void selectSource(JavaScriptObject catalog, int idx) /*-{
		if (catalog) {
			if (catalog != null) {
				catalog.deselectAll();
				var source = catalog.getSource(idx);
				source.select();
			}
		}
    }-*/;

    public void removeAllSourcesFromCatalog(JavaScriptObject catalog) {
        removeAllSourcesFromCatalog(this.aladinLiteJavascriptObject, catalog);
    }

    private native void removeAllSourcesFromCatalog(JavaScriptObject aladinLiteJsObject,
            JavaScriptObject catalog) /*-{
		if (catalog != null) {
			catalog.removeAll();
		}
		aladinLiteJsObject.view.requestRedraw();
    }-*/;

    /*****************************************************/
    /******* Footprints insert/remove methods ************/
    /*****************************************************/

    /**
     * For single footprint
     * @param aladinLiteJsObject
     * @param inputStcsFootprint
     * @return
     */
    public JavaScriptObject createFootprintFromSTCS(String stcsFootprint) {
        return createFootprintsFromSTCS(this.aladinLiteJavascriptObject, stcsFootprint);
    }

    /**
     * For multiple footprints
     * @param stcsFootprintList
     * @return
     */
    public JsArray<JavaScriptObject> createFootprintArrayFromSTCS(List<String> stcsFootprintList) {
        JsArray<JavaScriptObject> stcsFootprintArray = cds_getNativeJsArray();
        for (String stcsFootprint : stcsFootprintList) {
            stcsFootprintArray.push(createFootprintsFromSTCS(this.aladinLiteJavascriptObject,
                    stcsFootprint));
        }
        return stcsFootprintArray;
    }

    public JsArray<JavaScriptObject> getNativeJsArray() {
        return cds_getNativeJsArray();
    }

    private native JsArray<JavaScriptObject> cds_getNativeJsArray() /*-{
		return [];
    }-*/;

    private native JavaScriptObject createFootprintsFromSTCS(JavaScriptObject aladinLiteJsObject,
            String inputStcsFootprint) /*-{
		return aladinLiteJsObject.createFootprintsFromSTCS(inputStcsFootprint);
    }-*/;

    public void addFootprintToOverlay(JavaScriptObject overlay, JavaScriptObject footprint) {
        cds_addFootprintToOverlay(overlay, footprint);
    }

    private native void cds_addFootprintToOverlay(JavaScriptObject overlay,
            JavaScriptObject footprint)/*-{
		overlay.addFootprints(footprint);
    }-*/;

    public JavaScriptObject createOverlay(String overlayName, String overlayColor) {
        return cds_createOverlay(this.aladinLiteJavascriptObject, overlayName, overlayColor);
    }

    private native JavaScriptObject cds_createOverlay(JavaScriptObject aladinLiteJavascriptObject,
            String overlayName, String overlayColor) /*-{
		var aladinOverlay = aladinLiteJavascriptObject.createOverlay({
			name : overlayName,
			color : overlayColor
		});
		aladinLiteJavascriptObject.addOverlay(aladinOverlay);
		return aladinOverlay;
    }-*/;

    public JavaScriptObject createOverlayAndAddFootprints(String overlayName, String overlayColor,
            JsArray<JavaScriptObject> stcsFootprintArray) {
        return createOverlayAndAddFootprints(this.aladinLiteJavascriptObject, overlayName,
                overlayColor, stcsFootprintArray);
    }

    private native JavaScriptObject createOverlayAndAddFootprints(
            JavaScriptObject aladinLiteJsObject, String overlayName, String overlayColor,
            JsArray<JavaScriptObject> stcsFootprintArray) /*-{
		var aladinOverlay = aladinLiteJsObject.createOverlay({
			name : overlayName,
			color : overlayColor
		});
		aladinLiteJsObject.addOverlay(aladinOverlay);
		for (var k = 0, len = stcsFootprintArray.length; k < len; k++) {
			aladinOverlay.addFootprints(stcsFootprintArray[k]);
		}
		return aladinOverlay;
    }-*/;

    public JavaScriptObject removeAllFootprintsFromOverlay(JavaScriptObject aladinOverlay) {
        return removeAllFootprintsFromOverlay(this.aladinLiteJavascriptObject, aladinOverlay);
    }

    private native JavaScriptObject removeAllFootprintsFromOverlay(
            JavaScriptObject aladinLiteJsObject, JavaScriptObject aladinOverlay) /*-{
		aladinOverlay.removeAll();
		aladinLiteJsObject.view.requestRedraw();
    }-*/;

    public native void selectJsFootprint(JavaScriptObject jsFootprint) /*-{
		if (jsFootprint) {
			for (var k = 0, len = jsFootprint.length; k < len; k++) {
				jsFootprint[k].select();
			}
		}
    }-*/;

    public native void deselectJsFootprint(JavaScriptObject jsFootprint) /*-{
		if (jsFootprint) {
			for (var k = 0, len = jsFootprint.length; k < len; k++) {
				jsFootprint[k].deselect();
			}
		}
    }-*/;

    /*****************************************************/
    /*************** Color Map Actions *******************/
    /*****************************************************/

    /**
     * setDefaultColorPalette().
     * @param colorPalette Input Enum ColorPalette
     */
    @Override
    public final void setColorPalette(final ColorPalette colorPalette) {

        switch (colorPalette) {
        case GREYSCALE:
            setGrayscaleColorMap();
            break;
        case EOSB:
            setEosbColorMap();
            break;
        case RAINBOW:
            setRainbowColorMap();
            break;
        case PLANCK:
            setPlanckColorMap();
            break;
        case CUBEHELIX:
            setCubehelixColorMap();
            break;
        default:
            setNativeColorMap();
            break;

        }
    }

    @Override
    public void reverseColorMap() {
        reverseColorMap(this.aladinLiteJavascriptObject);
    }

    private native void reverseColorMap(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap().reverse();
    }-*/;

    @Override
    public void setRainbowColorMap() {
        setRainbowColorMap(this.aladinLiteJavascriptObject);
    }

    private native void setRainbowColorMap(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap().update('rainbow');
    }-*/;

    @Override
    public void setEosbColorMap() {
        setEosbColorMap(this.aladinLiteJavascriptObject);
    }

    private native void setEosbColorMap(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap().update('eosb');
    }-*/;

    @Override
    public void setNativeColorMap() {
        setNativeColorMap(this.aladinLiteJavascriptObject);
    }

    private native void setNativeColorMap(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap().update('native');
    }-*/;

    @Override
    public void setGrayscaleColorMap() {
        setGrayscaleColorMap(this.aladinLiteJavascriptObject);
    }

    private native void setGrayscaleColorMap(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap()
				.update('grayscale');
    }-*/;

    @Override
    public void setPlanckColorMap() {
        setPlanckColorMap(this.aladinLiteJavascriptObject);
    }

    private native void setPlanckColorMap(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap().update('planck');
    }-*/;

    @Override
    public void setCMBColorMap() {
        setCMBColorMap(this.aladinLiteJavascriptObject);
    }

    private native void setCMBColorMap(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap().update('cmb');
    }-*/;

    @Override
    public void setCubehelixColorMap() {
        setCubehelixColorMap(this.aladinLiteJavascriptObject);
    }

    private native void setCubehelixColorMap(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.getBaseImageLayer().getColorMap()
				.update('cubehelix');
    }-*/;

    /*****************************************************/
    /******* Get latitude/longitude Actions **************/
    /*****************************************************/
    public CoordinatesObject getRaDec(int x, int y) {
        return getRaDec(this.aladinLiteJavascriptObject, x, y);
    }

    private native CoordinatesObject getRaDec(JavaScriptObject aladinLiteJsObject, int x, int y) /*-{
		return aladinLiteJsObject.getRaDec(x, y);
    }-*/;

    public double getCenterLongitudeDeg() {
        return getCenterLongitudeDeg(this.aladinLiteJavascriptObject);
    }

    private native double getCenterLongitudeDeg(JavaScriptObject aladinLiteJsObject) /*-{
		return aladinLiteJsObject.view.viewCenter.lon;
    }-*/;

    public double getCenterLatitudeDeg() {
        return getCenterLatitudeDeg(this.aladinLiteJavascriptObject);
    }

    private native double getCenterLatitudeDeg(JavaScriptObject aladinLiteJsObject) /*-{
		return aladinLiteJsObject.view.viewCenter.lat;
    }-*/;

    public double getFovDeg() {
        return getFovDeg(this.aladinLiteJavascriptObject);
    }

    private native double getFovDeg(JavaScriptObject aladinLiteJsObject) /*-{
		return aladinLiteJsObject.view.fov;
    }-*/;

    public JavaScriptObject getFovCorners(int points) {
        return getFovCorners(this.aladinLiteJavascriptObject, points);
    }

    private native JavaScriptObject getFovCorners(JavaScriptObject aladinLiteJsObject, int points) /*-{
		return aladinLiteJsObject.getFovCorners(points);
    }-*/;

    public void showReticle(boolean show) {
        showReticle(this.aladinLiteJavascriptObject, show);
    }

    private native void showReticle(JavaScriptObject aladinLiteJsObject, boolean show) /*-{
		aladinLiteJsObject.showReticle(show);
    }-*/;

    public void fixLayoutDimensions() {
        fixLayoutDimensions(this.aladinLiteJavascriptObject);
    }

    private native void fixLayoutDimensions(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.view.fixLayoutDimensions();
    }-*/;

    @Override
    public void setZoom(double zoomDegrees) {
        setZoom(this.aladinLiteJavascriptObject, zoomDegrees);
    }

    private native void setZoom(JavaScriptObject aladinLiteJsObject, double zoomDegrees) /*-{
		aladinLiteJsObject.view.setZoom(zoomDegrees);
    }-*/;

    public void resize(double newWidth, double newHeight, Unit newUnit) {
        this.aladinLiteGwtDiv.getElement().getStyle().setWidth(newWidth, newUnit);
        this.aladinLiteGwtDiv.getElement().getStyle().setHeight(newHeight, newUnit);
        fixLayoutDimensions();
    }

    public void requestRedraw() {
        requestRedraw(this.aladinLiteJavascriptObject);
    }

    private native void requestRedraw(JavaScriptObject aladinLiteJsObject) /*-{
		aladinLiteJsObject.view.requestRedraw();
    }-*/;

    /**
     * NEW API. From here on new AladinLite API using CDS facade as per Thomas Bock suggestion
     *
     */

    /**
     * It adds a new source to hte given catalogue
     * @param jsCatalogue JS object representing the catalogue where to add the jsSource
     * @param jsSource JS obj representing the source to be added to the catalogue
     */
    public void newApi_addSourceToCatalogue(JavaScriptObject jsCatalogue, JavaScriptObject jsSource) {
        JsArray<JavaScriptObject> sourcesArray = cds_getNativeJsArray();
        sourcesArray.push(jsSource);
        addSourcesToCatalog(jsCatalogue, sourcesArray);
    }

    /**
     * It creates a JS obj source with the passed details as extra info
     * @param ra source right ascension
     * @param dec source declination
     * @param details extra parameters (e.g. message, idx, ...)
     * @return a JS obj representing the source
     */
    public <T> JavaScriptObject newApi_createSourceJSObj(String ra, String dec,
            Map<String, T> details) {
        JSONObject jsonDetails = new JSONObject();
        if (null != details) {
            for (Entry<String, T> currDetail : details.entrySet()) {
                if (null != currDetail.getValue()) {
                    if (currDetail.getValue() instanceof String) {
                        // Log.debug(currDetail.getKey() + " " + currDetail.getValue());
                        jsonDetails.put(currDetail.getKey(),
                                new JSONString((String) currDetail.getValue()));
                    } else if (currDetail.getValue() instanceof Integer) {
                        jsonDetails.put(currDetail.getKey(),
                                new JSONNumber(((Integer) currDetail.getValue()).doubleValue()));
                    } else if (currDetail.getValue() instanceof Float) {
                        jsonDetails.put(currDetail.getKey(),
                                new JSONNumber(((Float) currDetail.getValue()).doubleValue()));
                    } else if (currDetail.getValue() instanceof Double) {
                        jsonDetails.put(currDetail.getKey(),
                                new JSONNumber((Double) currDetail.getValue()));
                    }
                }

            }
        }

        return newCDSApi_createSource(ra, dec, jsonDetails.getJavaScriptObject());
        // return newCDSApi_createSource(ra, dec, null);
    }

    /**
     * It creates a JS obj source with the passed details as extra info
     * @param ra source right ascension
     * @param dec source declination
     * @param details extra parameters (e.g. message, idx, ...)
     * @return
     */
    private native JavaScriptObject newCDSApi_createSource(String ra, String dec,
            JavaScriptObject details) /*-{
		return new $wnd.A.source(ra, dec, details, null);
    }-*/;

    public void enableReduceDeformations() {
        enableReduceDeformations(this.aladinLiteJavascriptObject);
    }

    private native void enableReduceDeformations(JavaScriptObject aladinObj) /*-{
		aladinObj.setReduceDeformations(true);
    }-*/;

    public JavaScriptObject createImageMarker(String imgSourceURL) {
        return cds_createImageMarker(imgSourceURL);
    }

    private native JavaScriptObject cds_createImageMarker(String imgSourceURL)/*-{
		var customImg = new $wnd.Image();
		customImg.src = imgSourceURL;
		return customImg;
    }-*/;

    public <T> JavaScriptObject createCatalogWithDetails(String catalogName, int sourceSize,
            String color, Map<String, T> details) {

        JSONObject jsonDetails = new JSONObject();

        jsonDetails.put("name", new JSONString(catalogName));
        jsonDetails.put("sourceSize", new JSONNumber(sourceSize));
        jsonDetails.put("color", new JSONString(color));

        if (null != details) {
            for (Entry<String, T> currDetail : details.entrySet()) {
                if (null != currDetail.getValue()) {
                    if (currDetail.getValue() instanceof String) {
                        // Log.debug(currDetail.getKey() + " " + currDetail.getValue());
                        jsonDetails.put(currDetail.getKey(),
                                new JSONString((String) currDetail.getValue()));
                    } else if (currDetail.getValue() instanceof Integer) {
                        jsonDetails.put(currDetail.getKey(),
                                new JSONNumber(((Integer) currDetail.getValue()).doubleValue()));
                    } else if (currDetail.getValue() instanceof Float) {
                        jsonDetails.put(currDetail.getKey(),
                                new JSONNumber(((Float) currDetail.getValue()).doubleValue()));
                    } else if (currDetail.getValue() instanceof Double) {
                        jsonDetails.put(currDetail.getKey(),
                                new JSONNumber((Double) currDetail.getValue()));
                    } else if (currDetail.getValue() instanceof JavaScriptObject) {
                        jsonDetails.put(currDetail.getKey(), new JSONObject(
                                (JavaScriptObject) currDetail.getValue()));
                    }

                }

            }
        }
        return cds_createCatalog(jsonDetails.getJavaScriptObject());
    }

    private native JavaScriptObject cds_createCatalog(JavaScriptObject details)/*-{
		return $wnd.A.catalog(details);
    }-*/;

}
