
var monkey , monkey_running
var banana ,bananaImage, obstaclesGroup, obstacleImage;
var bananasGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(110,466,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(310,500,600,10);

  
  obstaclesGroup = new Group();
  bananasGroup = new Group();
}


function draw() {
  background("lightblue");
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -18;
    
  }
  
   monkey.velocityY = monkey.velocityY + 0.8;
  
 
  
  ground.velocityX = -4;
  
    if (ground.x < 300){
      ground.x = ground.width/2;
    
    }
  
 
  if(monkey.isTouching(bananasGroup)){
    bananasGroup.destroyEach();
    score = score+1;
  }
  
  
 
  
  
  spawnObstacles();
  
  spawnBananas();

  drawSprites();
  text("Score: "+ score, 500,50);
  
}

function spawnObstacles(){
  if (frameCount % 80 === 0){
   var obstacle = createSprite(900,480,10,400);
   obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4
   
    
    obstacle.scale = 0.1;
   obstacle.lifetime = 300;
  
   obstaclesGroup.add(obstacle);
    }
  
   
  }

function spawnBananas(){
    if (frameCount % 90 === 0){
    var banana = createSprite(900,480,10,400);
   banana.y = Math.round(random(200,400));
   banana.addImage(bananaImage);
    banana.velocityX = -4
   
    
    banana.scale = 0.1;
   banana.lifetime = 300;
  
   bananasGroup.add(banana);
      
 
    }
  
}






