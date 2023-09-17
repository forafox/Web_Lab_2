<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="author" content="Karabanov Andrey">
    <meta name="description" content="second lab work for web-programming">
    <title>Lab 2</title>

    <link href="./appearance/style.css" rel="stylesheet">
    <link href="appearance/style.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <%--<script  src="./js/clearTable.js"></script>--%>
    <%--<script  src="./js/validator.js"></script>--%>
    <%--<script  src="./js/updater.js"></script>--%>
    <%--<script  src="./js/managers/clickManager.js"></script>--%>
    <%--<script  src="./js/render/render.js"></script>--%>
    <%--<script  src="./js/music/playMusic.js"></script>--%>

</head>

<header>
    Карабанов Андрей Фёдорович, Р3115, Вариант 2510
</header>

<body onload="draw()">
<table id="main">
    <tr id>
        <th colspan=3>
            <h1>Welcome!</h1>
            <h1>Здесь можно проверить попадание точки на координаты</h1>
        </th>
    </tr>
    <tr id="info_header">
        <th width="30%" id="information">Информация:</th>
        <th width="40%" id="settings">Настройки:</th>
        <th width="30%" id="settings-area">Заданная область:</th>
    </tr>
    <tr>
        <td id="info" width="30%">
            <h3>Создатель:</h3>
            <ul>
                <li>Карабанов Андрей Фёдорович</li>
                <li>Группа 3215</li>
                <li>Вариант 2510</li>
            </ul>
            <h3>Правила использования</h3>
            <ol>
                <li>Введите значение параметра R.</li>
                <li>Введите коордиты точки. </li>
                <li>Дождитесь ответа. </li>
            </ol>
            <h3>Ссылки</h3>
            <ul>
                <li><a class="pointer" href="https://github.com/forafox/Web_Lab_1">Исходный код</a></li>
            </ul>
        </td>
        <td id="data" width="40%">

            <div>
                <label for='y'>
                    Введите Y: значение из интервала(-5; 5):
                </label>
                <br>
                <input class='y-text' id='y' name='y' type='text' maxlength='14' oninput='validateTextField()' required>
            </div>

            <div>
                <label for='X'>Выберите X:</label>
                <div>
                    <button type="button" class="btn" value="-4" >-4</button>
                    <button type="button" class="btn" value="-3">-3</button>
                    <button type="button" class="btn" value="-2">-2</button>
                    <button type="button" class="btn" value="-1">-1</button>
                    <button type="button" class="btn" value="0">0</button>
                    <button type="button" class="btn" value="1">1</button>
                    <button type="button" class="btn" value="2">2</button>
                    <button type="button" class="btn" value="3">3</button>
                    <button type="button" class="btn"value="4" >4</button>
                </div>
            </div>


            <div>
                <label for='R'>Выберите R:</label>
                <div>
                    <button type="button" class="btn" value="1" >1</button>
                    <button type="button" class="btn" value="2">2</button>
                    <button type="button" class="btn" value="3">3</button>
                    <button type="button" class="btn" value="4">4</button>
                    <button type="button" class="btn" value="5">5</button>
                </div>
            </div>

            <div id="validation-info" class="validationInfo"></div>
            <label for='check'>
                Для того, чтобы провреить попадание заданной точки, нажмите кнопку ниже
            </label>
        </td>



        <td id="area" width="30%">
            <section id="coordinate-system">
                <div class="canvas-form">
                    <canvas id="canvas"></canvas>
                </div>
            </section>
        </td>
    </tr>
    <tr>
        <td  colspan="3">
            <form method="POST" novalidate onsubmit="update(); return false">
                <input class='pointer' id="check" name="check" type="submit" value="Проверить">
                <input class='pointer' id='clear' type='button' value='Очистить таблицу' onclick='clearTable()'>
            </form>
        </td>
    </tr>
    <tr>
        <td colspan=3>
            <table id="results">
                <tr id="heads">
                    <th width="10%">X</th>
                    <th width="10%">Y</th>
                    <th width="10%">R</th>
                    <th width="20%">Текущее время</th>
                    <th width="30%">Время работы скрипта</th>
                    <th width="40%">Результат</th>
                </tr>
            </table>
        </td>
    </tr>

</table>

</table>
</table>
</body>



</html>