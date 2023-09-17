let selectedR = null;
let selectedX = null


console.log("START CLICK MANAGER")

$('.btn-x').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    selectedX = $(this).attr("value");
    console.log(selectedX);
})

$('.btn-r').on('click',function () {
    $(this).addClass('active').siblings().removeClass('active');
    selectedR = $(this).attr("value");
    console.log(selectedR);
})

function getRValue(){
    return selectedR;
}

function getXValue(){
    return selectedX;
}