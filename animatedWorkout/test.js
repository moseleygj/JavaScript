// window.onload=function(){
//   var xhttp = new XMLHttpRequest();
//
// xhttp.onreadystatechange = function() {
//
// if(xhttp.readyState == 4 && xhttp.status == 200){
//
// var myObj = JSON.parse(xhttp.responseText);
// console.log(myObj.pullups.image);
//   }
// };
// xhttp.open("GET", "main.json", true);
// xhttp.send(); //go bring me the data
// };
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
