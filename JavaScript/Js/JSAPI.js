localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");


function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function getPositionResult(position) {
    console.log(position.coords.latitude + ' ' + position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);

function refreshPosition(position) {
    var list = document.getElementById('positionList');
    list.innerHtml += ('<li>' + position.coords.latitude + ' ' + position.coords.longitude + '</li>');
}
navigator.geolocation.watchPosition(refreshPosition);


var canvas = document.getElementById("demoCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#A9B0B3";
context.strokeStyle = "#746C73";
context.lineWidth = 5;

context.moveTo(0, 0);
context.lineTo(700, 350);
context.stroke();

context.beginPath();
context.arc(160, 80, 70, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.moveTo(650, 345);
context.lineTo(700, 350);
context.lineTo(665, 315);
context.stroke();

context.fillStyle = "#20293F";
context.strokeStyle = "#20293F";

context.font = "78px Segoe UI";
context.fillText("Hello", 190, 230);
context.strokeText("World", 190, 310);
Previou
