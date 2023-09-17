package org.forafox.web_lab_2.servlets;

import org.forafox.web_lab_2.entities.Dot;
import org.forafox.web_lab_2.entities.DotCollectionManager;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import static java.time.temporal.ChronoUnit.MINUTES;

@WebServlet(name= "area-check-servlet", value = "/area-check-servlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter printWriter =resp.getWriter();
        long timer = System.nanoTime();
        try{
            float x= Float.parseFloat(req.getParameter("x-value"));
            float y= Float.parseFloat(req.getParameter("y-value"));
            float r= Float.parseFloat(req.getParameter("r-value"));
            log("X: "+x);
            log("Y: "+ y);
            log("R: "+ r);

            String status=isHit(x,y,r);

            int timeZone= Integer.parseInt(req.getParameter("timezone"));
            DateTimeFormatter formatter =DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
            String currentTime = formatter.format(LocalDateTime.now().plus(timeZone, MINUTES));
            long scriptTime = (long) ((System.nanoTime()-timer)*0.001);

            //
            Object collection = getServletContext().getAttribute("dots");

            if (collection == null){
                collection = new DotCollectionManager();
            }

            DotCollectionManager dotsCollection = (DotCollectionManager)collection;

            Dot newDot = new Dot(x, y, r, currentTime, scriptTime, status);
            dotsCollection.add(newDot);
            log("Shot successfully added");

            getServletContext().setAttribute("dots", dotsCollection);

            String responseBody = newDot.toJSON();
            resp.setContentType("application/json");
            resp.setCharacterEncoding("UTF-8");
            printWriter.write(responseBody);
            printWriter.flush();
        } catch (NumberFormatException e) {
           //ignore code
        }
    }


    private String isHit(double x,double y,double r){
        return (isCircleZone(x,y,r) || isTriangleZone(x,y,r) || isRectangleZone(x,y,r)) ?  "Попадание!" : "Промах!";
    }

    private boolean isRectangleZone(double x,double y,double r){
        return true;
    }
    private boolean isCircleZone(double x,double y,double r){
        return true;
    }
    private boolean isTriangleZone(double x,double y,double r){
        return true;
    }
}
