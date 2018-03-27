var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var flappy = new Image();
var back = new Image();

function Bird() {

    this.x = 30;
    this.y = canvas.height/2;
    this.width = 85;
    this.height = 70;
    this.gravity = 0.3;
    this.dy = 1;



    this.draw = function() {
        flappy.src = "flappy.png";
        back.src = "back.png";
        
        c.drawImage(back,0,0,canvas.width,canvas.height);
        c.drawImage(flappy,this.x,this.y,this.width,this.height);

        
        
    }

    this.update = function() {

        if(this.y +this.height>= canvas.height){
            this.y = canvas.height - this.height;
            this.dy = 0;
        }
        else if(this.y <= 0 ) {
            this.y = 0;
            this.dy = 0;
        }

        this.dy += this.gravity;
        
        this.y += this.dy;



    }
}
