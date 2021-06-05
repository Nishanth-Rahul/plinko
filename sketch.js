var plinko =[];
var division =[];
var particle =[];
var ground;
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  
  ground = new Ground(240, 700, 800, 10);
}
 
function draw() {
  background(20,0,10);  
  
  for(var i = 0; i<width; i = i+80){
    division.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
   
  for(var j = 40; j<=width; j = j+50){
     plinko.push(new Plinko(j, 75));
  }
   
  for(var j = 15; j<=width-10; j = j+50){
      plinko.push(new Plinko(j,175));
   } 
   
   for(var j = 0; j<=width-25; j = j+50){
      plinko.push(new Plinko(j, 275));
   }
   
   for(var j = 0; j<=width-40; j = j+50){
     plinko.push(new Plinko(j, 375));
   }

   if(frameCount%60===0){
       particle.push(new Particle(random(width/2-10, width/2+10), 10, 10));
   }

    for(var k = 0; k < particle.length; j++){
       particles[j].display();
    }

    for(var i = 0; i < division.length; i++){
        division[i].display();
    }

    for(var j = 0; j < plinko.length; j++){
        plinko[j].display();
    }

  ground.display();
  drawSprites();
}