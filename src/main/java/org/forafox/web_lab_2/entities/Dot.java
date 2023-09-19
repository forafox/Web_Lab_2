package org.forafox.web_lab_2.entities;

import java.util.Locale;

public record Dot(float x, float y, float r, String time, long scriptTime, String status) {

    public String toJSON() {
        return String.format(Locale.US, "{\"x\": %.3f, \"y\": %.3f, \"r\": %.3f, \"status\": \"%s\", \"time\": \"%s\", \"scriptTime\": %d}", x, y, r, status, time, scriptTime);
    }
}