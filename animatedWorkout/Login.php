<html>
<head>
<title>W.O.D. - Login </title>
<link rel="icon" href="dumbbell.png">
<link href="https://fonts.googleapis.com/css?family=Sedgwick+Ave" rel="stylesheet">
<link rel="stylesheet" href="mainLoginWindow.css">
<script src="mainLoginWindow.js" type="text/javascript"></script>
<script src="jquery-3.3.1.min.js"></script>
<script>
$(document).ready(function(){
$(".card").slideDown(959).fadeIn(90000);

 $(".card").click(function(){
            $(".card").not(this).fadeOut(800);
						//show password box here
					  $("#pwBoxContainer").fadeIn(1500);
            $("#backBtn").fadeIn(1500);
					 }
				 );

$("#backBtn").click(function(){
    $(".card").fadeIn(800);
    $("#pwBoxContainer").fadeOut(1500);
    $("#backBtn").fadeOut(1000);

  });
});
</script>
<meta charset="UTF-8">
</head>

<body>
<img src="arrow-back-icon.png" id="backBtn" style="display:none">
<!--blue #4285f4;-->
<div class="card" onclick="showPic()"><img src="profilePhotos/johnDoe.jpg" class="mugshot"><div class="credentials">John Doe</div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/janeDoe1.png" class="mugshot"><div class="credentials">Jane Doe</div></div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/placeholer.png" class="mugshot"><div class="credentials">Annonymous</div></div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/fireman.png" class="mugshot"><div class="credentials">Fire Guy</div></div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/avi.png	" class="mugshot"><div class="credentials">Fly Guy</div></div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/detective.png" class="mugshot"><div class="credentials">Detective Guy</div></div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/doctor-female.png" class="mugshot"><div class="credentials">Nurse Girl</div></div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/OfficeGuyW.png" class="mugshot"><div class="credentials">Business Guy</div></div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/navyOfficer.png" class="mugshot"><div class="credentials">Sailor Officer</div></div></div>
<div class="card" onclick="showPic()"><img src="profilePhotos/018-boy-2.png" class="mugshot"><div class="credentials">Kid-1</div></div></div>

<!--This PW DIV must stay at the bottom so it can append to the DIVs aboves picture -->
<div id="pwBoxContainer">
	<center>
		<div id="pwDiv" style=";"><input id="pwBox" type="password" placeholder="Password" autofocus></div>
	</center>
<button style="visibility:hidden;" id="submitPass"  onClick="javascript:alert('Enter key invoked!')">Click Here</button>
</div>
</body>

<script type="text/javascript">
var input = document.getElementById("pwBox");

input.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
			checkCreds();
    }
});

var userPW = document.getElementById("pwBox");
function checkCreds()
{
	if (userPW.value =="" || userPW.value ==null){
		alert("Please enter a valid password to continue");
		userPW.autofocus;

	}
	else if (userPW.value.length < 4)
	{
		alert("I think your password should be a little longer than that...");
		userPW.autofocus;
	}
	else{
		return 0;
	   }
}

</script>
</html>
