
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

//check which option is selected

function hideShowPreview(){
	if ( document.getElementById("showPreview").checked == true){
		document.getElementById("exerciseImg").style.display="block";
	}
	else if (document.getElementById("showPreview").checked == false){
		document.getElementById("exerciseImg").style.display="none";
	}
	else{
		alert("Error!");
	}
			//decrearse workoutCell size ;slide-left(slow)
			//increase size of workout list;slide (left);
		}
