class Bird {
    constructor(x,y){
        var options = {
            friction :0.3,
            density:2.0,
            restitution:0.8,
        }
        this.body =  Bodies.rectangle(x,y,50,50,options);
        World.add(myworld,this.body);
        this.width = 50;
        this.height = 50;

    }

    display(){
        var pos = this.body.position

        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        stroke("red")
        strokeWeight(7);
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop()
    }
}