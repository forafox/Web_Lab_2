<%--
  Created by IntelliJ IDEA.
  User: Deskp
  Date: 18.09.2023
  Time: 23:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="author" content="Andrey Karabanov">
    <meta name="description" content="second lab work for web-programming">
    <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=0">

    <title>Lab №2</title>

    <link href='appearance/style.css' rel='stylesheet'>

    <%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>--%>

    <script src="js/validator.js"></script>
    <script src="js/updater.js"></script>
    <script src="js/clearTable.js"></script>
</head>
<body>
<div class="back-container">
    <div class="prev-result-container">
        <div id="back-button">
            <button class='pointer' id='prevResult' onClick="window.location.replace('index.jsp');" type="reset" onclick="">Назад</button>
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
                    <c:if test="${not empty dots.collection}">
                        <td>${dots.last.x.toString().format("%.2f", dots.last.x)}</td>
                        <td>${dots.last.y.toString().format("%.2f", dots.last.x)}</td>
                        <td>${dots.last.r.toString().format("%.2f", dots.last.r)}</td>
                        <td>${dots.last.time}</td>
                        <td>${dots.last.scriptTime}</td>
                        <td>${dots.last.status}</td>
                    </c:if>
                </tr>
            </table>
        </div>
    </div>
</div>
</body>
</html>