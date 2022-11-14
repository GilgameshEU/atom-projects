var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg"
//bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

//cvs.appendChild(bg);
var gap=90;


function draw(){
  ctx.drawImage(bg,0,0);
  ctx.drawImage(pipeUp,100,0);
  ctx.drawImage(pipeBottom,100,0+pipe.height+gap);
}


draw();



// pipeBottom.onLoad=draw();
