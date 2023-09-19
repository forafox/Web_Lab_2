package org.forafox.web_lab_2.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.forafox.web_lab_2.entities.DotStore;
import org.forafox.web_lab_2.entities.HttpSessionDotStore;

import java.io.IOException;

@WebServlet(name= "ClearTableServlet",value = "/cleaner")
public class ClearTableServlet extends HttpServlet {
    private DotStore store = new HttpSessionDotStore();
    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Object collection = getServletContext().getAttribute("dots");

        if(collection!= null){
            HttpSession session = req.getSession();
            store.clear(session);
            getServletContext().setAttribute("dots", store.getCollection(session));
        }
    }
}