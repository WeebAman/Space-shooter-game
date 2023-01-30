var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["72d7ee13-e521-4220-88eb-5dca7d32ca5b","da106f10-8f97-4306-9ab7-95bffbaaf0bc","700988ac-d794-48f2-be9e-ee5ebb468608","b4b89020-3286-4981-8958-6698dd20cbf3","660ee71c-d60a-4b7e-ba0f-50ddd06183d6","95d1eeb8-005b-4f67-9dae-134e082546a1","753e5a0a-81c0-4ec4-9e48-879b4e2308a6","9aa32053-ac4c-478c-af93-ad67ca1387d7","7160aa8c-1d72-4953-830e-39894b940e7e","c794c929-8973-4a42-bdbf-e572015ec431","0055f74e-1947-4441-b21b-82cd929afc19","f3e5713e-20a3-45a0-94b8-436c1b6cb21f","d887e285-a7c2-495b-b6c8-c40ea93f15f9","504d5512-7559-4670-850c-31d36497c082","c09a748b-989c-4e20-8694-dcc93b88be16","4c7f3b6d-ad1a-4788-ad92-14187f4489ec"],"propsByKey":{"72d7ee13-e521-4220-88eb-5dca7d32ca5b":{"name":"sci_fi_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nzRiSKyDsq4blLQyAWJbkkTtTLJ64kxP/category_backgrounds/background_scifi.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nzRiSKyDsq4blLQyAWJbkkTtTLJ64kxP","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nzRiSKyDsq4blLQyAWJbkkTtTLJ64kxP/category_backgrounds/background_scifi.png"},"da106f10-8f97-4306-9ab7-95bffbaaf0bc":{"name":"background_landscape09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"700988ac-d794-48f2-be9e-ee5ebb468608":{"name":"brown_cat_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EIwknzsNvY8SfKy0Ojq0X_Xu7Ix_RXJR/category_animals/brown_cat.png","frameSize":{"x":191,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"EIwknzsNvY8SfKy0Ojq0X_Xu7Ix_RXJR","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EIwknzsNvY8SfKy0Ojq0X_Xu7Ix_RXJR/category_animals/brown_cat.png"},"b4b89020-3286-4981-8958-6698dd20cbf3":{"name":"fire","sourceUrl":"assets/api/v1/animation-library/gamelab/Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh/category_fantasy/gameplayadventure_03.png","frameSize":{"x":232,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh/category_fantasy/gameplayadventure_03.png"},"660ee71c-d60a-4b7e-ba0f-50ddd06183d6":{"name":"ship","sourceUrl":"assets/api/v1/animation-library/gamelab/REocRDL0flVPaD_F1.YiisqhjAxIxLR7/category_vehicles/playerShip3_blue.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"REocRDL0flVPaD_F1.YiisqhjAxIxLR7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/REocRDL0flVPaD_F1.YiisqhjAxIxLR7/category_vehicles/playerShip3_blue.png"},"95d1eeb8-005b-4f67-9dae-134e082546a1":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"753e5a0a-81c0-4ec4-9e48-879b4e2308a6":{"name":"retrocreature_20_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H/category_retro/retrocreature_20.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yVdK6mSKgtCffa.HVc0fCFHqwZ2vvW5H/category_retro/retrocreature_20.png"},"9aa32053-ac4c-478c-af93-ad67ca1387d7":{"name":"alien_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/mj2ti2iXM44mDQz.rcLgzlE_41.J15kR/category_fantasy/alien_03.png","frameSize":{"x":389,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"mj2ti2iXM44mDQz.rcLgzlE_41.J15kR","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":389,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mj2ti2iXM44mDQz.rcLgzlE_41.J15kR/category_fantasy/alien_03.png"},"7160aa8c-1d72-4953-830e-39894b940e7e":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png","frameSize":{"x":365,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png"},"c794c929-8973-4a42-bdbf-e572015ec431":{"name":"gameplayadventure_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/d.ppQGqzBGsDlQnp2FB6uWg8HwYVmBt8/category_fantasy/gameplayadventure_04.png","frameSize":{"x":271,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"d.ppQGqzBGsDlQnp2FB6uWg8HwYVmBt8","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/d.ppQGqzBGsDlQnp2FB6uWg8HwYVmBt8/category_fantasy/gameplayadventure_04.png"},"0055f74e-1947-4441-b21b-82cd929afc19":{"name":"shot","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"hFhYgDcBUtmQKK9lg5LEAR2BzcQeEKPm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0055f74e-1947-4441-b21b-82cd929afc19.png"},"f3e5713e-20a3-45a0-94b8-436c1b6cb21f":{"name":"naruto.png_1","sourceUrl":"assets/v3/animations/yhkr4c8acjTV3c40J6wmd5OxIA_sA2j3egjhiPi-NvA/f3e5713e-20a3-45a0-94b8-436c1b6cb21f.png","frameSize":{"x":473,"y":768},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZQf2cKAZGO75xvUhdqoC3zFz1_dBxvi5","loadedFromSource":true,"saved":true,"sourceSize":{"x":473,"y":768},"rootRelativePath":"assets/v3/animations/yhkr4c8acjTV3c40J6wmd5OxIA_sA2j3egjhiPi-NvA/f3e5713e-20a3-45a0-94b8-436c1b6cb21f.png"},"d887e285-a7c2-495b-b6c8-c40ea93f15f9":{"name":"rsangsuriken.png_1","sourceUrl":"assets/v3/animations/yhkr4c8acjTV3c40J6wmd5OxIA_sA2j3egjhiPi-NvA/d887e285-a7c2-495b-b6c8-c40ea93f15f9.png","frameSize":{"x":945,"y":945},"frameCount":1,"looping":true,"frameDelay":4,"version":"c7f10C8JMwyYmaGkGliB_Lnvo9UHhKQm","loadedFromSource":true,"saved":true,"sourceSize":{"x":945,"y":945},"rootRelativePath":"assets/v3/animations/yhkr4c8acjTV3c40J6wmd5OxIA_sA2j3egjhiPi-NvA/d887e285-a7c2-495b-b6c8-c40ea93f15f9.png"},"504d5512-7559-4670-850c-31d36497c082":{"name":"bg.jpg_1","sourceUrl":"assets/v3/animations/yhkr4c8acjTV3c40J6wmd5OxIA_sA2j3egjhiPi-NvA/504d5512-7559-4670-850c-31d36497c082.png","frameSize":{"x":960,"y":540},"frameCount":1,"looping":true,"frameDelay":4,"version":"mmVFu.06NewInEYp0qnPMJrfPYiCATEH","loadedFromSource":true,"saved":true,"sourceSize":{"x":960,"y":540},"rootRelativePath":"assets/v3/animations/yhkr4c8acjTV3c40J6wmd5OxIA_sA2j3egjhiPi-NvA/504d5512-7559-4670-850c-31d36497c082.png"},"c09a748b-989c-4e20-8694-dcc93b88be16":{"name":"intro.png_1","sourceUrl":"assets/v3/animations/yhkr4c8acjTV3c40J6wmd5OxIA_sA2j3egjhiPi-NvA/c09a748b-989c-4e20-8694-dcc93b88be16.png","frameSize":{"x":472,"y":472},"frameCount":1,"looping":true,"frameDelay":4,"version":"pYKITp9XMpMinn.YcGlbBRhx.VqeAG.P","loadedFromSource":true,"saved":true,"sourceSize":{"x":472,"y":472},"rootRelativePath":"assets/v3/animations/yhkr4c8acjTV3c40J6wmd5OxIA_sA2j3egjhiPi-NvA/c09a748b-989c-4e20-8694-dcc93b88be16.png"},"4c7f3b6d-ad1a-4788-ad92-14187f4489ec":{"name":"bomb","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"tZxKBQvEeHbvbE9458h4u1I75RQEizhR","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4c7f3b6d-ad1a-4788-ad92-14187f4489ec.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


// create background
  
var bg=createSprite(200,200);
bg.setAnimation("space_1");
bg.scale = 1;

  


// create gamestate
var gamestate="serve";
var score = 0;

// create naruto
var spaceShip = createSprite(200, 350);
spaceShip.setAnimation("ship");
spaceShip.scale = 0.8;

//to make shot and duplicate it multiple times
var j=0;
var bullet=[];
for (var i = 0; i < 100; i++) {
  bullet[i]=createSprite(500,500);
  bullet[i].setAnimation("shot");
  bullet[i].scale=0.3;
}


var enemy=createSprite(200,200 );
enemy.setAnimation("fire");
enemy.scale=0.1;



function draw(){
  background("white");
  
if(keyDown("enter")){
  gamestate = "play";
}

// to call reset function
reset();

// to give controls to our ship
if (gamestate === "play") {
  if (keyDown("left")) {
    spaceShip.x=spaceShip.x-5;
  }
    
if (keyDown("right")) {
    spaceShip.x=spaceShip.x+5;
  }


// to make shot fired
if (gamestate === "play") {
  
  if (keyWentDown("space")) {
  bullet[j].x=spaceShip.x;
  bullet[j].y=spaceShip.y-50;
  bullet[j].velocityY=-5;
  j=j+1;
  
if (j === 100  ) {
   j = 0;
  }             
}
}


//to make enemy located at different locations  
for (var i = 0; i <100; i++) {
  if (enemy.isTouching(bullet[i])) {
  enemy.x=randomNumber(110,320);
  enemy.y=randomNumber(123,224);
  enemy.velocityY=2;
  score = score +1;
  console.log(score);
  if (enemy.y>400) {
    gamestate=="over";
  }
}
}

if (gamestate =="over"){
fill("white");
  textSize(20);
  text("score : " + score,200, 200);
}


// to make game harder 
if (j>20) {
  enemy.velocityY=3;
}

// to make game harder 
if (j>30) {
  enemy.velocityY=5;
}
}

// to end the game
if (enemy.y == 400) {
  gamestate="over";
}


 createEdgeSprites();
 spaceShip.bounceOff(edges);
  drawSprites();
  
  // to display text  to start the game
  if (gamestate === "serve") {
  textSize(15);
  stroke("red");
  strokeWeight(5);
  fill("white");
  text("PRESS {ENTER} TO START ", 110, 120);
}

if(gamestate == "play"){
  textSize(20);
  stroke("red");
  strokeWeight(5);
  fill("white");
  text("score : " + score,40, 50);
}

// to dispaly text to reset the game
if (gamestate =="over") {
 textSize(15);
 fill("white");
 stroke("red");
  strokeWeight(5);
 text("PRESS [R] TO CONTINUE", 110, 150);
 
textSize(15);
 fill("white");
 stroke("red");
  strokeWeight(5)
 text("GAME OVER", 150, 130);
 
 
}
}
// to make reset function
function reset() {
  if (keyDown("r")) {
gamestate = "serve";
fill("white");
  textSize(20);
  text("score : " + score,200, 200);

spaceship.x=200;
spaceship.y=350;

enemy.x=200;
enemy.y=200;
enemy.velocityY=0;


}
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
