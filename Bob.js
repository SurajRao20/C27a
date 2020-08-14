class Bob {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':4,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("gold");
      strokeWeight(4);
      stroke(228, 116, 0);
      circle(0, 0, this.radius*2);
      pop();
    }
  };