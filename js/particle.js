class Particle{
    constructor(x, y, r, color){
        var options = {

           restitution = 0.4
        }
    
        this.r = r; 

      this.body = createSprite(x, y, this.r, options);
      this.color = color(random(0,255), random(0,255), random(0,255));

    } 
    display(){
         
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        noStroke();
        fill(this.color);
        elipseMode(RADIUS);
        elipse(0, 0, this.r, this.r);
        pop();
    }

};