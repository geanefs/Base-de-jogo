var pc
var ground;
function setup(){
createCanvas(1800,570)

pc = createSprite(50,500,50,50)

ground = createSprite(0,560,width,10)


}

function draw(){
background('black')

if(keyDown('space'))
{
    pc.velocityY = -20;
}

pc.velocityY = pc.velocityY +0.8  

pc.collide(ground)

drawSprites()
}