function random(min,max) {
	return Math.floor(Math.random()*(max -min +1) + min);
}

function Pipe(x,y,height) {
	this.x = x;
	this.y = y;
	this.width = 100;
	this.height = height;
	this.dx = 4;


	this.draw = function() {
		
		c.beginPath();
		c.fillRect(this.x,this.y,this.width,this.height);
		c.lineWidth = 5;
		c.fillStyle = "#63b523";
		c.strokeStyle = "#010101";
		c.lineCap = "butt";
		c.stroke();
		

	}

	this.update = function() {
		this.x += -this.dx;

		this.draw();
		
	}

	this.offScreen = function() {
		if(this.x < -this.width) {
			

			return true;
		} else {

			return false;
		}
	}

	this.hitsTop = function(bird) {
		if(bird.y < this.height) {
			if(bird.x + bird.width > this.x && bird.x < this.x + this.width) {
				return true;
			}
		}


		return false; 
	} 

	this.hitsBottom = function(bird) {
		if(bird.y + bird.height > canvas.height - this.height) {
			
			if(bird.x+bird.width -10> this.x && bird.x < this.x + this.width) {
				return true;
			}
		}

		return false; 
	}



	
}



var pipeTop = [];
var pipeBottom = [];

for(var i = 0; i < 100; i++) {
	var height = random(100,canvas.height/2);

	pipeTop.push(new Pipe(400+i*400, 0, height));

	pipeBottom.push(new Pipe(400+i*400, pipeTop[i].height + 180, canvas.height - (pipeTop[i].height +180) ));

}
