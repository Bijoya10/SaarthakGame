var gameState = 0;

var player,playerImg,playerImg2,playerImg3,playerImg4;
var bg, bgImg, mazeImg, tileImg;
var nplayer1, nplayerImg;
var mazeGroup;

function preload (){
    playerImg = loadImage("sprites/playerFront.png");
    playerImg2 = loadImage("sprites/playerRight.png");
    playerImg3 = loadImage("sprites/playerLeft.png");
    playerImg4 = loadImage("sprites/playerBack.png");
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
  
    player = createSprite(470,305,15,15);
    player.addImage(playerImg);
    player.scale = 0.1596;

    nplayer = createSprite(1095,430,15,15);
    nplayer.addImage(nplayerImg);
    nplayer.scale = 0.1596;

    invisible1 = createSprite(1115,-20, 135,96);
    invisible2 = createSprite(-405,-80,450,150);
    invisible3 = createSprite(-740.2,208,165,1250);
    invisible4 = createSprite(300.2,-399,1860,160);
    invisible5 = createSprite(120,777,1900,160);
    invisible6 = createSprite(1120,380,150,700);
    invisible7 = createSprite(960,345,150,330);
    invisible8 = createSprite(115,-15,150,760);
    invisible9 = createSprite(-59.8,272,800,150);
    invisible10 = createSprite(-395,360,170,290);
    invisible11 = createSprite(275,360,170,290);
    invisible12 = createSprite(-60,640,170,190);
    invisible13 = createSprite(609.8,272,170,820);
    invisible14 = createSprite(615.2,-52,465,160);
    invisible15 = createSprite(1114.6,-217,175,185);

    nPlayerEnd = createSprite(100,203,40,40);
    gameSprite = createSprite(100,100,50,160);

    mazeGroup= new Group();
    mazeGroup.add(invisible2);
    mazeGroup.add(invisible3);
    mazeGroup.add(invisible4);
    mazeGroup.add(invisible5);
    mazeGroup.add(invisible6);
    mazeGroup.add(invisible7);
    mazeGroup.add(invisible8);
    mazeGroup.add(invisible9);
    mazeGroup.add(invisible10);
    mazeGroup.add(invisible11);
    mazeGroup.add(invisible12);
    mazeGroup.add(invisible13);
    mazeGroup.add(invisible14);
    mazeGroup.add(invisible15);
}

function draw(){
    background("black");
    
    playerControls();

    if (player.isTouching(nplayer)){
        gameState = 1;
        player.x = -405.01868964360006;
        player.y = -237.76929908850002;  
    }
    if (gameState === 0){
        bg.x = width/2; //700
        bg.y = height/2; //300
        
        player.scale = 0.5;
        nplayer.scale = 0.5;
        mazeGroup.setVisibleEach(false);
        nPlayerEnd.visible = false;
        gameSprite.visible = false;
        bg.scale = 5;
    }
    if (gameState === 1){
        bg.x = 200;
        bg.y = 200;
        bg.addImage(mazeImg);
        bg.scale = 7;

        nplayer.destroy();
        player.scale = 0.4998645678;
        
        camera.position.x = player.x;
        camera.position.y = player.y;

        player.collide(mazeGroup);        
    }

    if ( gameState === 1 && player.isTouching(invisible1)){
        gameState = 2;
        bg.addImage(tileImg);

        player.x = 711.0186896436;
        player.y = 73.76929908849993;
    }

    if(gameState === 2){
        bg.addImage(tileImg);
        invisible1.visible = false;
        mazeGroup.destroyEach();
        nPlayerEnd.visible = false;
        gameSprite.visible = false;
        
        if (gameState === 2 && player.isTouching(nPlayerEnd)){
            gameState = 3;
        }

        player.scale = 0.62233498701;
        camera.position.x = player.x;
        camera.position.y = player.y;
    }

    if(gameState === 3){
        bg.destroy();
        background("black");
        gameSprite.visible = true;
        
        stroke("yellow");
        strokeWeight(3);
        textSize(25);
        textFont("Verdana");
        text("Thanks _____ for helping us out!",300,100);
        fill("cyan");  
    }
    drawSprites();
}


function playerControls(){
    if (keyDown(DOWN_ARROW)){
        player.y = player.y + 5;
        player.addImage(playerImg);
    }
    if (keyDown(UP_ARROW)){
        player.y = player.y - 5;
        player.addImage(playerImg4);
    }
    if (keyDown(RIGHT_ARROW)){
        player.x = player.x + 5;
        player.addImage(playerImg2);
    }
    if (keyDown(LEFT_ARROW)){
        player.x = player.x - 5;
        player.addImage(playerImg3);
    }
}


