class Division {
    constructor(x){
        var opt = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,610,10,300,opt);
        this.width = 10
        this.height = 300
        World.add(world,this.body)
}
display(){
   push();
   translate(this.body.position.x,this.body.position.y);
   rectMode(CENTER);
   fill("blue")
   rect(0,0,this.width,this.height); 
   pop();

}
}