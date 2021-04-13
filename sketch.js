const Bodies = Matter.Bodies;//used for creating object present in the game
const Engine = Matter.Engine;//namespace means giving nickname or small name
const World = Matter.World;

var myengine,myworld;
var ground;
var ball;

function setup() {
  createCanvas(1200,400);

myengine = Engine.create();
myworld = myengine.world;
var options ={
  isStatic:true
}
//i will ping u later on, put in github


ground= new Ground(600,height,1200,20,options)
World.add(myworld,ground);

/*var balloptions = {
  restitution:1
}

ball = Bodies.circle(400,200,40,balloptions);
World.add(myworld,ball);*/

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
pig1 = new Pig(810,350)
log1 = new Log(810,300,300,PI/2);

box3 = new Box(700,280,70,70);
box4 = new Box(920,280,70,70)
pig2 = new Pig(810,270);
log2 = new Log(810,220,300,PI/2)

box5 = new Box(810,180,70,70);
log3 = new Log(760,160,150,PI/7)
log4 = new Log(870,160,150,-PI/7);

bird1 = new Bird(100,100);




}

function draw() {

  background("pink");  

  Engine.update(myengine);
  ground.display()

box1.display()
box2.display();
pig1.display();
log1.display();
box3.display();
box4.display();
log2.display();
pig2.display();
box5.display();
log3.display();
log4.display();
bird1.display();




 // ellipseMode(RADIUS);
 // ellipse(ball.position.x,ball.position.y,40,40);
}