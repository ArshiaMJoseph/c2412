class Log {
    constructor(x,y,height,angle){
        var options = {
            friction :2,
            density:1.0,
            restitution:0.8,
        }
        this.body =  Bodies.rectangle(x,y,20,height,options);
        World.add(myworld,this.body);
        this.width =20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);

    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        stroke("brown")
        strokeWeight(7);
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}