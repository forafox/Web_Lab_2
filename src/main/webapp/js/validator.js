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
        if ((x > -3) && (x < 5)) {
            isXCorrect = true;
        } else {
            validationInfo = "X должен быть в интервале (-3..5)!";
        }
    } else validationInfo = "Введите X!";

    addMessageToValidationPanel(validationInfo);
    return isXCorrect;
}

function validateYValue(y){
    updateValidationPanel();
    let validationInfo = '';
    let isYCorrect = false;

    if (y != null && !isNaN(y)) {
        isYCorrect = true;
    } else validationInfo = "Выберите Y!";

    addMessageToValidationPanel(validationInfo);
    return isYCorrect;
}

function validateRValue(r){

    updateValidationPanel();
    let validationInfo = '';
    let isRCorrect = false;

    if (r != null && !isNaN(r)) {
        if ((r > 2) && (r < 5)) {
            isRCorrect = true;
        } else {
            validationInfo = "R должен быть в интервале (2..5)!";
        }
    } else validationInfo = "Введите R!";

    addMessageToValidationPanel(validationInfo);
    return isRCorrect;
}