
var block=document.getElementById("block")
var hole=document.getElementById("hole")
var bird=document.getElementById("flying-bird")
var jumping=0
var count=0

hole.addEventListener('animationiteration',()=>{
    var random=-(Math.floor(Math.random()*(700-350+1)+350))  //(max-min+1)+min
    //console.log(random);
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
