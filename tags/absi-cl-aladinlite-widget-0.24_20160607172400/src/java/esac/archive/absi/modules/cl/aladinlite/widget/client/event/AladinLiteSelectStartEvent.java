package esac.archive.absi.modules.cl.aladinlite.widget.client.event;

import com.google.gwt.event.shared.GwtEvent;

import esac.archive.absi.modules.cl.aladinlite.widget.client.model.AladinLiteObject;

/**
 * Event to record select start events sent by AladinLite.
 */
public class AladinLiteSelectStartEvent extends GwtEvent<AladinLiteSelectStartEventHandler> {

    public static Type<AladinLiteSelectStartEventHandler> TYPE = new Type<AladinLiteSelectStartEventHandler>();

    private AladinLiteObject aladinLiteObject;

    public AladinLiteSelectStartEvent(AladinLiteObject inputObject) {
        this.aladinLiteObject = inputObject;
    }

    @Override
    public Type<AladinLiteSelectStartEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(AladinLiteSelectStartEventHandler handler) {
        handler.onSelectStartEvent(this);
    }

    public AladinLiteObject getObject() {
        return this.aladinLiteObject;
    }
}
