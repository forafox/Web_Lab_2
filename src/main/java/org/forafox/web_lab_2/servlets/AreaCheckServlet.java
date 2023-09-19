package org.forafox.web_lab_2.servlets;

import jakarta.servlet.ServletException;
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
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter printWriter = resp.getWriter();
        long timer = System.nanoTime();
        HttpSession session = req.getSession();
        try {
            float x = Float.parseFloat(req.getParameter("x-value"));
            float y = Float.parseFloat(req.getParameter("y-value"));
            float r = Float.parseFloat(req.getParameter("r-value"));
            log("X: " + x);
            log("Y: " + y);
            log("R: " + r);

            String status = isHit(x, y, r);

            int timeZone = Integer.parseInt(req.getParameter("timezone"));
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
            String currentTime = formatter.format(LocalDateTime.now().plus(timeZone, MINUTES));
            long scriptTime = (long) ((System.nanoTime() - timer) * 0.001);

            //
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
        } catch (NumberFormatException e) {
            //ignore code
        }
    }


    private String isHit(double x, double y, double r) {
        return (isCircleZone(x, y, r) || isTriangleZone(x, y, r) || isRectangleZone(x, y, r)) ? "Hit!" : "Miss!";
    }

    private boolean isRectangleZone(double x, double y, double r) {
        return (x >= 0) && (x <= r / 2) && (y >= 0) && (y <= r);
    }

    private boolean isCircleZone(double x, double y, double r) {
        return (x * x + y * y <= r / 2 * r / 2) && (x <= 0) && (y <= 0);
    }

    private boolean isTriangleZone(double x, double y, double r) {
        return (x >= 0) && (y <= 0) && (true);
    }
}