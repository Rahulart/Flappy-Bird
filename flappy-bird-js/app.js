// document.addEventListener('DOMContentLoaded',()=>{
//     const bird=document.querySelector('.flying-bird')
//     const gameDisplay=document.querySelector('.container')

//     let birdLeft=0;
//     let birdBottom=500;
//     let gravity=2
//     let iaGameOver=false

//     function startGame(){
//         birdBottom-=gravity
//         //console.log(birdBottom)
//         bird.style.bottom=birdBottom+'px'
//         bird.style.left=birdLeft+'px'
//     }
//     let gTimeId=setInterval(startGame,20)
//     //console.log(timeId)

//     function control(e){
//         if(e.keyCode===32){
//             jump()
//         }
//     }

//     function jump(e){
//         //console.log(e.which)
//         if(birdBottom<580) birdBottom+=50
//         bird.style.bottom=birdBottom+'px'
//         //console.log(birdBottom)
//     }
//     document.addEventListener('keyup',control)
//     //document.addEventListener('mousedown',jump) 

//     function generatePillar(){
//         let pillarLeft=1400
//         let randomHeight=Math.random()*(-100)
//         let pillarBottom=randomHeight
//         const pillar=document.createElement('div')
//         pillar.classList.add('pillar')
//         //console.log(pillar)
//         gameDisplay.appendChild(pillar)
//         pillar.style.left=pillarLeft+'px'
//         pillar.style.bottom=pillarBottom+'px'

//         function movePillar(){
//             pillarLeft-=2
//             pillar.style.left=pillarLeft+'px'

//             if(pillarLeft===-80){
//                 clearInterval(timeId)
//                 gameDisplay.removeChild(pillar)
//             }
//             if(pillar>100&&pillarLeft>280&&birdLeft===0||birdBottom===0){
//                 gameOver()
//             }
//         }
//         let timeId=setInterval(movePillar,10)
//         setTimeout(generatePillar,5000)
//     }
//     generatePillar()

//     function gameOver(){
//         clearInterval(gTimeId)
//         console.log('game over');
//         isGameOver=true
//         document.removeEventListener('keyup',control)
//     }
    
// })









// document.addEventListener('DOMContentLoaded',()=>{
//     const bird=document.querySelector('.bird')
//     const gameDisplay=document.querySelector('.game-container')
//     const ground=document.querySelector('.ground-moving')

//     let birdLeft=220
//     let birdBottom=100
//     let gravity=3
//     let isGameOver=false
//     let gap=430


//     function startGame(){
//         birdBottom-=gravity
//         bird.style.bottom=birdBottom+'px'
//         bird.style.left=birdLeft+'px'
//     }
//     let gameTimerId=setInterval(startGame,20)

//     function control(e){
//         if (e.keyCode===32) {
//             jump()
//         }
//     }

//     function jump(){
//         if (birdBottom < 500) birdBottom += 50
//         bird.style.bottom = birdBottom + 'px'
//         console.log(birdBottom)
//     }
//     document.addEventListener('keyup', control)


//     function generateObstacle() {
//         let obstacleLeft = 500
//         let randomHeight = Math.random() * 60
//         let obstacleBottom = randomHeight
//         const obstacle = document.createElement('div')
//         const topObstacle = document.createElement('div')
//         if (!isGameOver) {
//             obstacle.classList.add('obstacle')
//             topObstacle.classList.add('topObstacle')
//         }
//         gameDisplay.appendChild(obstacle)
//         gameDisplay.appendChild(topObstacle)
//         obstacle.style.left = obstacleLeft + 'px'
//         topObstacle.style.left = obstacleLeft + 'px'
//         obstacle.style.bottom = obstacleBottom + 'px'
//         topObstacle.style.bottom = obstacleBottom + gap + 'px'

//         function moveObstacle() {
//             obstacleLeft -=2
//             obstacle.style.left = obstacleLeft + 'px'
//             topObstacle.style.left = obstacleLeft + 'px'

//             if (obstacleLeft === -60) {
//                 clearInterval(timerId)
//                 gameDisplay.removeChild(obstacle)
//                 gameDisplay.removeChild(topObstacle)
//             }
//             if (
//                 obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
//                 (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200)||
//                 birdBottom === 0 
//                 ) {
//                 gameOver()
//                 clearInterval(timerId)
//             }
//         }
//         let timerId = setInterval(moveObstacle, 20) 
//         if (!isGameOver) setTimeout(generateObstacle, 3000)

//     }
//     generateObstacle()


//     function gameOver() {
//         clearInterval(gameTimerId)
//         console.log('game over')
//         isGameOver = true
//         document.removeEventListener('keyup', control)
//         ground.classList.add('ground')
//         ground.classList.remove('ground-moving')
//     }


// })










// var block = document.getElementById("block");
// var hole = document.getElementById("hole");
// var character = document.getElementById("character");
// var jumping = 0;
// var counter = 0;

// hole.addEventListener('animationiteration', () => {
//     var random = -((Math.random() * 300) + 150);
//     hole.style.top = random + "px";
//     counter++;
// });
// setInterval(function () {
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     if (jumping == 0) {
//         character.style.top = (characterTop + 3) + "px";
//     }
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
//     var cTop = -(500 - characterTop);
//     if ((characterTop > 480) || ((blockLeft < 50) && (blockLeft > -20) && ((cTop < holeTop) || (cTop > holeTop + 120)))) {
//         alert("Game over. Score: " + (counter - 1));
//         character.style.top = 100 + "px";
//         counter = 0;
//     }
// }, 10);

// function jump() {
//     jumping = 1;
//     let jumpCount = 0;
//     var jumpInterval = setInterval(function () {
//         var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         if ((characterTop > 6) && (jumpCount < 15)) {
//             character.style.top = (characterTop - 5) + "px";
//         }
//         if (jumpCount > 20) {
//             clearInterval(jumpInterval);
//             jumping = 0;
//             jumpCount = 0;
//         }
//         jumpCount++;
//     }, 10);
// }







var block=document.getElementById("block")
var hole=document.getElementById("hole")
var bird=document.getElementById("flying-bird")
var jumping=0
var count=0

hole.addEventListener('animationiteration',()=>{
    var random=-(Math.floor(Math.random()*(700-350+1)+350))  //(max-min+1)+min
    console.log(random);
    hole.style.top=random+'px'
    count++
})
setInterval(function(){
    var birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
    if(jumping===0){
     bird.style.top=(birdTop+2)+'px'
    }
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue('top'))
    //var birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
    var bdTop=-(700-birdTop)
     if((birdTop>670)||((blockLeft<63)&&(blockLeft>-60)&&((bdTop<holeTop)||(bdTop>holeTop+300)))){
         alert("Game over. score:"+(count-1))
         bird.style.top=100+'px'
         count=0
     }
},15)

function jump(){
    jumping=1
    let jumpCount=0
    var jumpInterval=setInterval(function(){
        var birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
        if(birdTop>2){
            bird.style.top=(birdTop-3)+'px'
        }
        
        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping=0
            jumpCount=0
        }
        jumpCount++
    },15)
}