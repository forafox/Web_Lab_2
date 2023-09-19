package org.forafox.web_lab_2.entities;

import jakarta.servlet.http.HttpSession;

import java.util.List;

public interface DotStore {
    public void add(Dot dot, HttpSession session);
    public void clear(HttpSession session);
    public List<Dot> getCollection(HttpSession session);
    public Dot getLast(HttpSession session);
    public boolean isEmpty(HttpSession session);
}
