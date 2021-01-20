const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;
var block15, block16, block17, block18, block19, block20, block21,block22;
var sling;
var player;
var polygon,polygonImg;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1020,605);

  engine = Engine.create();
  world = engine.world;


  block1 = new Block(500,360,30,40);
  block2 = new Block(470,360,30,40);
  block3 = new Block(440,360,30,40);
  block4 = new Block(530,360,30,40);
  block5 = new Block(560,360,30,40);



  block6 = new Block(485,320,30,40);
  block7 = new Block(455,320,30,40);
  block8 = new Block(515,320,30,40);
  block9 = new Block(545,320,30,40);



  bolck10 = new Block(500,270,30,40);
  block11 = new Block(470,280,30,40);
  block12 = new Block(530,280,30,40);


  block13 = new Block(500,240,30,40);

  ground1 = new Ground(500,380,200,10);
  ground2 = new Ground(800,290,200,10);
  ground3 = new Ground(750, 600, 1500, 15);


  block14 = new Block(800,270,30,40);
  block15 = new Block(830,270,30,40);
  block16 = new Block(770,270,30,40);
  block17 = new Block(740,270,30,40);
  block18 = new Block(860,270,30,40);

  block19 = new Block(800,240,30,40);
  block20 = new Block(830,240,30,40);
  block21 = new Block(770,240,30,40);
  block22 = new Block(800,210,30,40);

  player = new Player(50,210,30,30);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  sling = new Chain(this.polygon,{x:150, y:130});

}

function draw() {
  background("darkslategray");
  Engine.update(engine);

   
  fill(rgb(210,105,30));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill(rgb(160,82,45));
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill(rgb(139,69,19));
  bolck10.display();
  block11.display();
  block12.display();

  fill(rgb(205,133,63));
  block13.display();

  fill(rgb(0,255,127));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill(rgb(60,179,113));
  block19.display();
  block20.display();
  block21.display();

  fill(rgb(46,139,87));
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  fill(rgb(255,69,0));
  stroke(255,69,0);
  strokeWeight(1);
  textSize(23);
  text("Hii Everyone!! :) ",10,30);
  text("You Have To Drag The Mouse and Release It, After That The polygon ",295,30);
  text("(Hexagon) Will Launch :)",295,60);
  text("If You Want To Launch The Polygon Again ,Then Press SPACE KEY,",293,100);
  text("Then It Will Reset To Its Position Again. And Then You Can :)",291,130);
 
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,42,42);

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(this.polygon,{x:150, y:130})
		sling.attach(this.polygon);
	}
}
