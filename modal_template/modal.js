var modal   = document.getElementById('myModal');
var msgBox  = document.getElementById("loginBox");
var closeBtn= document.getElementById("closeModal");

showPic = function(){
    modal.style.display = "block";
    msgBox.style.zIndex="2";
    closeBtn.style.display= "none";
}

function hidePic(){
modal.style.display = "none";
msgBox.style.display = "none";
}
