package esac.archive.absi.modules.cl.aladinlite.widget.client.event;

import com.google.gwt.event.shared.GwtEvent;

import esac.archive.absi.modules.cl.aladinlite.widget.client.model.AladinLiteObject;

/**
 * Event to record click events sent by AladinLite.
 */
public class AladinLiteFoVChangedEvent extends GwtEvent<AladinLiteFoVChangedEventHandler> {

    public static Type<AladinLiteFoVChangedEventHandler> TYPE = new Type<AladinLiteFoVChangedEventHandler>();

    private AladinLiteObject aladinLiteObject;

    public AladinLiteFoVChangedEvent(AladinLiteObject inputObject) {
        this.aladinLiteObject = inputObject;
    }

    @Override
    public Type<AladinLiteFoVChangedEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(AladinLiteFoVChangedEventHandler handler) {
        handler.onChangeEvent(this);
    }

    public AladinLiteObject getObject() {
        return this.aladinLiteObject;
    }
}
