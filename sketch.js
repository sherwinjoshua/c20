var rect1,rect2



function setup() {
  createCanvas(800,400);
  rect1=createSprite(200,300,50,30);
  rect2=createSprite(400,200,50,30);
  rect1.shapeColor=("red");
  rect2.shapeColor=("blue");
}
function draw() {
  background(0);
  rect2.x=mouseX
  rect2.y=mouseY 
 // console.log(rect2-rect1)
 if (rect2.x-rect1.x < rect1.width/2+rect2.width/2 
 && rect1.x-rect2.x < rect1.width/2+rect2.width/2
 && rect1.y-rect2.y < rect1.height/2+rect2.height/2
 && rect2.y-rect1.y < rect2.height/2+rect1.height/2 ){
  rect1.shapeColor=("green");
  rect2.shapeColor=("green"); 
  
 } 
 else{
  rect1.shapeColor=("red");
  rect2.shapeColor=("blue");
 }
  drawSprites();
}