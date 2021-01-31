//Create variables here
var dog_img,dog;
var happydog_img;
var database;
var foodS,foodStock;
var addFood,feed;

function preload(){
sadDog=loadImage("images/dogimg.png");
happyDog=loadImage("images/dogimg1.png");

}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  //read foodstock from database
  database.ref('Food').on("value", function(data){
  foodS=data.val()
  foodObj.updatefoodS(foodS)
})
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  database.ref('FeedTime').on("value",function(data){
    lastFed=data.val();
  });
 
  drawSprites();
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  
  foodObj.updatefoodS(foodObj.getfoodStock()-1);
  database.ref('/').update({
    Food: foodObj.getfoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS =foodS+1;
  database.ref('/').update({
    Food:foodS
  })
}