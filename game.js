var buttonColours=["red", "blue", "green", "yellow" ];
var gamePattern=[];
var randomChosenColour ;
var userClickedPattern=[];
var level=0;
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  //console.log(userClickedPattern);
  //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
  sounds(userChosenColour);

    checkAnswer(userClickedPattern.length-1);



});

function nextSequence(){
  var random_no=Math.round((Math.random()*3));
  randomChosenColour =buttonColours[random_no];
  gamePattern.push(randomChosenColour);
  clickButton();
  sounds(randomChosenColour);
  $("h1").html("Level "+(++level));
  console.log("game pattern : "+gamePattern);
  console.log("user pattern : "+userClickedPattern);
    userClickedPattern.length=0;

}

// for flash
function clickButton(){
  $("#"+randomChosenColour).fadeOut(200).fadeIn(200);

 //  switch(randomChosenColour){
 //    case "green":
 //      $(".green").fadeOut(200).fadeIn(200);
 //      break;
 //    case "red":
 //      $(".red").fadeOut(200).fadeIn(200);
 //      break;
 //    case "yellow":
 //      $(".yellow").fadeOut(200).fadeIn(200);
 //      break;
 //    case "blue":
 //      $(".blue").fadeOut(200).fadeIn(200);
 //      break;
 // }
}
// for adding sounds to buttons
function sounds(audio)
      {
        var audioName=new Audio("sounds/"+ audio +".mp3");
          $("#"+audio).on("click",function(){
              audioName.play();
              $("#"+audio).addClass("pressed");
              setTimeout(function(){
                $(".pressed").removeClass('pressed');
                //audioName.pause();
            }, 0);})



        // to trigger when any of button is pressed

        // if(clicked_id=="green"){
        //   var greenAudio=new Audio("sounds/green.mp3");
        //   greenAudio.play();
        // }
        // else if(clicked_id=="red"){
        //   var redAudio=new Audio("sounds/red.mp3");
        //   redAudio.play();
        // }
        // else if(clicked_id=="yellow"){
        //   var yellowAudio=new Audio("sounds/yellow.mp3");
        //   yellowAudio.play();
        // }
        // else if(clicked_id=="blue"){
        //   var blueAudio=new Audio("sounds/blue.mp3");
        //   blueAudio.play();
        // }
        // else{
        //   var wrongAudio=new Audio("sounds/wrong.mp3");
        //   wrongAudio.play();
        // }
      }

      // to check a key is pressed

        $(document).on("keydown",(e)=> {
           var i=e.key;
      //$("h1").html("Level "+level);
          nextSequence();
        });

function checkAnswer(current_level){
  if(gamePattern[current_level] === userClickedPattern[current_level]){
    console.log("right");
  if(JSON.stringify(gamePattern)=== JSON.stringify(userClickedPattern)){
    setTimeout(function () {
      nextSequence();
    }, 500);
  }
}
else{
    $("h1").html("Game Over !! Press any key to restart the game ");
    animation();
    gamePattern.length=0;
    userClickedPattern.length=0;
    level=0;
  //  userClickedPattern.length=0;
    gamePattern.length=0;
    setTimeout(function () {
      nextSequence();
    }, 800);
  }
}
function animation(){
  $(document).addClass("game-over");

  setTimeout(function(){
    $(document).removeClass('game-over');

}, 200);
}
