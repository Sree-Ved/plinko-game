class Plinko{
    constructor(x, y) {
        var options = {
            "isStatic": true
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
        World.add(world, this.body);
      }
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(0,0,this.radius,this.radius);
        pop();

      }
}