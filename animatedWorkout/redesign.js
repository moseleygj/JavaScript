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
xhttp.send();


function showFit(exercise)
{
	if(exercise == null|| exercise == "" || exercise == "-"){
		alert("Opps! An Error occurred please contact System Administrator.");
		return 0;
	}

	//add this to jQuery and use FadeIn and fadeOut functions
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


function closeImg(){
		document.getElementById("rightColumn").style.visibility = "visible";
		document.getElementById("imgExercise").style.zIndex = "-1";
		document.getElementById("imgExercise").style.display = "none";
}


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
function showNote(){
		document.getElementById("tooltip").style.visibility="visible";
		document.getElementById("tooltipBody").style.visibility="visible";

}


function hideNote(){
		document.getElementById("tooltip").style.visibility="hidden";
}


$(document).ready(function(){
	var gen = document.getElementById('tooltip');

	$("#noteIcon").click(function()
		{
			gen.style.visibility="visible";

		});

$(".closeBtn").click(function()
		{
			gen.style.visibility="hidden";

		});
		
});