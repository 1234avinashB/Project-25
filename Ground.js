class Ground {
    constructor(x, y, width, height){
    var  options = {
    isStatic:true,
    }
    this.body = Bodies.rectangle(x, y, 1600, 5, options);
    this.width = 1600;
    this.height = 5;
    World.add(world, this.body)
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rectMode (CENTER);
    rotate (angle);
    rect(0,0,this.width, this.height)
    pop ();
}


    }