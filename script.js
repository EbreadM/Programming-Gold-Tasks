function mouseOver() {
    alert('bello');
}

addEventListener("DOMContentLoaded", function() {
    var minionimg = document.getElementById("minion");
    minionimg.addEventListener("mouseover", mouseOver);

});
