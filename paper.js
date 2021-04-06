class Paper{
    constructor(x,y, radius){
    var options = {
    isStatic: false,
    'restitution':0.3,
    'friction':0.5,
    'density':3.2
    }
    this.x=x
    this.x=x
  
    this,image=loadImage("paper.png")
    this.radius = radius
    this.body = Bodies.circle(x,y,this.radius/2,options);
    
    World.add(world,this.body);
    }
    display(){
        push();
translate(this.body.position.x,this.body.position.y)
    ellipseMode(RADIUS)
    fill("yellow");
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
    
    };