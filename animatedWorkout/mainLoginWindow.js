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
