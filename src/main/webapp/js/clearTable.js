function clearTable() {
    $.ajax({
        type: "DELETE",
        url: "controller-servlet",
        async: false,
        success: function () {
            $('#results').html(`<tr>
                <th class="results">X</th>
                <th class="results">Y</th>
                <th class="results">R</th>
                <th class="results">Текущее время</th>
                <th class="results">Время работы программы (мкс)</th>
                <th class="results">Результат</th>
            </tr>`);
            $('.dot').remove();
            hasResults = false;
            currentList=0;
            updateList();
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