class Chain{
constructor(bodyA,bodyB){
    var chain_options ={
        length:10,
        bodyA:bird.body,
        bodyB:log6.body,
        stiffness: 0.04,
    }
    this.chain = Matter.Constraint.create(chain_options) 
    World.add(world,this.chain)


}

display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
    strokeWeight(4)
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}