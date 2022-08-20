
var tryit = document.getElementById("btntryit");
var demodisplay = document.getElementById("demo");

tryit.addEventListener("click", clickeed);
tryit.addEventListener("mouseover", mouseovered);
tryit.addEventListener("mouseout", mouseouted);

function clickeed(){
    demodisplay.innerHTML = `Clicked !`;
}

function mouseovered(){
    demodisplay.innerHTML = `   Mouse over !`;
}

function mouseouted(){
    demodisplay.innerHTML = `Mouse out !`;
}


