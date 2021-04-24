const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(300,220,300,10);
    box1 = new Box(300,190,50,50);
    box2 = new Box(250,190,50,50);
    box3 = new Box(350,190,50,50);
    box4 = new Box(300,140,50,50);
    var op={
      density : 3
    }

    box5 = Bodies.rectangle(200,50,30,30,op);
    World.add(world, box5);
    slingshot = new SlingShot(box5,{x:200, y:50});
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  fill("red")
  rect(box5.position.x,box5.position.y,30,30)
  slingshot.display();
}

function mouseDragged(){
  
      Matter.Body.setPosition(box5, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(box5.body,{x:200,y:50});
     slingshot.attach(box5.body);
  }
}