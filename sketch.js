//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dog = loadImage("images/dogimg.png");
  happyDog = loadImage("images/happydog.png");
  
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage("dog",dog);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87);
  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("happy",happyDog);
  }
    text(foodS,100,200);
  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


