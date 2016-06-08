package esac.archive.absi.modules.cl.aladinlite.widget.client.event;

import com.google.gwt.event.shared.GwtEvent;

import esac.archive.absi.modules.cl.aladinlite.widget.client.model.AladinLiteObject;

/**
 * Event to record select end events sent by AladinLite.
 */
public class AladinLiteSelectEndEvent extends GwtEvent<AladinLiteSelectEndEventHandler> {

    public static Type<AladinLiteSelectEndEventHandler> TYPE = new Type<AladinLiteSelectEndEventHandler>();

    private AladinLiteObject aladinLiteObject;

    public AladinLiteSelectEndEvent(AladinLiteObject inputObject) {
        this.aladinLiteObject = inputObject;
    }

    @Override
    public Type<AladinLiteSelectEndEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(AladinLiteSelectEndEventHandler handler) {
        handler.onSelectEndEvent(this);
    }

    public AladinLiteObject getObject() {
        return this.aladinLiteObject;
    }
}
