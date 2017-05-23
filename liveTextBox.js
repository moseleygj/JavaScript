function liveTxtChange(){
document.getElementById("idnum").innerHTML=document.getElementById("idnumT").value;
document.getElementById("dept").innerHTML=document.getElementById("deptT").value;
}
function test(){
document.getElementById("idnumT").value=document.getElementById("idnum").innerHTML;
document.getElementById("fnameT").value=document.getElementById("fname").innerHTML;
document.getElementById("lnameT").value=document.getElementById("lname").innerHTML;
document.getElementById("addressT").value=document.getElementById("address").innerHTML;
document.getElementById("dobT").value=document.getElementById("dob").innerHTML;
document.getElementById("expireT").value=document.getElementById("expire").innerHTML;
document.getElementById("deptT").value=document.getElementById("dept").innerHTML;
document.getElementById("issueT").value=document.getElementById("issue").innerHTML;
}
function clearBoxes(){		



document.getElementById("deptT").value="";
}
