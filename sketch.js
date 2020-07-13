//Create variables here
var dog, happyDog, database, foodS, foodStock;
foodS = 0;
function preload()
{
  //load images here
  dog = loadImage("images/dogimg.png");
  happyDog = loadImage("images/happydog.png");
  
}

function setup() {
  createCanvas(500, 500);
  dog1 = createSprite(250,250,20,20);
  dog1.addImage(dog);
  dog1.scale = 0.30;
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
    dog1.addImage(happyDog);
  }
    fill("red");
    text(foodS,250,50);

    fill ("blue");
    text("Note: Press 'UP ARROW' key to feed Padfoot", 135, 400);
  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}