package esac.archive.absi.modules.cl.aladinlite.widget.client.event;

import com.google.gwt.event.shared.GwtEvent;

import esac.archive.absi.modules.cl.aladinlite.widget.client.model.AladinLiteObject;

/**
 * Event to record hover events sent by AladinLite.
 */
public class AladinLiteHoverEvent extends GwtEvent<AladinLiteHoverEventHandler> {

    public static Type<AladinLiteHoverEventHandler> TYPE = new Type<AladinLiteHoverEventHandler>();

    private AladinLiteObject aladinLiteObject;

    public AladinLiteHoverEvent(AladinLiteObject inputObject) {
        this.aladinLiteObject = inputObject;
    }

    @Override
    public Type<AladinLiteHoverEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(AladinLiteHoverEventHandler handler) {
        handler.onHoverEvent(this);
    }

    public AladinLiteObject getObject() {
        return this.aladinLiteObject;
    }
}
