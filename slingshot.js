class Slingshot{
constructor(bodyA,pointB){
    var sling_options ={
        length: 10,
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
    }
    this.sling = Matter.Constraint.create(sling_options) 
    World.add(world,this.sling)

    this.pointB = pointB


}

display(){
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y);


    }

}

fly(){

this.sling.bodyA = null;




}






}
