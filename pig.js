class Pig {

    constructor(x,y){
        var options={
            friction:0.3,
            density:1,
            restitution:0.8,
        }
        this.body = Bodies.rectangle(x,y,50,50);
        World.add(myworld,this.body);
        this.width = 50;
        this.height = 50;
}

display(){
var pos = this.body.position;
var angle = this.body.angle;
push()
translate(pos.x,pos.y);
fill("green")
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height)
pop()

}






}