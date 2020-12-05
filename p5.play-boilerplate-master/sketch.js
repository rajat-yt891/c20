var movingrect;
var fixedrect;

function setup() {
  createCanvas(800,400);
fixedrect = createSprite(400, 200, 50, 50);
fixedrect.shapeColor = "green";
fixedrect.velocityX = -2;
movingrect = createSprite(200, 200, 50, 50)
movingrect.shapeColor = "green";
movingrect.velocityX = 2;
}

function draw() {
  background(255,255,255);  
  //movingrect.x = mouseX;
  //movingrect.y = mouseY;
  if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
     fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
     movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
     fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2) {
       movingrect.shapeColor = "red";
       fixedrect.shapeColor = "red";
     }
     else {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
     }

     if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
      fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 ) {
        movingrect.velocityX = movingrect.velocityX *(-1) ;
        fixedrect.velocityX = fixedrect.velocityX *(-1) ;
      }
      if ( movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
        fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)  {
          movingrect.velocityY = movingrect.velocityY *(-1) ;
          fixedrect.velocityY = fixedrect.velocityY *(-1) ;
        }
  drawSprites();
}
