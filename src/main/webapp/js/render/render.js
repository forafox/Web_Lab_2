const canvas = document.getElementById("canvas");
let defaultR=5;

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
    } else {
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

function drawWithList(list){
    console.log("In drawWithList")
    const r=5;
    const size = 300;
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        canvas.setAttribute("width", size.toString());
        canvas.setAttribute("height", size.toString());

        drawPolygon(ctx, size, r);
        drawAxes(ctx, size);
        drawText(ctx, size, r);

        if(list.length>=5){
            list=list.slice(-5,list.length);
        }
        list.forEach((dot) => {
            console.log(dot.x,dot.y)
                drawPoint(ctx, size, dot.x, dot.y, dot.status)
                // document.dispatchEvent(createMusicEvent());
        });

    } else {
        alert("Canvas - unsupport");
        //canvas-unsupported code
    }
}

canvas.addEventListener("click",(e) =>{
    let elementRelativeX = e.offsetX;
    let elementRelativeY = e.offsetY;
    let canvasRelativeX = elementRelativeX * canvas.width/canvas.clientWidth;
    let canvasRelativeY = elementRelativeY *canvas.height/canvas.clientHeight;
    if(canvasRelativeY<=150){
        console.log("y",Math.round(5-(canvasRelativeY-25)/25));
    }else{
        console.log('y',-(Math.round((canvasRelativeY-150)/25)));
    }
    if(canvasRelativeX<=150){
        console.log('x',-(Math.round(5-(canvasRelativeX-40)/22)));
    }else{
        console.log('x',Math.round(canvasRelativeX-150)/22);
    }
})