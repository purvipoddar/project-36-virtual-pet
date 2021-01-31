class Food{
    constructor(){
     
        this.foodStock=0;
        this.lastfed;
        this.image=loadImage("images/Milk.png");
       
    }
   updatefoodS(foodStock){
       this.foodStock=foodStock
   }
   
   getfedTime(lastfed){
       this.lastfed=lastfed
   }
   
   getfoodStock(){
       return this.foodStock;
     }
   
   display(){
       var x=90,y=200;
       
       imageMode(CENTER);
       image(this.image,720,220,70,70);
       
       if(this.foodStock!=0){
         for(var i=0;i<this.foodStock;i++){
           if(i%10===0){
             x=90;
             y=y+50;
           }
           image(this.image,x,y,50,50);
           x=x+40;
         }
       }
     }
   }