package esac.archive.absi.modules.cl.aladinlite.widget.sample.contextmenu;

import com.allen_sauer.gwt.log.client.Log;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.Style;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.ImageResource;
import com.google.gwt.resources.client.ImageResource.ImageOptions;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.safehtml.shared.SafeHtmlUtils;
import com.google.gwt.safehtml.shared.SafeUri;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.FocusPanel;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.MenuItem;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.Widget;

import esac.archive.absi.modules.cl.aladinlite.widget.client.AladinLiteWidget;

public class AdvancedFocusPanel extends FocusPanel implements AdvancedClickHandler {

    private PopupPanel popupPanel = new PopupPanel(true);
    private AladinLiteWidget aladinLite;
    private int mouseX;
    private int mouseY;

    HtmlTemplates templates = GWT.create(HtmlTemplates.class);
    Resources resources = GWT.create(Resources.class);

    public interface HtmlTemplates extends SafeHtmlTemplates {

        @Template("<img src=\"{0}\" style=\"vertical-align:middle;\"/><span>{1}</span></div>")
        SafeHtml createItem1(SafeUri uri, SafeHtml message);

        @Template("<span>{1}</span></div><img src=\"{0}\" style=\"vertical-align:middle;\"/>")
        SafeHtml createItem2(SafeUri uri, SafeHtml message);
    }

    public static interface Resources extends ClientBundle {

        @Source("help.png")
        @ImageOptions(flipRtl = true)
        ImageResource help();

        @Source("simbad.png")
        @ImageOptions(flipRtl = true)
        ImageResource simbad();
    }

    Command searchSimbadCommand = new Command() {

        @Override
        public void execute() {
            popupPanel.hide();
            /*
             * Window.alert("Coordinates" + aladinLite.getRaDec(mouseX, mouseY).getRaDeg() + ", " +
             * aladinLite.getRaDec(mouseX, mouseY).getDecDeg());
             */
            Window.open(SIMBADQueryBuilder.buildQuery(aladinLite.getRaDec(mouseX, mouseY)),
                    "_blank", "");
        }
    };

    public AdvancedFocusPanel(AladinLiteWidget aladinLite) {
        super();
        this.aladinLite = aladinLite;
        createPopupMenu();
        sinkEvents(Event.ONMOUSEUP | Event.ONCONTEXTMENU);
        super.addClickHandler(this);
    }

    @Override
    public void onBrowserEvent(Event event) {
        Log.debug("onBrowserEvent");
        event.preventDefault();
        event.stopPropagation();// cancelBubble(true);//This will stop the event from being
        // propagated
        switch (DOM.eventGetType(event)) {
        case Event.ONMOUSEUP:
            if (DOM.eventGetButton(event) == Event.BUTTON_RIGHT) {
                Log.debug("Event.BUTTON_RIGHT");
                this.onRightClick(this, event);
            }
            break;
        case Event.ONCONTEXTMENU:
            Log.debug("Event.ONCONTEXTMENU");
            Log.debug("Event.ONCONTEXTMENU");
            break;
        default:
            break; // Do nothing
        }// end switch
    }

    private void createPopupMenu() {
        MenuBar popupMenuBar = new MenuBar(true);
        // MenuItem whatsHere = new MenuItem("What's here?", true, searchSimbadCommand);
        MenuItem searchInSimbad = new MenuItem(templates.createItem2(this.resources.simbad()
                .getSafeUri(), SafeHtmlUtils.fromString("Search in")), searchSimbadCommand);
        MenuItem zoomIn = new MenuItem("Zoom in", true, searchSimbadCommand);
        MenuItem zoomOut = new MenuItem("Zoom out", true, searchSimbadCommand);
        MenuItem centerMap = new MenuItem("Center map here", true, searchSimbadCommand);
        MenuItem help = new MenuItem(templates.createItem1(this.resources.help().getSafeUri(),
                SafeHtmlUtils.fromString(" Help")));

        Style popupStyle = popupPanel.getElement().getStyle();
        popupStyle.setBackgroundColor("#e7e7e7");
        /*
         * popupStyle.setBorderColor("gray"); popupStyle.setBorderWidth(1, Unit.PX);
         * popupStyle.setBorderStyle(BorderStyle.SOLID);
         */
        popupStyle.setZIndex(30);

        // alertItem.addStyleName("popup-item");
        // imageItem.addStyleName("popup-item");
        // sponserItem.addStyleName("popup-item");

        // popupMenuBar.addItem(whatsHere);
        popupMenuBar.addItem(searchInSimbad);
        popupMenuBar.addSeparator();
        popupMenuBar.addItem(zoomIn);
        popupMenuBar.addItem(zoomOut);
        popupMenuBar.addItem(centerMap);
        popupMenuBar.addSeparator();
        popupMenuBar.addItem(help);

        popupMenuBar.setVisible(true);
        popupPanel.add(popupMenuBar);
    }

    @Override
    public void onClick(ClickEvent event) {
        // TODO Auto-generated method stub

    }

    /**
     * Gets the mouse x-position relative to a given element.
     *
     * @param target the element whose coordinate system is to be used
     * @return the relative x-position
     */
    public int getRelativeX(Event e, Element target) {
        return e.getClientX() - target.getAbsoluteLeft() + target.getScrollLeft()
                + target.getOwnerDocument().getScrollLeft();
    }

    /**
     * Gets the mouse y-position relative to a given element.
     *
     * @param target the element whose coordinate system is to be used
     * @return the relative y-position
     */
    public int getRelativeY(Event e, Element target) {
        return e.getClientY() - target.getAbsoluteTop() + target.getScrollTop()
                + target.getOwnerDocument().getScrollTop();
    }

    @Override
    public void onRightClick(Widget sender, Event event) {
        int x = DOM.eventGetClientX(event);
        int y = DOM.eventGetClientY(event);
        popupPanel.setPopupPosition(x, y);
        Log.debug("Show PopupPanel at " + x + "," + y);
        popupPanel.show();
        // set mouse relative coordinates for further processing
        Element parent = aladinLite.getElement();
        this.mouseX = getRelativeX(event, parent);
        this.mouseY = getRelativeY(event, parent);
        Log.debug("Relative position " + mouseX + "," + mouseY);
    }
}
