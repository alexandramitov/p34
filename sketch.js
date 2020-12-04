const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var p1, p2, p3, p4, p5;

function setup() {
    canvas = createCanvas(windowWidth/2, windowHeight/ 1.5);
    engine = Engine.create();
    world = engine.world;

    p1 = new Pendulum(100, 100, "purple");
    

    



}
