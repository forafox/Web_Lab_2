function getDataFromForm() {

    updateValidationPanel();

    if (validateXValue(getXValue()) && validateYValue(getYValue()) && validateRValue(getRValue())) {
        let x = getXValue();
        let y = getYValue();
        let r = getRValue();
        sendDataToServer(x, y, r);
    } else {
        console.log("something gone wrong! check values!");
    }
}

function sendDataToServer(x, y, r) {
    $.ajax({
        type: "GET",
        url: "controller-servlet",
        dataType: "json",
        async: false,
        data: {
            "x-value": x.toString().trim(), "y-value": y.toString().trim(), "r-value": r.toString().trim(),
            "timezone": new Date().getTimezoneOffset()
        },
        success: function () {
            window.location.replace('result.jsp');
        },
        error: function (xhr, textStatus, err) {
            alert("readyState: " + xhr.readyState + "\n" +
                "responseText: " + xhr.responseText + "\n" +
                "status: " + xhr.status + "\n" +
                "text status: " + textStatus + "\n" +
                "error: " + err);
        }
    });
}

function checkHaveResult(flag) {
    if (flag) {
        window.location.replace('result.jsp');
    } else {
        alert("Результатов нет!")
    }
}
