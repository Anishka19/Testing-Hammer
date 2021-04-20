class Stone{
	constructor(x,y) {
		var options = {
			restitution : 0.8,
			friction : 0.9,
			density : 12
		}
		this.x=x;
		this.y=y;
		this.body= Bodies.rectangle(this.x, this.y, 30, 40 , options);
		World.add(world, this.body);
	}
	display()
	{
			var stonepos=this.body.position;		
			push();
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("brown");
            rect(0,0, 30, 40);
			pop();
	}

}