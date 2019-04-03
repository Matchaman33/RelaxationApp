var canvas = document.getElementById("slinky");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var ctx = canvas.getContext("2d");


// Ball method
function drawBall(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    var coloring;
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = coloring;
        ctx.fill();
        ctx.closePath();
    }

    this.update = function () {



        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }

        this.draw(); //function call inside of function!!


        //randomize rgb color value
        // and opacity changer
        function random_rgba() {
            var color1 = Math.round, r = Math.random, s = 255;
            return 'rgba(' + color1(r() * s) + ',' + color1(r() * s) + ',' + color1(r() * s) + ',' + r().toFixed(1) + ')';
        }

        var colorMe = random_rgba();


        //if the ball hits the wall, change colors
        if (this.x == 50 || this.x == 1230 || this.y == 670 || this.y == 50) {
            coloring = colorMe;
        }

        //how to find when the ball hits the wall

        // console.log(this.x);
        // max is 1230
        //min is 50



        //console.log(this.y);
        //max is 670
        //min is 50

        this.x += this.dx;
        this.y += this.dy;

    }
}

var Ball1 = new drawBall(200, 100, 5, 5, 50);

//end of ball1


//animate
function animate() {
    requestAnimationFrame(animate);
    //ctx.clearRect(0, 0, innerWidth, innerHeight);
    Ball1.update();

    ctx.stroke();

}

animate();
//end animate
