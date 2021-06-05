class Plinko{
    constructor(x, y, r){
        var options ={
              
            isStatic:  true
        }
        
        this.body= createSprite(x, y, r, options);

    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        elipseMode(RADIUS);
        elipse(0, 0, this.r, this.r);
        pop();
    }

};