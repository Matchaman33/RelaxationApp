alert("Welcome");


canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var d = canvas.getContext("2d");




function Circle(x, y, dx, dy, radius) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        d.beginPath();
        d.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);



        if (x > 500) {
            d.fillStyle = "blue";
            d.fill();
        } else {
            d.fillStyle = "orange";
            d.fill();
        }

        if (y > 500) {
            d.fillStyle = "purple";
            d.fill();
        }

        d.stroke();
    }

    this.update = function () {

        this.draw();

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }



        //random color
        function random_rgba() {
            var color1 = Math.round, r = Math.random, s = 255;
            return 'rgba(' + color1(r() * s) + ',' + color1(r() * s) + ',' + color1(r() * s) + ',' + r().toFixed(1) + ')';
        }

        var colorMe = random_rgba();


        if (this.x == 50) {
            var coloring = colorMe;
        }

        if (this.x == 1230) {
            coloring = colorMe;
        }



        this.x += this.dx;
        this.y += this.dy;


    }
}


var circleArray = [];

for (var i = 0; i < 1000; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius - 10));



}





function animate() {

    requestAnimationFrame(animate);
    d.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
