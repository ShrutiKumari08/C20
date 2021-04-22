var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";


//fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

 fixedRect1 = createSprite(500,200,50,50)
 fixedRect1.shapeColor ="green";
}

function draw() {
  background(225,225,225);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="blue";
    fixedRect1.shapeColor="blue";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor="green";
  }

  
   drawSprites();
}


