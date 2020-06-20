var ball, ground;
var dustbin1, dustbin2, dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

    ground = Bodies.rectangle(width / 2, height - 25, width, 15, { isStatic: true });
    World.add(world, ground);

    ball = new Paper(100, height - 30, 20);

    dustbin1 = new Dustbin(750, height - 85, 30, 100);
    dustbin2 = new Dustbin(950, height - 85, 30, 100);
    dustbin3 = new Dustbin(850, height - 50, 200, 30);

	Engine.run(engine);
}


function draw() {
    background(0);
    ball.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();

    drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Body.applyForce(ball.body, ball.body.position, { x: 75, y: -75 });
        "console.log(keyPressed)";
    }
}