var canvas;
var music;
var block1, block2, block3, block4;
var ball, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createsprite(0,580,360,30);
    block1.shapecolour = rgb(0,0,255);

    block2 = createsprite(295,580,200,30);
    block2.shapecolour = rgb(255,128,0);

    block3 = createsprite(515,580,200,30);
    block3.shapecolour = rgb(153,0,76);

    block4 = createsprite(740,580,220,30);
    block4.shapecolour = rgb(0,100,0);

    //create box sprite and give velocity
    ball = createsprite(random(20,750),100,40,40);
    ball.shapecolour = rgb(255,255,255);
    ball.velocityX = 3;
    ball.velocityY = 8;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceoff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceoff(block1)){
        ball.shapecolour = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapecolour = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceoff(block3)){
        ball.shapecolour = rgb(153,0,76);
    } 

    if(block4.isTouching(ball) && ball.bounceoff(block4)){
        ball.shapecolour = rgb(0,100,0);
    } 

    drawSprites();
}
