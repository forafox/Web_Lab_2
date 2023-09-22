const canvas = document.getElementById("canvas");
let defaultR=5;
let currentList;

// function draw(r, pointxVal, pointyVal, flag) {
//     if (canvas.getContext) {
//         const ctx = canvas.getContext("2d");
//         const size = 300;
//         canvas.setAttribute("width", size.toString());
//         canvas.setAttribute("height", size.toString());
//         if (r === undefined) {
//             r = defaultR;
//         }
//
//         drawPolygon(ctx, size, r);
//         drawAxes(ctx, size);
//         drawText(ctx, size, r);
//
//         if (pointxVal && pointyVal) {
//             drawPoint(ctx, size, pointxVal, pointyVal, flag)
//             document.dispatchEvent(createMusicEvent());
//         }
//
//     } else {
//         alert("Canvas - unsupport");
//         //canvas-unsupported code
//     }
// }
function drawPolygon(ctx, size, r) {
    console.log("In drawPolygon")
    let totalPoints = 12;
    let pointInPixels = size / totalPoints;
    //draw rect
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.fillRect(size / 2, size / 2, r * pointInPixels / 2, -r * pointInPixels);
    //draw triangle
    ctx.beginPath();
    ctx.moveTo((size / 2), size / 2);
    ctx.lineTo(size / 2 + r * pointInPixels/2, size / 2);
    ctx.lineTo(size / 2, size / 2 + r * pointInPixels);
    ctx.fill();
    //draw circle
    ctx.beginPath();
    ctx.moveTo(size / 2, size / 2);
    ctx.arc(size / 2, size / 2, r * pointInPixels, Math.PI,  1/2* Math.PI , Math.PI);
    ctx.fill()
}
//Прорисовка осей координат
function drawAxes(ctx, size) {
    console.log("In drawAxes")
    ctx.fillStyle = "black";
    ctx.fillRect(0, size / 2, size, 1);
    ctx.fillRect(size / 2, 0, 1, size);
}

//Подписи для осей
function drawText(ctx, size, r) {
    console.log("In drawText")
    let totalPoints = 12;
    let pointInPixels = size / totalPoints;
    ctx.fillStyle = "black";
    ctx.font = "15px serif";
    //право
    ctx.fillText("R", size / 2 + r * pointInPixels, size / 2);
    ctx.fillText("R/2", size / 2 + r * pointInPixels / 2, size / 2);
    //низ
    ctx.fillText("R", size / 2, size / 2 + r * pointInPixels);
    ctx.fillText("R/2", size / 2, size / 2 + r * pointInPixels / 2);
    //верх
    ctx.fillText("R", size / 2, size / 2 - (r * pointInPixels));
    ctx.fillText("R/2", size / 2, size / 2 - (r * pointInPixels / 2));
    //Лево
    ctx.fillText("R/2", size / 2 - (r * pointInPixels / 2), size / 2);
    ctx.fillText("R", size / 2 - r * pointInPixels, size / 2);

}

function drawPoint(ctx, size, xVal, yVal, flag){
    console.log("In drawPoint")
    if (flag === 'Hit!') {
        ctx.fillStyle = "Blue";
    }else if(flag==="timePoint"){
        ctx.fillStyle="green";
    }
    else {
        ctx.fillStyle = "red";
    }
    let totalPoints = 12;
    let pointInPixels = size / totalPoints
    ctx.beginPath()
    ctx.arc(size / 2 + pointInPixels * xVal, size / 2 - yVal * pointInPixels, 5, 0, Math.PI * 2)
    ctx.fill();
    return true;
}

// function createMusicEvent(){
//     let event = new MouseEvent("playMusic", {
//     });
//     event.flag = `${flag}`;
//     return event;
// }
function updateList(){
    drawWithList(currentList);
}
function drawWithList(list) {
    currentList = list;
    console.log("R", getRValue());
    if (canvas.getContext) {
        // const r=5;
        const size = 300;

        let r = getRValue();

        const ctx = canvas.getContext("2d");
        canvas.setAttribute("width", size.toString());
        canvas.setAttribute("height", size.toString());

        if (r === undefined || r === 0 || r === null) {
            r = defaultR;
        }

        drawPolygon(ctx, size, r);
        drawAxes(ctx, size);
        drawText(ctx, size, r);
        if (list !== 0 && list !== null && list !== undefined) {
            if (list.length >= 5) {
                list = list.slice(-5, list.length);
            }
            list.forEach((dot) => {
                console.log(dot.x, dot.y)
                drawPoint(ctx, size, dot.x, dot.y, dot.status)
                // document.dispatchEvent(createMusicEvent());
            });

        }
    }else {
            alert("Canvas - unsupport");
            //canvas-unsupported code
        }
}

canvas.addEventListener("click",(e) =>{
    let finalX=0;
    let finalY=0;
    let elementRelativeX = e.offsetX;
    let elementRelativeY = e.offsetY;
    let canvasRelativeX = elementRelativeX * canvas.width/canvas.clientWidth;
    let canvasRelativeY = elementRelativeY *canvas.height/canvas.clientHeight;
    if(canvasRelativeY<=150){
        finalY=Math.round(defaultR-(canvasRelativeY-25)/25);
    }else{
        finalY=(-(Math.round((canvasRelativeY-150)/25)))
    }
    if(canvasRelativeX<=150){
        finalX=(-(Math.round(defaultR-(canvasRelativeX-40)/22)))
    }else{
        finalX=Math.round((canvasRelativeX-150)/22);
    }
    if(getDataFromFormAndClick(finalX,finalY)){
        console.log("Точка успешно поставлена!")
    }else{
        console.log("Точка не поставлена");
    }

})
