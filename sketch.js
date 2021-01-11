var canvas;
var music;
var ball;
var wall1;
var wall2;
var wall3;
var wall4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(770,600);

    //create 4 different surfaces
     wall1=createSprite(670,580,180,20);
     wall1.shapeColor=color("green");

     wall2=createSprite(480,580,180,20);
     wall2.shapeColor=color("red");

     wall3=createSprite(290,580,180,20);
     wall3.shapeColor=color("yellow");

     wall4=createSprite(100,580,180,20);
     wall4.shapeColor=color("blue");

    

     //create box sprite and give velocity
     
     ball=createSprite(380,50,25,25);
     ball.shapeColor=color("white");
     ball.velocityY=3;
     
    }

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     
    

    

    //add condition to check if box touching surface and make it box

  drawSprites();
}



















