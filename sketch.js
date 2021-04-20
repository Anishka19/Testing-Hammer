const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane;
var rubber, stone1, iron1;
var stone2, stone3, stone4;
var iron2;


function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);

    rubber = new Rubber(1000,540,40);

    stone1 = new Stone(400,570);
    stone2 = new Stone(445,570);
    stone3 = new Stone(485,570);
    stone4 = new Stone(500,570);

    iron1 = new Iron(700,585);
    iron2 = new Iron(150,585);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone1.display();
    iron1.display();
    stone2.display();
    iron2.display();
    stone3.display();
    stone4.display();
 
}