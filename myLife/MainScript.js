var timer = null;
$(document).ready(function(){
  $('#noteMsg').keydown(function(){
  $('#dry').show();
  });

  $('#noteMsg').keyup(function(){
  clearTimeout(timer);
  timer = setTimeout(hider, 1500);
  });

});
/* check if textbox is $(document).ready(function(){
empty
$('#noteMsg').change(function(){
  if ($('#noteMsg').val().length >0 ){
    isTextBoxempty();}
});*/

/*
var inp = $("#noteMsg").val();
if(jQuery.trim(inp).length > 0)
{
alert("something is there");
}

});*/

var txtBox = document.getElementById("noteMsg");

function hider()
  {
    document.getElementById('dry').style.display="none";
  }

function dragDropFocus()
	{
		document.getElementById("imgAdd").style.borderColor="#0074c4";
		document.getElementById("addNewContent").style.color="blue";
		document.getElementById("addIcon").src="plusG.png";
	}

function dragDropNoFocus()
	{
		document.getElementById("imgAdd").style.borderColor="#aaa";
		document.getElementById("addIcon").src="plus.png";
	}

function newNoteFocus()
	{
		document.getElementById("newNote").style.height="135px";
		document.getElementById("newNoteTitle").style.visibility="visible";
		document.getElementById("noteTitle").value ="Title";
		document.getElementById("newNoteTitle1").style.visibility="visible";
		document.getElementById("icnClose").style.visibility="visible";
	}

  function closeNote()
  {
  		document.getElementById("newNoteTitle").value="Write a new note...";
  	  txtBox.value="";
  	  txtBox.placeholder="Write a new note...";
  		document.getElementById("newNoteTitle1").style.visibility="hidden";/*ttitle of document*/
  		document.getElementById("newNote").style.height="44px"; /*main div*/
  		document.getElementById("icnClose").style.visibility="hidden";/*toggle close button invisible if nothing  to save*/
  		document.getElementById("noteTitle").value ="Write a new note...";
  		document.getElementById("newNoteTitle").style.visibility="hidden";
  	}

	//function newNoteNoFocus()
	//{
		/*document.getElementById("newNote").style.height="44px";*/
		/*document.getElementById("newNoteTitle").style.visibility="hidden";*/
				/*document.getElementById("noteTitle").value ="Title";*/

		/*document.getElementById("newNoteTitle1").style.visibility="hidden";*/
		/*document.getElementById("icnClose").style.visibility="hidden";*/
	//}

function isTextBoxempty(){
     var saveIcon = document.getElementById("icnSave");
     alert(txtBox.value );
     //Change color of save icon to green if text is present
    if (txtBox.value !=="" || txtBox.value !==null || txtBox.value !==undefined )
    {
      //save3.png is green;save1.png is grey
        saveIcon.style.visibility="visible";
    }
    else{
        saveIcon.style.visibility="hidden";
    }
}


/* change  icons from grey to active when mouseover is in effect */

function icoColor(){
		document.getElementById("icnPaint").src="paintBlue.png";
	}

function icoColorO(){
		document.getElementById("icnPaint").src="paintGrey.png";
	}

function icoImg(){
		document.getElementById("icnPhoto").src="photosBlue.png";
	}

function icoImgO(){
		document.getElementById("icnPhoto").src="photosG.png";
	}

function icoMedia(){
		document.getElementById("icnPlus").src="plus3.png";
	}

function icoMediaO(){
		document.getElementById("icnPlus").src="plusGrey.png";
	}

function icoSave(){
		document.getElementById("icnSave").src="save3.png";
	}

function icoSaveO(){
		document.getElementById("icnSave").src="save1.png";
	}
