let selectedR = null;
let selectedX = null

$('.btn-x').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    selectedX = $(this).attr("value");
})

$('.btn-r').on('click',function () {
    $(this).addClass('active').siblings().removeClass('active');
    selectedR = $(this).attr("value");
})

function getRValue(){
    return selectedR;
}

function getXValue(){
    return selectedX;
}