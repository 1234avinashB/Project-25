
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var bin1, bin2, bin3, paperObject, ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(1200,690)
	paperObject = new Paper(200, 675)
	Engine.run(engine);
	ground1 = new Ground(800, 695, 1600, 5)
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: true
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
}


function draw() {
  Engine.update(engine);
  background("lightBlue");
  bin1.display();
  paperObject.display();
  ground1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:350,y:-350});
  
	}
}



