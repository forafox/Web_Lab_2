package org.forafox.web_lab_2.entities;

import jakarta.servlet.http.HttpSession;

import java.util.ArrayList;
import java.util.List;

public class HttpSessionDotStore implements DotStore  {
    @Override
    public void add(Dot dot, HttpSession session) {
        var currentDots = getCollection(session);
        currentDots.add(dot);
        session.setAttribute("dots", currentDots);
    }

    @Override
    public void clear(HttpSession session) {
        var emptyList = new ArrayList<>();
        session.setAttribute("dots", emptyList);
    }

    @Override
    public List<Dot> getCollection(HttpSession session) {
        List<Dot> list = (List<Dot>) session.getAttribute("dots");
        if(list == null) {
            list = new ArrayList<>();
            session.setAttribute("dots", list);
        }
        return list;
    }

    @Override
    public Dot getLast(HttpSession session) {
        var list = getCollection(session);
        return list.get(list.size() - 1);
    }

    @Override
    public boolean isEmpty(HttpSession session) {
        return getCollection(session).isEmpty();
    }
}
