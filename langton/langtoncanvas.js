
class Grid{
    constructor(){

    }
    update(){

    }
    draw(){

    }
}
class Ant{
    x=0;
    y=0;
    direction="N"
    create(x, y) {
        let elementPosition = this.x + ',' + this.y;
        this.ctx.fillRect(x,y,10,10)
    }    
}

class LangtonCanvas{
    constructor(){
        this.grid=document.getElementById("grid");
        this.ctx=this.grid.getContext('2d');
        this.grid=new Grid(100, 100, this.canvas);

    }
    play(){
        this.loop();
    }
    loop(){
        //pour dessiner un rectangle noir à la position (0, 0) et de taille 10x10 il faut utiliser fillStyle & fillRect
        this.ctx.clearRect(0,0, this.grid.width, this.grid.height);
        this.ctx.beginPath();
        this.grid.update();
        this.grid.draw(this.ctx);

        //this.ctx.fillStyle="black";
        
        //this.ctx.fillRect(0,0,10,10);
        //this.ctx.fillStyle="red";
        //this.ctx.fillRect(500,500,10,10);
      
        
    }
}