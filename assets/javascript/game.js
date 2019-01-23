var wins=0;
var losses=0;
var currentScore=0;
var targetScore =0;


var crystal ={
    red:{
        name:"Red",
        value:0
    },
    green:{
        name:"Green",
        value:0
    },
    yellow:{
        name:"Yellow",
        value:0
    },
    blue:{
        name:"Blue",
        value:0
    }
}

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

var init =function(){
    currentScore =0;
    targetScore =getRandomNum(19, 120);
    crystal.red.value=getRandomNum(1,12);
    crystal.green.value=getRandomNum(1,12);
    crystal.yellow.value=getRandomNum(1,12);
    crystal.blue.value=getRandomNum(1,12);
    $('.total-number-displayed').text(currentScore);
    $('.target-number-container').text(targetScore);

}
init();

var updateValues =function(crystalClicked){
    currentScore=currentScore+crystalClicked.value;
    $('.total-number-displayed').text(currentScore);
    winOrLoss();
}

var winOrLoss = function(){
    if(currentScore > targetScore){
        losses++;
        $('.loss-score').text(losses);
        init();
    }else if(currentScore===targetScore){
        wins++;
        $('.win-score').text(wins);
        init();
    }
    
}

$("#red").click(function(){
    updateValues(crystal.red);
})
$("#blue").click(function(){
    updateValues(crystal.blue);
})
$("#yellow").click(function(){
    updateValues(crystal.yellow);
})
$("#green").click(function(){
    updateValues(crystal.green);
})
