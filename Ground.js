class Ground     
{
    constructor (x,y,w,h)  
    {
        var g_options = {
            isStatic:true
        }
        this.x=x ;
        this.y=y;
        this.w=w;
        this.h=h;

        this.body=Bodies.rectangle(x,y,w,h,g_options);
        World.add(world,this.body);
    }

    display()
    {
        var g_position = this.body.position;
        push()
        translate(g_position.x,g_position.y);
        rectMode(CENTER);
        fill("yellow")
        rect(0,0,this.w,this.h);
        pop()
    }
}