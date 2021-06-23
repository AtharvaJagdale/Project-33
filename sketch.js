const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;



function preload(){
starImg=loadImage("images/star.png")
sceneryImg=loadImage("images/Scenery.jpg")
rasenganImg=loadImage("images/rasengan.png")
narutoImg=loadImage("images/naruto.png")
}
function setup(){
createCanvas(1200, 700);
engine = Engine.create();
world = engine.world;
//Write the object codes here
rasengan=Bodies.circle(250,360,20)
World.add(world,rasengan)
naruto=Bodies.rectangle(1000,515,200,300,{isStatic:true})
World.add(world,naruto)
groundObject=new ground(600,680,1200,20);
stand1=new ground(520,400,200,10)
stand2=new ground(920,250,200,10)
// This are the box for stand 1
box1=new Box(430,380,35,35)
box2=new Box(470,380,35,35)
box3=new Box(520,380,35,35)
box4=new Box(570,380,35,35)
box5=new Box(610,380,35,35)
 
box6=new Box(470,363,35,35)
box7=new Box(520,363,35,35)
box8=new Box(570,363,35,35)

box9=new Box(520,333,35,35)

//This are the box for stand 2
box10=new Box(830,240,35,35)
box11=new Box(870,240,35,35)
box12=new Box(920,240,35,35)
box13=new Box(970,240,35,35)
box14=new Box(1010,240,35,35)

box15=new Box(870,210,35,35)
box16=new Box(920,210,35,35)
box17=new Box(970,210,35,35)

box18=new Box(920,190,35,35)

sling1= new Slingshot(rasengan,{x:200,y:360})
Engine.run(engine);
}
function draw(){
background(sceneryImg)
drawSprites();
textSize(40)
text(mouseX+";"+mouseY,200,200)
imageMode(CENTER)
image(rasenganImg,rasengan.position.x,rasengan.position.y,50,50)
imageMode(CENTER)
image(narutoImg,naruto.position.x,naruto.position.y,200,300)
groundObject.display()
stand1.display()
stand2.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
sling1.display()
}
function mouseDragged(){

    Matter.Body.setPosition(rasengan,{x:mouseX,y:mouseY}) 
   }
   
   //create mouseReleased function here
   function mouseReleased(){
   sling1.fly()
   
   }
   
   //create keyPressed function here
   function keyPressed(){
     if(keyCode===32)
     sling1.attach(rasengan)
   }














