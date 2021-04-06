class Dustbin{
    constructor(x,y){
       
    var options = {
    isStatic: true,
    'restitution':0,
    'friction':1,
    'density':0.1,
    }
    this.x=y
    this.y=y
    this.dustbinWidth=200;
    this.dustbinHeight==213;
    this.wallThickness=20;
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("dustbine2332.png")
   // this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2)

    //World.add(world,this.leftWallBody)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){

      //  var posLeft=this.leftWallBody.position;
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
    
    };