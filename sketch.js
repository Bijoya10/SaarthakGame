var gameState = 0;

var player,playerImg,playerImg2,playerImg3,playerImg4;
var bg, bgImg, mazeImg, tileImg;
var nplayer1, nplayerImg;

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
    //bg.addImage(mazeImg);
    player = createSprite(130,180,15,15);
    player.addImage(playerImg);
    player.scale = 0.1596;
    nplayer = createSprite(323,214,15,15);
    nplayer.addImage(nplayerImg);
    nplayer.scale = 0.1596;
    invisible1 = createSprite(1115,-20, 135,96);
    invisible1.shapeColor = "black";
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

}

function draw(){
    background("black");
    console.log(player.x);
    console.log(player.y);
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

    if (player.isTouching(nplayer)){
        gameState = 1;
        player.x = -405.01868964360006;
        player.y = -237.76929908850002;
        
    }
    if (gameState === 0){
        invisible2.visible = false;
        invisible3.visible = false;
        invisible4.visible = false;
        invisible5.visible = false;
        invisible6.visible = false;
        invisible7.visible = false;
        invisible8.visible = false;
        invisible9.visible = false;
        invisible10.visible = false;
        invisible11.visible = false;
        invisible12.visible = false;
        invisible13.visible = false;
        invisible14.visible = false;
        invisible15.visible = false;
    }
    if (gameState === 1){
        bg.addImage(mazeImg);
        bg.scale = 7;
        nplayer.destroy();
        player.scale = 0.4998645678;
        invisible2.visible = false;
        invisible3.visible = false;
        invisible4.visible = false;
        invisible5.visible = false;
        invisible6.visible = false;
        invisible7.visible = false;
        invisible8.visible = false;
        invisible9.visible = false;
        invisible10.visible = false;
        invisible11.visible = false;
        invisible12.visible = false;
        invisible13.visible = false;
        invisible14.visible = false;
        invisible15.visible = false;
        nplayer.visible = false;
        
        camera.position.x = player.x;
        camera.position.y = player.y;

        player.collide(invisible2);
        player.collide(invisible3);
        player.collide(invisible4);
        player.collide(invisible5);
        player.collide(invisible6);
        player.collide(invisible7);
        player.collide(invisible8);
        player.collide(invisible9);
        player.collide(invisible10);
        player.collide(invisible11);
        player.collide(invisible12);
        player.collide(invisible13);
        player.collide(invisible14);
        player.collide(invisible15);

        invisible2.visible = false;
        invisible3.visible = false;
        invisible4.visible = false;
        invisible5.visible = false;
        invisible6.visible = false;
        invisible7.visible = false;
        invisible8.visible = false;
        invisible9.visible = false;
        invisible10.visible = false;
        invisible11.visible = false;
        invisible12.visible = false;
        invisible13.visible = false;
        invisible14.visible = false;
        invisible15.visible = false;
    

        
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
        invisible1.destroy();
        invisible2.destroy();
        invisible3.destroy();
        invisible4.destroy();
        invisible5.destroy();
        invisible6.destroy();
        invisible7.destroy();
        invisible8.destroy();
        invisible9.destroy();
        invisible10.destroy();
        invisible11.destroy();
        invisible12.destroy();
        invisible13.destroy();
        invisible14.destroy();
        invisible15.destroy();

        player.scale = 0.62233498701;
        camera.position.x = player.x;
        camera.position.y = player.y;
    }
    drawSprites();
}