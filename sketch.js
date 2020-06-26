//Create variables here
var dog,sadDog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  sadDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,20,20);
  dog.addImage(sadDog);
  foodStock = database.ref('Food');
  foodStock.on('value',readStock);  
}


function draw() { 
  background(46,139,87); 
  textSize(20);
  text(foodS,50,50);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=o){
    x=0;
  } else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}