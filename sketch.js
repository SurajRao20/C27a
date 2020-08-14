const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof (440,200,360,20);

	bob1 = new Bob(283, 400,30);
	bob2 = new Bob(340, 400,30);
	bob3 = new Bob(403, 400,30);
	bob4 = new Bob(466, 400,30);
	bob5 = new Bob(529, 400,30);
	bob6 = new Bob(592, 400,30);


	rope1 = new Rope ({x: 284, y: 200}, bob1.body);
	rope2 = new Rope ({x: 341, y: 200}, bob2.body);
	rope3 = new Rope ({x: 404, y: 200}, bob3.body);
    rope4 = new Rope ({x: 465, y: 200}, bob4.body);
	rope5 = new Rope ({x: 528, y: 200}, bob5.body);
	rope6 = new Rope ({x: 591, y: 200}, bob6.body);


	Engine.run(engine);
  
}


function draw() {
 
  background(170, 217, 52);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -200, y:0});
	}
}



