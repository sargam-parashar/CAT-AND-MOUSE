var bg, bgImg;
var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2, mouseImg3;
function preload() {

    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
    
}

function setup(){

    createCanvas(1000,800);

    //create tom and jerry sprites here
    bg = createSprite(500, 380);
    bg.addImage("backgroung", bgImg);

    cat = createSprite(700, 600, 50, 50);
    cat.addImage("cat", catImg);
    cat.addAnimation("cat_moving", catImg2);
    cat.addImage("still_cat", catImg3);
    cat.scale = 0.15;

    mouse = createSprite(100, 600, 50, 50);
    mouse.addImage("mouse", mouseImg);
    mouse.addAnimation("mouse_teasing", mouseImg2);
    mouse.addImage("still_mouse", mouseImg3)
    mouse.scale = 0.1;

}

function draw() {
    
    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.changeImage("still_cat");
        mouse.changeImage("still_mouse");
    }

    drawSprites();
    
}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -3;
      cat.changeAnimation("cat_moving");
      mouse.changeAnimation("mouse_teasing");
  }

}