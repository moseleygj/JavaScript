let  myObj = {
  pullups:"gifs/pullup.gif",
  pushups:"gifs/pushup.gif",
  dips:"gifs/dip.gif",
  squats:"gifs/squat.gif",
  benchDip:"gifs/benchDips.gif",
  burpees:"gifs/burpees.gif"
}
function showFit(){

alert("Hi im here!"+ myObj.pushups)
}

function getImg(a){
  document.getElementById("sampExercise").src=myObj.pullups;
  alert(a);
}

function goAway(){
    document.getElementById("subContdivainter").style.display="none";

}

function showFit(a)
{
  document.getElementById("subContdivainter").style.display="block";
document.getElementById("sampExercise").src=a;
}
