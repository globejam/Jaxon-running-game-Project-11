//create varibles 
var jaxon,jaxonImage;
var path,pathImage;
var coin,coinImage;
var energyDrink,energyDrinkImage;
var score;


function preload(){
  //pre-load images
  jaxonImage = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
  coinImage = loadImage("coin.png");
  energyDrinkImage = loadImage("energyDrink.png");
}

function setup(){
  //create the Canvas
  createCanvas(400,500);
  //create edges
   edge = createEdgeSprites();
  //create sprites here
  path = createSprite(200,500);
  path.addImage(pathImage);
  path.velocityY = 5;
  path.scale = 1.4;
  jaxon = createSprite(200,450);
  jaxon.addAnimation("running",jaxonImage);
  jaxon.scale = 0.05; 
  coin = createSprite(100,150);
  coin.addImage(coinImage);
  coin.scale = 0.3;
  energyDrink = createSprite(200,350);
  energyDrink.addImage(energyDrinkImage)
  energyDrink.scale = 0.1;
  //Set the initial score
  score = 0;
}

function draw() {
  background("red");
  //infinite effect
  if(path.y > 600){
  path.y = height/2;
   }
//calling Functions
movePlayer();
randomPowerUpPostion();
console.log(score);
//draw the Sprites
drawSprites();
//display the score
fill("red");
textSize(30);
text("score: "+score,250,40);
}

//DEFFING FUNCTIONS
//player movment
function movePlayer(){
  jaxon.x = mouseX;
  jaxon.y = mouseY;
  jaxon.collide(edge);
  
}
//Place coin and energy drink at a random postion
function randomPowerUpPostion(){
  if(jaxon.isTouching(coin)){
    coin.x = random(20,350);
    coin.y = random(20,350);
    score = score+2;
  }
  if(jaxon.isTouching(energyDrink)){
    energyDrink.x = random(20,350);
    energyDrink.y = random(20,350);
    score = score+4;
  }
}