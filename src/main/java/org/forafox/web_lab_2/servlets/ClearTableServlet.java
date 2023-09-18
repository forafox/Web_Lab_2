package org.forafox.web_lab_2.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.forafox.web_lab_2.entities.DotCollectionManager;

import java.io.IOException;

@WebServlet(name= "ClearTableServlet",value = "/cleaner")
public class ClearTableServlet extends HttpServlet {
    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Object collection = getServletContext().getAttribute("dots");

        if(collection!= null){
            DotCollectionManager dotsCollection = (DotCollectionManager) collection;
            dotsCollection.clear();
            getServletContext().setAttribute("dots",dotsCollection);
        }
    }
}