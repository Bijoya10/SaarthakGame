var player,playerImg;
var bg, bgImg, mazeImg;
var nplayer1, nplayerImg;

function preload (){
    playerImg = loadImage("sprites/playerFront.png");
    nplayerImg = loadImage("sprites/playerFront.png");
    bgImg = loadImage("sprites/realbg.png");
    mazeImg = loadImage("sprites/maze.png");
}

function setup(){
    var canvas = createCanvas(400,400);
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
}

function draw(){
    background("black");
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
        bg.addImage(mazeImg);
        bg.scale = 1.3;
        player.scale = 0.11133;
    }
    drawSprites();
}