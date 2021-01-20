class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 11,
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
            pop();
        }
    }
     attach(body){
    this.chain.bodyA = body;
    }
    
}

