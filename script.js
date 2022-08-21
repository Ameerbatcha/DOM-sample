
var tryit = document.getElementById("btntryit");
var demodisplay = document.getElementById("demo");

tryit.addEventListener("click", clickeed);
tryit.addEventListener("mouseover", mouseovered);
tryit.addEventListener("mouseout", mouseouted);

function clickeed() {
    demodisplay.innerHTML += `Clicked ! <br> `;
}

function mouseovered() {
    demodisplay.innerHTML += `   Mouse over ! <br>`;
}

function mouseouted() {
    demodisplay.innerHTML += `Mouse out ! <br>`;
}


