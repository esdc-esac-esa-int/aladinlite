package esac.archive.absi.modules.cl.aladinlite.widget.sample.contextmenu;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.VerticalPanel;

import esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteConstants;
import esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget;

public class SampleContainerPanel extends Composite {

    private AladinLiteWidget aladinLite;

    private JavaScriptObject targetSelectedCatalog;

    /** Aladin lite div name. */
    private String aladinLiteDivName;

    public SampleContainerPanel(String inputAladinLiteDivName) {
        super();
        this.aladinLiteDivName = inputAladinLiteDivName;
        initView();
    }

    /** Initialize panel. */
    public final void initView() {
        VerticalPanel container = new VerticalPanel();

        container.add(new HTML("Above Aladin Lite Widget"));
        this.aladinLite = new AladinLiteWidget(this.aladinLiteDivName, 400, 400, "P/DSS2/color",
                AladinLiteConstants.FRAME_J2000, true, false, false, false, false, false, false,
                "0 +0", 60, container);

        Button showTargetButton = new Button("Show target");
        showTargetButton.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                removePaintedTargets();
                paintAndShowAndSelectTarget("0", "+0");

            }
        });
        Button showSecondTargetButton = new Button("Show second target");
        showSecondTargetButton.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                removePaintedTargets();
                paintAndShowAndSelectTarget("1", "+0");

            }
        });

        AdvancedFocusPanel aladinLiteWrapper = new AdvancedFocusPanel(this.aladinLite);
        aladinLiteWrapper.add(this.aladinLite);
        container.add(aladinLiteWrapper);
        container.add(new HTML("Below Aladin Lite Widget"));
        container.add(showTargetButton);
        container.add(showSecondTargetButton);

        initWidget(container);
    }

    @SuppressWarnings("unused")
    private void doShowCanvasPosition(ClickEvent event) {
        int canvasX = event.getRelativeX(this.aladinLite.getElement());
        int canvasY = event.getRelativeY(this.aladinLite.getElement());
        Window.alert("Click relative position: X=" + canvasX + ", Y=" + canvasY);
        Window.alert("Click absolute position: X=" + event.getClientX() + ", Y="
                + event.getClientY());
    }

    @SuppressWarnings("unused")
    private void doShowFootprints(AladinLiteWidget aladinLite) {
        String stcsFootprint = "Polygon J2000 " + aladinLite.getFovCorners(4).toString();
        stcsFootprint = stcsFootprint.replaceAll(",", " ");
        // Window.alert(stcsFootprint);
        List<String> stcsFootprintList = new ArrayList<String>();
        stcsFootprintList.add(stcsFootprint);
        // stcsFootprintList.add("Polygon J2000 0.69061298 2.82031462 0.45202138 2.77061771 0.55484661 2.69927481 0.59227609 2.76016897");
        JsArray<JavaScriptObject> stcsFootprintArray = aladinLite
                .createFootprintArrayFromSTCS(stcsFootprintList);
        aladinLite.createOverlayAndAddFootprints("", "#dedede", stcsFootprintArray);
    }

    private void paintAndShowAndSelectTarget(String ra, String dec) {
        if (this.targetSelectedCatalog == null) {
            this.targetSelectedCatalog = this.aladinLite.createCatalog("Target Selected",
                    "#00CC00", 24);
        }

        JsArray<JavaScriptObject> jsSources = this.aladinLite.createSingleSourceArray(ra, dec,
                "message?");
        this.aladinLite.addSourcesToCatalog(this.targetSelectedCatalog, jsSources);
        // this.aladinLite.selectSource(targetSelectedCatalog, 0);
    }

    private void removePaintedTargets() {
        if (this.targetSelectedCatalog != null) {
            this.aladinLite.removeAllSourcesFromCatalog(this.targetSelectedCatalog);
        }
    }
}
