class Particle{
    constructor(x, y) {
      var options = {
        'restitution':0.4,
    }

        this.body = Bodies.circle(x, y, 10,options);
        this.radius = 10;
        this.colour = rgb(random(0,225),random(0,225),random(0,225))
        World.add(world, this.body);
      }
      display(){

        var pos = this.body.position
        var angle = this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle)
        noStroke();
        fill(this.colour)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius);
        pop();

      }
}