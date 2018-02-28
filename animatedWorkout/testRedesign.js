
var xhttp = new XMLHttpRequest();
var myObj;

xhttp.onreadystatechange = function()
	{
		if(xhttp.readyState == 4 && xhttp.status == 200)
		{
				myObj = JSON.parse(xhttp.responseText);
		}
};
xhttp.open("GET", "main.json", true);
xhttp.send(); //go bring me the data


function showFit(exercise)
{
document.getElementById("exerciseImg").src="gifs/"+exercise;
document.getElementById("imgExercise").style.zIndex = "1";
document.getElementById("imgExercise").style.display = "block"; 
document.getElementById("rightColumn").style.visibility = "hidden";  
}


function randomPlaceHolder()
{
var x= Math.floor(Math.random()* 11)+1;
document.getElementById("exerciseImg").src="loading/loading"+x+".gif";

}

/*
function hideShowPreview()
{
	if ( document.getElementById("showPreview").checked == true)
	{
		document.getElementById("exerciseImg").style.display="block";
		//increase size of workout list;slide (left);
	}
	else if (document.getElementById("showPreview").checked == false)
	{
		document.getElementById("exerciseImg").style.display="none";
		//decrearse workoutCell size ;slide-left(slow)
	}
	else{
		alert("Error!");
	}
}
*/
$(document).ready(function(){

$("#hidePreview").click(function()
{
	$(".rightColumn").removeClass("rightColumn");
	$(".rightColumn").addClass("rightColumnMax");
	$(".leftColumn").removeClass("leftColumn");
	$(".leftColumn").addClass("leftColumnMin");
});

$("#showPreview").click(function()
{
	$(".leftColumn").removeClass("leftColumnMin");
	$(".leftColumn").addClass("leftColumn");
	$(".rightColumn").removeClass("rightColumnMax");
	$(".rightColumn").addClass("rightColumn");
});


});
