function updateValidationPanel(){
    let validationInfoPanel = document.querySelector('.validationInfo');
    validationInfoPanel.innerHTML = '';
    validationInfoPanel.classList.remove("show");
}

function addMessageToValidationPanel(message){
    let validationInfoPanel = document.querySelector('.validationInfo');
    validationInfoPanel.innerHTML += message + "<br>";
    validationInfoPanel.classList.add("show");
}


function getYValue(){
    return parseFloat(document.getElementById("Y").value);
}


function validateXValue(x){
    updateValidationPanel();
    let validationInfo = '';
    let isXCorrect = false;

    if (x != null && !isNaN(x)) {
        isXCorrect = true;
    } else validationInfo = "Выберите X!";

    addMessageToValidationPanel(validationInfo);
    return isXCorrect;
}

function validateRValue(r){
    updateValidationPanel();
    let validationInfo = '';
    let isRCorrect = false;

    if (r != null && !isNaN(r)) {
        isRCorrect = true;
    } else validationInfo = "Выберите R!";

    addMessageToValidationPanel(validationInfo);
    return isRCorrect;
}

function validateYValue(y){

    updateValidationPanel();
    let validationInfo = '';
    let isYCorrect = false;

    if (y != null && !isNaN(y)) {
        if ((y >= -5) && (y <= 5)) {
            isYCorrect = true;
        } else {
            validationInfo = "Y должен быть в интервале [-5..5]!";
        }
    } else validationInfo = "Введите Y!";

    addMessageToValidationPanel(validationInfo);
    return isYCorrect;
}