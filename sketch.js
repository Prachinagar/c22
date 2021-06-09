const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
       restitution:0.8

    }

   object= Bodies.rectangle(200,50,100,100,object_options);
    World.add(world,object);

   ground=Bodies.rectangle(200,300,400,10,{isStatic:true})
World.add(world,ground);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,100,100);
    rect(ground.position.x,ground.position.y,400,10);
}
