package esac.archive.absi.modules.cl.aladinlite.widget.client.event;

import com.google.gwt.event.shared.GwtEvent;

import esac.archive.absi.modules.cl.aladinlite.widget.client.model.AladinLiteObject;

/**
 * Event to record click events sent by AladinLite.
 */
public class AladinLiteCoordinatesChangedEvent extends
        GwtEvent<AladinLiteCoordinatesChangedEventHandler> {

    public static Type<AladinLiteCoordinatesChangedEventHandler> TYPE = new Type<AladinLiteCoordinatesChangedEventHandler>();

    private AladinLiteObject aladinLiteObject;

    public AladinLiteCoordinatesChangedEvent(AladinLiteObject inputObject) {
        this.aladinLiteObject = inputObject;
    }

    @Override
    public Type<AladinLiteCoordinatesChangedEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(AladinLiteCoordinatesChangedEventHandler handler) {
        handler.onCoordsChanged(this);
    }

    public AladinLiteObject getObject() {
        return this.aladinLiteObject;
    }
}
