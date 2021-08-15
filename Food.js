class Food{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("Play")
       // this.greeting = createElement("h3");
        this.foodStock = 0,
        this.lastFed

        this.image = loadImage("Milk.png");
        World.add(world, this.body);
    }
    display(){
        var x=80, y=100;

        imageMode (CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                this.image(this.image,x,y,50,50);
                x = x+30;
            }
        }  
    }

  //  this.button.mousePressed(()=>{
      
       
 //     });
}