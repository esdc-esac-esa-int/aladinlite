package esac.archive.absi.modules.cl.aladinlite.widget.client.event;

import com.google.gwt.event.shared.GwtEvent;

import esac.archive.absi.modules.cl.aladinlite.widget.client.model.AladinLiteObject;

/**
 * Event to record click events sent by AladinLite.
 */
public class AladinLiteClickEvent extends GwtEvent<AladinLiteClickEventHandler> {

    public static Type<AladinLiteClickEventHandler> TYPE = new Type<AladinLiteClickEventHandler>();

    private AladinLiteObject aladinLiteObject;

    public AladinLiteClickEvent(AladinLiteObject inputObject) {
        this.aladinLiteObject = inputObject;
    }

    @Override
    public Type<AladinLiteClickEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(AladinLiteClickEventHandler handler) {
        handler.onClickEvent(this);
    }

    public AladinLiteObject getObject() {
        return this.aladinLiteObject;
    }
}
