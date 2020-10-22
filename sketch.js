
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob = new Bob(width/2,height/4,20);

	roof = new Roof(width/2, height/8, 700, 15);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");

  bob.display();
  roof.display();
  roof2.display();
  
  drawSprites();
 
}




