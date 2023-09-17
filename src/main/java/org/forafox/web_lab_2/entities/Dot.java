package org.forafox.web_lab_2.entities;

import java.util.Locale;

public class Dot {
    private final float x;
    private final float y;
    private final float r;
    private final String status;
    private final String time;
    private final long scriptTime;

    public Dot(float x, float y, float r, String time, long scriptTime, String status) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.time = time;
        this.scriptTime = scriptTime;
        this.status = status;
    }

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getR() {
        return r;
    }

    public String getTime() {
        return time;
    }

    public long getScriptTime() {
        return scriptTime;
    }

    public String getStatus() {
        return status;
    }

    public String toJSON(){
        return String.format(Locale.US,"{\"x\": %.3f, \"y\": %.3f, \"r\": %.3f, \"status\": \"%s\", \"time\": \"%s\", \"scriptTime\": %d}",x, y, r, status, time, scriptTime);
    }
}