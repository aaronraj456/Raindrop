class Raindrop{
    constructor(x,y,radius){
      var options={
        density:1,
        restitution:0.98,
        frictionAir:0.04
      }

      this.raindrop = Bodies.circle(x,y,radius, options);
        this.radius=radius
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.raindrop);
      }
      display(){

        var pos=this.raindrop.position;

        push();
        fill("Red")
        stroke(120)
        strokeWeight(1);
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius);

        if(this.raindrop.position.y > height+20){
          console.log("Hello")
          Matter.Body.setPosition(this.raindrop,{x:pos.x,y : Math.random(-100,0)})
        }
        pop();

        push();
        fill("red")
        stroke(120)
         textSize(20);
         text(Math.random().toString(36).substring(7).slice(0,1),pos.x+200,pos.y)
        pop();
    }
}