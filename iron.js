class Iron{
	constructor(x,y) {
		var options = {
			restitution : 0.8,
			friction : 3,
			density : 30
		}
		this.x=x;
		this.y=y;
		this.body= Bodies.rectangle(this.x, this.y,200, 30 , options);
		World.add(world, this.body);
	}
	display()
	{
			var ironpos=this.body.position;		
			push();
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("grey");
            rect(0,0, 200, 30);
			pop();
	}

}