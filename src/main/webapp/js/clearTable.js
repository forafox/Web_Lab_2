function clearTable() {
    $.ajax({
        type: "DELETE",
        url: "controller-servlet",
        async: false,
        success: function () {
            $('#results').html(`<tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Текущее время</th>
                <th>Время работы программы (мкс)</th>
                <th>Результат</th>
            </tr>`);
            $('.dot').remove();
        },
        error: function (xhr, textStatus, err) {
            alert("readyState: " + xhr.readyState + "\n" +
                "responseText: " + xhr.responseText + "\n" +
                "status: " + xhr.status + "\n" +
                "text status: " + textStatus + "\n" +
                "error: " + err);
        }
    })
}