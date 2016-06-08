package esac.archive.absi.modules.cl.aladinlite.widget.client.event;

import com.google.gwt.event.shared.EventHandler;

/**
 * Handler interface for Aladin Lite click events.
 * @author ileon
 */
public interface AladinLiteCoordinatesChangedEventHandler extends EventHandler {

    void onCoordsChanged(AladinLiteCoordinatesChangedEvent clickEvent);
}
