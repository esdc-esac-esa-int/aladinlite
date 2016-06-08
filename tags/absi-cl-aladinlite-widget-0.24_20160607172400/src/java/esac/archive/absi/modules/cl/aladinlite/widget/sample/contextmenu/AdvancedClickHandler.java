package esac.archive.absi.modules.cl.aladinlite.widget.sample.contextmenu;

import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.ui.Widget;

public interface AdvancedClickHandler extends ClickHandler {
  void onRightClick(Widget sender, Event event);
}

