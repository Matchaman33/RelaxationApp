

var div = document.getElementById("colorChanger");

div.style.height = "700px";
document.body.appendChild(div);

div.addEventListener("mousemove", function (event) {
    console.log(event);
    var x = event.clientX;
    var y = event.clientY;
    div.textContent = x + ", " + y;
    div.style.backgroundColor = 'rgb(' + x + ', ' + y + ' , 100)';

});

