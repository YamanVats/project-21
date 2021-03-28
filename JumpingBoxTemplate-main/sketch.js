var canvas;
var music;
var rect1,rect2,rect3,rect4;
var dice;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(400,400);
    
    //create 4 different surfaces
    rect1=createSprite(50,400,100,20);
    rect2=createSprite(150,400,100,20);
    rect3=createSprite(250,400,100,20);
    rect4=createSprite(350,400,100,20);
    rect1.shapeColor="gold";
    rect2.shapeColor="blue";
    rect3.shapeColor="green";
    rect4.shapeColor="red";

    //create box sprite and give velocity
    dice=createSprite(50,50,20,20);
    dice.shapeColor="white";
    dice.velocityY=-2; 
}

function draw() {
    background("grey");
    //create edgeSprite
   edges=createEdgeSprites();
   dice.bounceOff(edges);
    

    //add condition to check if box touching surface and make it box
    if(rect1.isTouching(dice)&&dice.bounceoff(rect1)){
        dice.shapeColor="gold"
    }
    if(rect2.isTouching(dice)&&dice.bounceoff(rect2)){
        dice.shapeColor="blue"
    }
    if(rect3.isTouching(dice)&&dice.bounceoff(rect3)){
        dice.shapeColor="green"
    }
    if(rect4.isTouching(dice)&&dice.bounceoff(rect4)){
        dice.shapeColor="red"
    }
    drawSprites();
}
