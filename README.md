# Лабораторная работа №2 по Веб-программированию

[С лаборатороной работой нельзя ознакомиться туть]()

         Red point         |  Blue point
|:-------------------------:|:-------------------------:|
![]()           | ![]()
## Содержание проекта

Разработано веб-приложение на базе сервлетов и JSP, определяющее попадание точки на координатной плоскости в заданную область.

Приложение реализовано в соответствии с шаблоном MVC и состоит из следующих элементов:

**ControllerServlet**, определяющий тип запроса, и, в зависимости от того, содержит ли запрос информацию о координатах точки и радиусе, делегирующий его обработку одному из перечисленных ниже компонентов. Все запросы внутри приложения передаются этому сервлету по методу POST, остальные сервлеты с веб-страниц напрямую не вызываются.

**AreaCheckServlet**, осуществляющий проверку попадания точки в область на координатной плоскости и формирующий HTML-страницу с результатами проверки. Обрабатывает все запросы, содержащие сведения о координатах точки и радиусе области.

**Страница JSP**, формирующая HTML-страницу с веб-формой. Обрабатывает все запросы, не содержащие сведений о координатах точки и радиусе области.

## Разработанная страница JSP содержит:

- Форму, отправляющую данные на сервер.
- Набор полей для задания координат точки и радиуса области.
- Сценарий на языке JavaScript, осуществляющий валидацию значений, вводимых пользователем в поля формы.
- Интерактивный элемент, содержащий изображение области на координатной плоскости и реализующий следующую функциональность:
    - Если радиус области установлен, клик курсором мыши по изображению обрабатвыается JavaScript-функцией, определяющей координаты точки, по которой кликнул пользователь и отправляющей полученные координаты на сервер для проверки факта попадания.
    - В противном случае, после клика по картинке выводится сообщение о невозможности определения координат точки.
    - После проверки факта попадания точки в область изображение обновляется с учётом результатов этой проверки (т.е., на нём должна появиться новая точка).
- Таблицу с результатами предыдущих проверок. Список результатов берется из контекста приложения.
## Область из ТЗ
![]()
## Ключевые особенности
- График динамически меняется в зависимости от выбранного радиуса
- Разработанное веб-приложение развернуто на сервере WildFly. Сервер должен быть запущен в standalone-конфигурации.
