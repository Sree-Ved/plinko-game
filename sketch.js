const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {

  createCanvas(480,800);

    engine = Engine.create();
    world = engine.world;

    var ground_options ={
      isStatic: true
  }

   
  division1 = new Division(5);
  division2 = new Division(96);
  division3 = new Division(192);
  division4 = new Division(288);
  division5 = new Division(384);
  division6 = new Division(475);

  pa1 = new Particle(240,30)
  

  ground = Bodies.rectangle(240,780,480,40,ground_options);
  World.add(world,ground)

  Engine.run(engine);
  
}

function draw() {
  
  background("orange");  
  rectMode(CENTER)

  fill("green")
  rect(240,780,480,40)

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  pa1.display();

    for(x=0;x<100;x=x+1){
    var pa = new Particle(random(230,250),10-(20*x));
    pa.display();
  } 

plinkomania()
 } 

 function plinkomania (){
  plinkos1 = []

  for(var i = 20; i <= width; i=i+40){
    plinkos1.push(new Plinko(i,375))
  } 

  for(var u = 0; u < plinkos1.length; u++) {
    plinkos1[u].display()
  }

  plinkos2 = []

  for(var x=40; x <= width-40; x=x+40){
   plinkos2.push(new Plinko(x,300))
  }

  for(var y=0; y < plinkos2.length; y++){
  plinkos2[y].display()
 }

 plinkos3 = []

  for(var a=20; a <= width; a=a+40){
   plinkos3.push(new Plinko(a,225))
  }

  for(var b=0; b < plinkos3.length; b++){
  plinkos3[b].display()
 }

 plinkos4 = []

 for(var l=40; l <= width-40; l=l+40){
  plinkos4.push(new Plinko(l,150))
 }

 for(var m=0; m< plinkos4.length; m++){
 plinkos4[m].display()
}
 }

 

