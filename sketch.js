const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbinObj, paperObject,groundObject
var world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,600,10)
ground = new Ground(400,680,800,20)
leftOne = new Dustbin(550,620,20,100)
//bottomOne = new Dustbin(610,660,100,20)
//rightOne = new Dustbin(670,620,20,100)
	Engine.run(engine);
paperObject=new Paper(200,450,70)
groundObject=new Ground(width/2,670,width,20)
dustbinObj=new Dustbin(1200,650);
  
}












function draw() {
  rectMode(CENTER);
  background(230);
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  Engine.update(engine)
  paper.display();
  ground.display();
  leftOne .display();
  bottomOne.display();
  rightOne.display();
  drawSprites();
 
}



function keyPressed(){
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10});

}
}