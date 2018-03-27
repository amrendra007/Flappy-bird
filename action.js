var bird = new Bird();
bird.draw();
var flag = 1;

var update = document.querySelector("div");
var currentScore = document.querySelector("h2");
var final = document.querySelector("div p");
var score = 0;



var myReq;

function setControl(e) {
	update.style.display = "none";
	if(e.keyCode) {
		bird.dy = -7;
	}

}


window.addEventListener("keydown",setControl);

        
function animate() {
	myReq = requestAnimationFrame(animate);
	c.clearRect(0,0,canvas.width,canvas.height);
	bird.draw();
    bird.update();

    for(var j = pipeBottom.length-1; j >=0 ; j--) {
    	pipeTop[j].update();
    	pipeBottom[j].update();

    	if(pipeTop[j].hitsTop(bird)) {
    		resetGame();
    	}

    	if(pipeBottom[j].hitsBottom(bird)) {
    		resetGame();
    		
    	} 

        

        if(pipeTop[j].offScreen()) {
    		pipeTop.splice(j,1);
            score += 1;
            currentScore.textContent = "SCORE: "+score;
    	}

    	if(pipeBottom[j].offScreen()) {
    		pipeBottom.splice(j,1);
    	}
    }



   

}

function initGame() {
    if(flag === 1) {
        animate();
        flag = 2;
    }
}

window.addEventListener("keydown",initGame);


function resetGame() {
    
	window.cancelAnimationFrame(myReq);
    window.removeEventListener("keydown",setControl);
    window.removeEventListener("keydown",initGame);
    flag = 1;
    update.style.backgroundImage = "none";
    update.style.display = "block";
    final.textContent = "Your score :" +score;
    final.style.color = "blue";
    
    var el = document.createElement("input");
    el.type = "button";
    el.value = "Restart Game";
    el.style.padding = "10px "+"15px";
    el.style.fontSize = "40%";
    update.appendChild(el);

    el.onclick = function(){
        location.reload();
        
    }

	
}