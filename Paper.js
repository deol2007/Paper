class Paper {
constructor(x,y){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
paper_= loadImage("sprites/paper.png")
this.body= Bodies.circle(x,y,15,options)
this.radius=70
World.add(world,this.body)
}
if(keydown=UPARROW){
    paper_.y= paper_.y+ 10
    paper_.x= paper_.x+ 10
}
display(){
push()
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
pop()
}
}
