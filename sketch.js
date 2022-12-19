var tree
var treeImg
var skiguy




function setup(){
  createCanvas(windowWidth/2,windowHeight)
for (var i = 0; i < windowWidth/2; i=i+150) {
  tree = createSprite(i, Math.round(random(windowHeight,0)),20,20);
  tree.velocityY=-2
  tree.addImage(treeImg)
  tree.scale=0.2

  skiguy=createSprite(width/2,50)
  skiguy.addImage(playerImg)
  skiguy.scale=0.3
  skiguy.rotation=45
  

}
}

function preload()
{
treeImg=loadImage("tree.png")
playerImg=loadImage("player.png")
}


function draw() {
  background('white')
  drawSprites()
    turn()

  if(tree.y<windowHeight-400){
   for (var i = 0; i < windowWidth/2; i=i+150) {
 tree = createSprite(i, Math.round(random(windowHeight,0)),20,20);
 tree.velocityY=-2 
 tree.addImage(treeImg)
  tree.scale=0.2


}


  }
}

function turn(){

if(keyDown(LEFT_ARROW)){
  skiguy.rotation=skiguy.rotation+45
}
if(keyDown(RIGHT_ARROW)){
  skiguy.rotation=skiguy.rotation-45
}

else{ skiguy.rotation=0
}
}
