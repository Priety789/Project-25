class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            'restitution': 0.2,
            'friction': 0.8,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("MatterJSBoilerPlate-master / paper.png");

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("purple");
        circle(0, 0, this.radius);
        pop();
    }
};
