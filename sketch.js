var sky;
var sky_img;
var road;
var road_img;
var taj;
var taj_img;
var soldier;
var soldier_img;
var poverty;
var poverty_img;
var corrupt;
var corrupt_img;
var childl;
var childl_img;
var dowry;
var dowry_img;
var unp;
var unp_img;
var heli;
var heli_img;
var thread;
var thread_img;
var crime;
var crime_img;
var top_edge;
var bottom_edge;
var bullet;
var left_edge;
var startGame;
var startGame_img;
var gameState = "start";
var chakra;
var chakra_img;
var music;
var shot;

function preload()
{
    sky_img = loadAnimation("sea.png");
    road_img = loadAnimation("indian.png");
    taj_img = loadAnimation("Taj mahal 2.png");
    soldier_img = loadAnimation("soldier.gif");
    corrupt_img = loadAnimation("Corruption.png");
    poverty_img = loadAnimation("Poverty.png");
    childl_img = loadAnimation("Child Labour.png");
    dowry_img = loadAnimation("Alien 2.png");
    unp_img = loadAnimation("Unemployment.png");
    heli_img = loadAnimation("Black heli 2.png");
    thread_img = loadAnimation("thread2.png");
    crime_img = loadAnimation("crime.png");
    startGame_img = loadAnimation("Controls.png");
    chakra_img = loadAnimation("chakra 2.png");
    music = loadSound("Sare.mp3");
    shot = loadSound("boom.wav");
}

function setup()
{

    createCanvas(1530, 750);

    music.loop();

    sky = createSprite(950, 300);
    sky.addAnimation("sky_img", sky_img);
    sky.velocityX = -5;

    road = createSprite(300, 600);
    road.addAnimation("road_img", road_img);
    road.scale = 0.5;
    road.velocityX = -10;

    taj = createSprite(765, 200);
    taj.addAnimation("taj_img", taj_img);
    taj.depth = road.depth-1;

    soldier = createSprite(80, 600);
    soldier.addAnimation("soldier_img", soldier_img);
    soldier.scale = 0.6;

    poverty = createSprite(1590, random(300, 750));
    poverty.addAnimation("poverty_img", poverty_img);
    poverty.velocityX = -13;
    poverty.scale = 0.5;

    corrupt = createSprite(2000, random(300, 750));
    corrupt.addAnimation("corrupt_img", corrupt_img);
    corrupt.velocityX = -13;
    corrupt.scale = 0.5;

    childl = createSprite(2500, random(300, 750));
    childl.addAnimation("childl_img", childl_img);
    childl.velocityX = -13;
    childl.scale = 0.5;

    dowry = createSprite(2900, random(300, 750));
    dowry.addAnimation("dowry_img", dowry_img);
    dowry.velocityX = -13;
    dowry.scale = 0.5;

    unp = createSprite(3400, random(300, 750));
    unp.addAnimation("unp_img", unp_img);
    unp.velocityX = -13;
    unp.scale = 0.5;

    heli = createSprite(2000, 100);
    heli.addAnimation("heli_img", heli_img);
    heli.scale = 0.4;
    heli.velocityX = -10;

    thread = createSprite(heli.x - 35, heli.y + 85);
    thread.addAnimation("thread_img", thread_img);
    thread.scale = 0.1;
    thread.velocityX = -10;

    crime = createSprite(heli.x - 35, heli.y + 100);
    crime.addAnimation("crime_img", crime_img);
    crime.scale = 0.3;
    crime.velocityX = -10;

    top_edge = createSprite(760, 250, 1530, 10);
    top_edge.visible = false;

    bottom_edge = createSprite(760, 785, 1530, 10);

    bullet = createSprite(10000, 5000, 35, 5);
    bullet.shapeColor = color("black");
    bullet.visible = false;

    left_edge = createSprite(0, 350, 5, 750);
    left_edge.visible = false;

    startGame = createSprite(765, 375);
    startGame.addAnimation("startGame_img", startGame_img);
    startGame.scale = 1.1;
    startGame.visible = false;

    chakra = createSprite(750, 550);
    chakra.addAnimation("chakra_img", chakra_img);
    chakra.scale = 0.5;

    chakra.depth = bullet.depth-2;
    chakra.depth = dowry.depth-1;
    chakra.depth = unp.depth-1;
    chakra.depth = childl.depth-1;
    chakra.depth = crime.depth-1;
    chakra.depth = corrupt.depth-1;
    chakra.depth = poverty.depth-1;
}

function draw()
{
    background("white");

    if(gameState == "playing")
    {

    
    if(sky.x <= 0)
    {
        sky.x = sky.width/4;
    }

    if(road.x <= 400)
    {
        road.x = road.width/4;
    }

    if(keyDown("up"))
    {
        soldier.y = soldier.y - 10;
    }

    if(keyDown("down"))
    {
        soldier.y = soldier.y + 10;
    }

    if(soldier.isTouching(top_edge))
    {
        soldier.bounceOff(top_edge);
    }

    if(soldier.isTouching(bottom_edge))
    {
        soldier.bounceOff(bottom_edge);
    }

    if(keyDown("space"))
    {
        shot.play();
        bullet.x = soldier.x;
        bullet.y = soldier.y;
        bullet.visible = true;
        bullet.velocityX = 13;
    }

    if(bullet.isTouching(poverty))
    {
        poverty.x = 1590;
        poverty.y = random(300, 500);
        bullet.x = 10000;
        bullet.y = 5000;    
        
    }

    if(bullet.isTouching(unp))
    {
        unp.x = 3400;
        unp.y = random(300, 500);
        bullet.x = 10000;
        bullet.y = 5000;    
        
    }

    if(bullet.isTouching(childl))
    {
        childl.x = 2500;
        childl.y = random(300, 500);
        bullet.x = 10000;
        bullet.y = 5000;    
        
    }

    if(bullet.isTouching(dowry))
    {
        dowry.x = 2900;
        dowry.y = random(300, 500);
        bullet.x = 10000;
        bullet.y = 5000;    
        
    }

   
    if(bullet.isTouching(corrupt))
    {
        corrupt.x = 2000;
        corrupt.y = random(300, 500);
        bullet.x = 10000;
        bullet.y = 5000;    
        
    }

    if(crime.x <= 765)
    {
        crime.velocityX = -5;
        crime.velocityY = 15;
    }

    if(crime.y >= 600)
    {
        crime.velocityY = 0;
        crime.velocityX = -13;
    }

    if(bullet.isTouching(crime))
    {
        velocityX = 0;
        crime.x = 2000;
        crime.y = 100;
        bullet.x = 10000;
        bullet.y = 5000;    
        
        
    }

    if(heli.x >= 1900)
    {
        crime.x = heli.x - 35;
        crime.y = heli.y + 100; 
        crime.velocityX = -10;
    }

    if(heli.x <= 0)
    {
        heli.x = 2000;
        thread.x = heli.x - 35;
    }

    
    if(left_edge.isTouching(poverty))
    {
        poverty.x = 1590;
        poverty.y = random(300, 500);
  
        
    }

    if(left_edge.isTouching(unp))
    {
        unp.x = 3400;
        unp.y = random(300, 500);
  
        
    }

    if(left_edge.isTouching(childl))
    {
        childl.x = 2500;
        childl.y = random(300, 500);
  
        
    }

    if(left_edge.isTouching(dowry))
    {
        dowry.x = 2900;
        dowry.y = random(300, 500);
    
        
    }

   
    if(left_edge.isTouching(corrupt))
    {
        corrupt.x = 2000;
        corrupt.y = random(300, 500);
    
        
    }

    if(left_edge.isTouching(crime))
    {
        velocityX = 0;
        crime.x = 2000;
        crime.y = 100;
   
        
        
    }

    }

    if(gameState == "start")
    {
        startGame.visible = true;
        unp.velocityX = 0;
        heli.velocityX = 0;
        crime.velocityX = 0;
        thread.velocityX = 0;
        poverty.velocityX = 0;
        road.velocityX = 0;
        sky.velocityX = 0
        dowry.velocityX = 0;
        childl.velocityX = 0;
        corrupt.velocityX = 0;
        chakra.visible = false;
        
    }

    if(keyDown("A"))
    {
        gameState = "playing";
        startGame.visible = false;
        unp.velocityX = -13;
        heli.velocityX = -10;
        crime.velocityX = -10;
        thread.velocityX = -10;
        poverty.velocityX = -13;
        road.velocityX = -10;
        sky.velocityX = -5;
        dowry.velocityX = -13;
        childl.velocityX = -13;
        corrupt.velocityX = -13;
        chakra.visible = true;
    }
    drawSprites();
}