
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
}


function randomPlaceHolder()
{
var x= Math.floor(Math.random()* 11)+1;
document.getElementById("exerciseImg").src="loading/loading"+x+".gif";
}


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
$(document).ready(function(){

alert("Hi");

		$("input:radio").click(function()
		{
				if ($("#hidePreview").is(':checked'))
				{
					alert("Radio button #hidePreview is CHECKED!" );
				}
				else if ($("#ShowPreview").is(':checked'))
				{
					alert("Radio button #ShowPreview is CHECKED!" );
				}
				else{
					alert("Error");
				}
		});
});
