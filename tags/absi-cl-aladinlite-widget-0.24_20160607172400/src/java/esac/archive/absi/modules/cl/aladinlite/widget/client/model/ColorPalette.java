package esac.archive.absi.modules.cl.aladinlite.widget.client.model;

/**
 * @author mhsarmiento Copyright (c) 2015- European Space Agency
 */

public enum ColorPalette {

    NATIVE("Native"), EOSB("EOSB"), PLANCK("Planck"), RAINBOW("Rainbow"), GREYSCALE("Greyscale"), CUBEHELIX(
            "Cubehelix");

    /** class attribute. */
    private String colorPalette;

    /**
     * Class Constructor.
     * @param value Input String
     */
    private ColorPalette(final String value) {
        this.colorPalette = value;
    }

    public String getName() {
        return this.colorPalette;
    }

    @Override
    public String toString() {
        return this.colorPalette;
    }
}
