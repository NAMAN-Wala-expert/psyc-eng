
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var r = 30;
var ground_obj;
var leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution:0.3,
		isStatic:false,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,r,ball_options);
	World.add(world,ball);

	ground_obj = new Ground(width/2,600,width,20);
	rightSide = new Ground(1150,520,20,120);
	leftSide = new Ground(900,520,20,120);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,r);

  ground_obj.display();
  rightSide.display();
  leftSide.display();
  
  drawSprites();
 
}

function keyPressed()  {
	if(keyCode===UP_ARROW)  {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}

	

}



