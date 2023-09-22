package org.forafox.web_lab_2.servlets;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.forafox.web_lab_2.entities.Dot;
import org.forafox.web_lab_2.entities.DotStore;
import org.forafox.web_lab_2.entities.HttpSessionDotStore;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static java.time.temporal.ChronoUnit.MINUTES;

@WebServlet(name = "area-check-servlet", value = "/area-check-servlet")
public class AreaCheckServlet extends HttpServlet {
    private final DotStore store = new HttpSessionDotStore();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)  throws IOException {
        long timer = System.nanoTime();
        try {
            float x = Float.parseFloat(req.getParameter("x-value"));
            float y = Float.parseFloat(req.getParameter("y-value"));
            float r = Float.parseFloat(req.getParameter("r-value"));
            log("X: " + x);
            log("Y: " + y);
            log("R: " + r);

            if(validationOnArea(x,y,r)){
                createResult(req,resp,timer,x,y,r);
            }else{
                log("data is incorrect");
            }
        } catch (NumberFormatException e) {
            log("NumberFormatException");
        }
    }

    private void createResult(HttpServletRequest req,HttpServletResponse resp,long timer,float x,float y,float r) throws IOException {
        HttpSession session = req.getSession();
        PrintWriter printWriter = resp.getWriter();
        String status = isHit(x, y, r);

        int timeZone = Integer.parseInt(req.getParameter("timezone"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String currentTime = formatter.format(LocalDateTime.now().plus(timeZone, MINUTES));
        long scriptTime = (long) ((System.nanoTime() - timer) * 0.001);

        Object collection = getServletContext().getAttribute("dots");

        Dot newDot = new Dot(x, y, r, currentTime, scriptTime, status);
        store.add(newDot, session);
        log("Shot successfully added");

        List<Dot> dots = store.getCollection(session);
        getServletContext().setAttribute("dots", dots);

        String responseBody = newDot.toJSON();
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        printWriter.write(responseBody);
        printWriter.flush();
    }


    private boolean validationOnArea(double x,double y,double r){
        return ((x>=-5 && x<=5) && (y>=-5 && y<=5) && (r>=1 && r<=5));
    }
    private String isHit(double x, double y, double r) {
        return (isCircleZone(x, y, r) || isTriangleZone(x, y, r) || isRectangleZone(x, y, r)) ? "Hit!" : "Miss!";
    }

    private boolean isRectangleZone(double x, double y, double r) {
        return (x >= 0) && (x <= r / 2) && (y >= 0) && (y <= r);
    }

    private boolean isCircleZone(double x, double y, double r) {
        System.out.println(String.format(""));
        return (x * x + y * y <= r * r) && (x <= 0) && (y <= 0);
    }

    private boolean isTriangleZone(double x, double y, double r) {
        double a1 = (r/2 - x) * (-r - 0) - (0 - r/2) * (0 - y);
        double a2 = (0 - x) * (0 + r) - (0 - 0) * (-r - y);
        double a3 = (0 - x) * (0 - 0) - (r - 0) * (0 - y);
        return ((x>=0) && (y<=0) && (a1 >= 0 && a2 >= 0 && a3 >= 0) || (a1 <= 0 && a2 <= 0 && a3 <= 0));
    }
}