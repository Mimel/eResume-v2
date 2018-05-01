(function() {
    var canvas = document.getElementById("header");
    var ctxt = canvas.getContext("2d");
    var lights = new Array(20);
    var canvasWidth = window.innerWidth;

    class strobe {
        constructor(x_center, y_center, x_size, y_size, h, s, l) {
            this.x_center = x_center;
            this.y_center = y_center;
            this.x = x_center - (x_size / 2);
            this.y = y_center - (y_size / 2);
            this.x_length = x_size;
            this.y_length = y_size;

            this.velocityDir_x = Math.random() * 2 - 1;
            this.velocityDir_y = Math.random() * 2 - 1;

            this.color0 = "hsla(" + h + "," + s + "%," + l + "%,0)";
            this.color1 = "hsla(" + h + "," + s + "%," + l + "%,1)"

            this.grad = ctxt.createRadialGradient(x_center, y_center, x_size / 2,
                                                  x_center, y_center, 0);
            this.grad.addColorStop(0, this.color0);
            this.grad.addColorStop(1, this.color1);
        }

        resetGradient() {
            this.grad = ctxt.createRadialGradient(this.x_center, this.y_center, this.x_length / 2,
                                                  this.x_center, this.y_center, 0);
            this.grad.addColorStop(0, this.color0);
            this.grad.addColorStop(1, this.color1);
        }

        move() {
            if(this.x + this.x_length <= 0) {
                this.x_center += (canvasWidth + this.x_length);
                this.x += (canvasWidth + this.x_length);
            } else if(this.x >= canvasWidth) {
                this.x_center -= (canvasWidth + this.x_length);
                this.x -= (canvasWidth + this.x_length);
            } else {
                this.x_center += this.velocityDir_x;
                this.x += this.velocityDir_x;
            }

            if(this.y + this.y_length <= 0) {
                this.y_center += (100 + this.y_length);
                this.y += (100 + this.y_length);
            } else if(this.y >= 100) {
                this.y_center -= (100 + this.y_length);
                this.y -= (100 + this.y_length);
            } else {
                this.y_center += this.velocityDir_y;
                this.y += this.velocityDir_y;
            }
        }

        paint() {
            ctxt.fillStyle = this.grad;
            ctxt.fillRect(this.x, this.y, this.x_length, this.y_length);
        }
    }

    function resizeCanvas() {
        ctxt.canvas.width = window.innerWidth;
        canvas.setAttribute("height", "100px");
    }

    function draw() {
        ctxt.clearRect(0, 0, canvas.width, canvas.height);

        for(var i = 0; i < lights.length; i++) {
            lights[i].move();
            lights[i].resetGradient();
            lights[i].paint();
            ctxt.createRadialGradient(0, 0, 0, 0, 0, 0);
        }

        window.requestAnimationFrame(draw);
    }

    for(var i = 0; i < lights.length; i++) {
        lights[i] = new strobe(Math.random() * canvasWidth, Math.random() * 100, 900, 900, Math.random() * 20 + 190, 60, Math.random() * 20 + 40);
    }

    resizeCanvas();
    window.requestAnimationFrame(draw);
})();
