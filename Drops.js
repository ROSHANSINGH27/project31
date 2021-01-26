class Drops{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            'restitiution':0.8,
            'friction':0.1,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.maxDrops=10;
        this.drops=[]
        World.add(world,this.body);
       
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        
        if(this.body.position.y > height){
            Matter.Bodies.setPosition(this.body,{x:random(0,400),y:random(0,400 )})
        }
       for (var i=0;i<this.maxDrops;i++){
           var position=[random(0,900),random(0,1200)]
            this.drops.push(position)
       }
       console.log(this.drops)
       for(var i=0;i<this.drops.length;i++){
        ellipseMode(CENTER);
        ellipse(this.drops[i][0],this.drops[i][1],this.radius);
       }
    }
}