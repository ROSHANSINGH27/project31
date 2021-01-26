const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunderBolt,thunder1,thunder2

function preload(){
    thunder1=loadImage("images/thunderbolt/1.png")
    thunder2=loadImage("images/thunderbolt/2.png")
    thunder3=loadImage("images/thunderbolt/3.png")
    thunder4=loadImage("images/thunderbolt/4.png")
}

function setup(){
    var canvas = createCanvas(900,1200);
    engine = Engine.create();
    world = engine.world;

    drops=new Drops(400,500,5)

    umbrella=new Umbrella(400,850,1000)
  thunderBolt=new Group()
    
}

function draw(){
    background(0);
    Engine.update(engine);
    drops.display()
    umbrella.display()
    spawnThunder()
}   

function spawnThunder(){
var rand=Math.round(random(1,4))
if (frameCount%60===0){
    thunder=createSprite(random(100,700),random(100,700),10,10)
    switch(rand){
        case 1:thunder.addImage(thunder1);
        break;
        case 2:thunder.addImage(thunder2)
        break;
        default:break;

    }
    thunder.scale=random(0.3,0.6)
    thunderBolt.add(thunder)
}
}

