var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;

function preload(){

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10,Options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

    var Options = {
		isStatic : true
	}


	groundSprite=createSprite(width/2, height-35, width,10,Options);
	groundSprite.shapeColor=color(255)
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.5, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	// packageArea1 = createSprite(width/2, height-40, 200, 20);
	// packageArea2 = createSprite((width/2)+100, height-80, 20, 100);
	// packageArea3 = createSprite((width/2)-100, height-80, 20, 100);
	// packageArea1.shapeColor = "red";
	// packageArea2.shapeColor = "red";
	// packageArea3.shapeColor = "red";

	// $packagearea1$ = Bodies.rectangle(width/2, height-40, 200, 20, {isStatic:true} );
	// $packagearea2$ = Bodies.rectangle((width/2)+100, height-80, 20, 100, {isStatic:true} );
	// $packagearea3$ = Bodies.rectangle((width/2)-100, height-80, 20, 100, {isStatic:true} );
	// World.add(world, $packagearea1$);
	// World.add(world, $packagearea2$);
	// World.add(world, $packagearea3$);
	
	box1 = new box(400, 660, 200, 20);
	box2 = new box(500, 620, 20, 100);
	box3 = new box(300, 620, 20, 100);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody , false);
  }  

  drawSprites();
  box1.display();
  box2.display();
  box3.display();

}

function isPressed(){
	if (keyCode === "DOWN_ARROW") {
		Matter.Body.setStatic( packageBody , false);
	}
}  

