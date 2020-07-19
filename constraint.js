class Chain {

    constructor(body1, body2){
        var options={
            bodyA : body1.body,
            bodyB : body2.body,
            length : 50,
            stiffness : 0.2
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var positionA = this.chain.bodyA.position;
        var positionB = this.chain.bodyB.position; 
        line(positionA.x, positionA.y, positionB.x, positionB.y);
    }
}