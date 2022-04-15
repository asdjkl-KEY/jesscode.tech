let canvas = document.querySelector("canvas");
let pincel = canvas.getContext('2d');
pincel.fillStyle = "#cdcdcd";
let pi = 3.14;
pincel.fillRect(0, 0, 600, 400);
desenhar = true;

function paint(event) {
    let x = event.pageX - canvas.offsetLeft;
    let y = event.pageY - canvas.offsetTop;

    console.log(x + "," + y);
    pincel.fillStyle = '#555';
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * pi);
    pincel.fill();
}
function ola (event) {
    if(desenhar == false) {
        desenhar = true;
    }
    canvas.addEventListener("mousemove", (event) => {
        desenha(event)
    })
}
function desenha(event) {
    canvas.addEventListener('mouseup', (event) => {
        desenhar = false;
    })
    if(desenhar == false) {
        return;
    } else {
        paint(event);
    }
}
canvas.onclick = ola;