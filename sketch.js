var gameState = 0;

var player,playerImg;
var bg, bgImg, mazeImg, tileImg;
var nplayer1, nplayerImg;

function preload (){
    playerImg = loadImage("sprites/playerFront.png");
    nplayerImg = loadImage("sprites/playerFront.png");
    bgImg = loadImage("sprites/realbg.png");
    mazeImg = loadImage("sprites/maze.png");
    tileImg = loadImage("sprites/tilemap.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    bg = createSprite(200,200,400,400);
    bg.addImage(bgImg);
    bg.scale = 1.6;
    //bg.addImage(mazeImg);
    player = createSprite(130,180,15,15);
    player.addImage(playerImg);
    player.scale = 0.1596;
    nplayer = createSprite(323,214,15,15);
    nplayer.addImage(nplayerImg);
    nplayer.scale = 0.1596;
    invisible1 = createSprite(1110,-20, 140,96);
    invisible1.shapeColor = "black";
    invisible2 = createSprite(-405,-80,450,150);
}

function draw(){
    background("black");
    console.log(player.y);
    console.log(player.x);
    if (keyDown(DOWN_ARROW)){
        player.y = player.y + 5;
    }
    if (keyDown(UP_ARROW)){
        player.y = player.y - 5;
    }
    if (keyDown(RIGHT_ARROW)){
        player.x = player.x + 5;
    }
    if (keyDown(LEFT_ARROW)){
        player.x = player.x - 5;
    }

    if (player.isTouching(nplayer)){
        gameState = 1;
        player.x =  45;
        player.y = 90;
        
    }
    if (gameState === 1){
        bg.addImage(mazeImg);
        bg.scale = 7;
        player.scale = 0.4;
        nplayer.visible = false;
        
        camera.position.x = player.x;
        camera.position.y = player.y;

        player.collide(invisible2);
        
    }
    if ( gameState === 1 && player.isTouching(invisible1)){
        gameState = 2;
        bg.addImage(tileImg);
    }

    if(gameState === 2){
        bg.addImage(tileImg);
        invisible1.visible = false;
        player.scale = 1;
        camera.position.x = player.x;
        camera.position.y = player.y;
    }
    drawSprites();
}