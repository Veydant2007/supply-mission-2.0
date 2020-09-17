var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,target1,target2,target3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

 target1Sprite = createSprite = (width/2,660,200,10);
 target1Sprite.shapeColor = ("red")
 target2Sprite = createSprite = (390,660,10,100)
 target2Sprite.shapeColor = ("red")
 target3Sprite = createSprite = (600,660,10,100)
 target3Sprite.shapeColor = ("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 target1 = Bodies.rectangle(width/2,660,200,10,{isStatic:true});
	 World.add(world,target1)
	 
	 target2 = Bodies.rectangle(390,660,10,100,{isStatic:true});
     World.add(world,target2)

	 target3 = Bodies.rectangle(600,660,10,100,{isStatic:true});
     World.add(world,target3)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody,false);
    
  }
}



