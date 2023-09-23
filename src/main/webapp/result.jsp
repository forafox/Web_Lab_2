<%@ page import="org.forafox.web_lab_2.entities.DotStore" %>
<%@ page import="org.forafox.web_lab_2.entities.HttpSessionDotStore" %>
<%@ page import="org.forafox.web_lab_2.entities.Dot" %>
<%@ page import="java.util.List" %>
<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%
    DotStore store = new HttpSessionDotStore();
    Dot lastDot = store.getLast(session);
%>

<html>
<head>
    <meta charset="utf-8">
    <meta name="author" content="Andrey Karabanov">
    <meta name="description" content="second lab work for web-programming">
    <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0">

    <title>Lab №2</title>

    <link href='appearance/style.css' rel='stylesheet'>

    <script src="js/validator.js"></script>
    <script src="js/updater.js"></script>
    <script src="js/clearTable.js"></script>
</head>
<body>
<div class="back-container">
    <div class="prev-result-container">
        <div id="back-button">
            <button class='pointer' id='prevResult' onClick="window.location.replace('index.jsp');" type="reset"
                    onclick="">Назад
            </button>
        </div>
        <div id="prev-result-table">
            <table id="results">
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Текущее время</th>
                    <th>Время работы программы (мкс)</th>
                    <th>Результат</th>
                </tr>
                <tr>
                    <%
                        out.println(String.format("<td> %.2f </td>", lastDot.x()));
                        out.println(String.format("<td>%.2f</td>", lastDot.y()));
                        out.println(String.format("<td>%.2f</td>", lastDot.r()));
                        out.println(String.format("<td>%s</td>", lastDot.time()));
                        out.println(String.format("<td>%s</td>", lastDot.scriptTime()));
                        out.println(String.format("<td>%s</td>", lastDot.status()));
                    %>
                </tr>
            </table>
        </div>
    </div>
</div>
</body>

<script src="./js/render/render.js"></script>
</html>