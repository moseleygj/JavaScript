	var y = document.getElementById("year");
	var m = document.getElementById("month");
	var d = document.getElementById("day");

	function load_home() {
	     document.getElementById("data-Info").innerHTML='<object type="text/html" data="Aquarius.html"></object>';
	}

	function dayCheck()
	{
            	var y = document.getElementById("year");
	var m = document.getElementById("month");
	var d = document.getElementById("day");
//-------------------------------------------------------------------------------------------//
//Capricorn Horoscope Dates (December 22-January 19)
		if ((m.value == "January") && (d.value < 20))
		{
			document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Capricorn";
			document.getElementById("titleDetails").innerHTML="December 22 - January 19";
			document.getElementById("main-img").src="Capricorn-icon.png";
		}
//-------------------------------------------------------------------------------------------//
//Aquarius Horoscope Dates (January 20 to February 18)

		else if (m.value == "January")
		{
			  if ((d.value >= 20) && (d.value <= 31))
			  {
			 // 	alert("Aquarius");
			document.getElementById("top").style.background = "linear-gradient(#DAf0f8,#98d5ed)";
			document.getElementById("titleInfo").style.color="navy";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Aquarius";
			document.getElementById("titleDetails").innerHTML="January 20 - February 18";
			document.getElementById("main-img").src="Aquarius-icon.png";
			load_home();
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

		else if ((m.value == "February") && (d.value < 18))
		{
			//alert("Aquarius");
			document.getElementById("top").style.background = "linear-gradient(#DAf0f8,#98d5ed)";
			document.getElementById("titleInfo").style.color="navy";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Aquarius";
			document.getElementById("titleDetails").innerHTML="January 20 - February 18";
			document.getElementById("main-img").src="Aquarius-icon.png";

		}
//-------------------------------------------------------------------------------------------//
//Pisces Horoscope Dates (February 19 to March 20)

		else if (m.value == "February")
		{
			  if ((d.value >= 19) && (d.value <= 28))
			  {
//			  	alert("Pisces");
			document.getElementById("top").style.background = "linear-gradient(#69A5d9,#022451)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Pisces";
			document.getElementById("titleDetails").innerHTML="February 19 - March 20";
			document.getElementById("main-img").src="Pisces-icon.png";
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

	else if ((m.value == "March") && (d.value < 18))
		{
		//	alert("Pisces");
			document.getElementById("top").style.background = "linear-gradient(#69A5d9,#022451)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Pisces";
			document.getElementById("titleDetails").innerHTML="February 19 - March 20";
			document.getElementById("main-img").src="Pisces-icon.png";

		}
//-------------------------------------------------------------------------------------------//
		//Aries Horoscope Dates (March 21-April 19)

		else if (m.value == "March")
		{
			  if ((d.value >= 21) && (d.value <= 31))
			  {
			 // 	alert("Aries");
			document.getElementById("top").style.background = "linear-gradient(red,#BD0000)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Aries";
			document.getElementById("titleDetails").innerHTML="March 21-April 19";
			document.getElementById("main-img").src="Aries-icon.ico";
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

                else if ((m.value == "April") && (d.value < 20))
		{
			//alert("Aries");
			document.getElementById("top").style.background = "linear-gradient(red,#BD0000)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Aries";
			document.getElementById("titleDetails").innerHTML="March 21-April 19";
			document.getElementById("main-img").src="Aries-icon.ico";

		}
//-------------------------------------------------------------------------------------------//
//Taurus Horoscope Dates (April 20-May 20)

		else if (m.value == "April")
		{
			  if ((d.value >=20 ) && (d.value <=30 ))
			  {
			  	//alert("Taurus");
			document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Taurus";
			document.getElementById("titleDetails").innerHTML="April 20-May 20";
			document.getElementById("main-img").src="Taurus-icon.png";
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

else if ((m.value == "May") && (d.value < 21))
		{
			//alert("Taurus");
		  	document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Taurus";
			document.getElementById("titleDetails").innerHTML="April 20-May 20";
			document.getElementById("main-img").src="Taurus-icon.png";
		}


//-------------------------------------------------------------------------------------------//
//Gemini Horoscope Dates May 21-June 20)
else if ((m.value == "June") && (d.value < 21))
	{
		//alert("Gemini");
		  	document.getElementById("top").style.background = "linear-gradient(#DAf0f8,#98d5ed)";
			document.getElementById("titleInfo").style.color="navy";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Gemini";
			document.getElementById("titleDetails").innerHTML="May 21 - June 20";
			document.getElementById("main-img").src="Gemini-icon.png";
	}



else if (m.value == "May")
	{
	  if ((d.value >=21 ) && (d.value <= 31))
		  {
			  //	alert("Gemini");
		  	document.getElementById("top").style.background = "linear-gradient(#DAf0f8,#98d5ed)";
			document.getElementById("titleInfo").style.color="navy";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Gemini";
			document.getElementById("titleDetails").innerHTML="May 21 - June 20";
			document.getElementById("main-img").src="Gemini-icon.png";
		  }

	  else{
			  	alert("Oops! Somethings not right...");
		}
	}

//-------------------------------------------------------------------------------------------//
//Cancer Horoscope Dates June 21-July 22)
 		else if (m.value == "June")
		{
			  if ((d.value >=21 ) && (d.value <=30 ))
			  {
			//alert("Cancer");
			document.getElementById("top").style.background = "linear-gradient(#69A5d9,#022451)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Cancer";
			document.getElementById("titleDetails").innerHTML="June 21-July 22";
			document.getElementById("main-img").src="Cancer-icon.png";
			  }
			  else{
			  	alert("Oops! Somethings not right...");}
		}

		else if ((m.value == "July") && (d.value < 23))
		{
			//alert("Cancer");
			document.getElementById("top").style.background = "linear-gradient(#69A5d9,#022451)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Cancer";
			document.getElementById("titleDetails").innerHTML="June 21-July 22";
			document.getElementById("main-img").src="Cancer-icon.png";

		}
//-------------------------------------------------------------------------------------------//
//Leo Horoscope Dates (July 23-August 22)

 		else if (m.value == "July")
		{
			  if ((d.value >= 23) && (d.value <= 31))
			  {
			//alert("Leo");
			document.getElementById("top").style.background = "linear-gradient(red,#BD0000)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Leo";
			document.getElementById("titleDetails").innerHTML="July 23-August 22";
			document.getElementById("main-img").src="Leo-icon.png";
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

		else if ((m.value == "August") && (d.value < 23))
		{
			//alert("Leo");
			document.getElementById("top").style.background = "linear-gradient(red,#BD0000)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Leo";
			document.getElementById("titleDetails").innerHTML="July 23-August 22";
			document.getElementById("main-img").src="Leo-icon.png";

		}
//-------------------------------------------------------------------------------------------//
//Virgo Horoscope Dates (August 23-September 22)

 		else if (m.value == "August")
		{
			  if ((d.value >= 23) && (d.value <= 31))
			  {
			  	//alert("Virgo");
			document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Virgo";
			document.getElementById("titleDetails").innerHTML="August 23-September 22";
			document.getElementById("main-img").src="Virgo-icon.png";
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

                else if ((m.value == "September") && (d.value < 23))
		{
			//alert("Virgo");
			document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Virgo";
			document.getElementById("titleDetails").innerHTML="August 23-September 22";
			document.getElementById("main-img").src="Virgo-icon.png";

		}
//-------------------------------------------------------------------------------------------//
//Libra Horoscope Dates (September 23-October 22)
//Air
 		else if (m.value == "September")
		{
			  if ((d.value >= 23) && (d.value <= 30))
			  {
			  	alert("Libra");
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

                else if ((m.value == "October") && (d.value < 23))
		{
			alert("Libra");

		}
//-------------------------------------------------------------------------------------------//
//Scorpio Horoscope Dates (October 23-November 21)
//Water
 		else if (m.value == "October")
		{
			  if ((d.value >= 23) && (d.value <= 31))
			  {
			  	//alert("Scorpio");
			document.getElementById("top").style.background = "linear-gradient(#69A5d9,#022451)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Scorpio";
			document.getElementById("titleDetails").innerHTML="October 23 - November 21";
			document.getElementById("main-img").src="Scorpio-icon.png";
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

                else if ((m.value == "November") && (d.value < 22))
		{
			//alert("Scorpio");
			document.getElementById("top").style.background = "linear-gradient(#69A5d9,#022451)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Scorpio";
			document.getElementById("titleDetails").innerHTML="October 23 - November 21";
			document.getElementById("main-img").src="Scorpio-icon.png";
		}
//-------------------------------------------------------------------------------------------//
//Sagittarius Horoscope Dates (November 22-December 21)

 		else if ((m.value == "November") && (d.value > 20))
		{
			//alert("Sagittarius");
			document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Sagittarius";
			document.getElementById("titleDetails").innerHTML="November 22-December 21";
			document.getElementById("main-img").src="Sagittarius-icon.png";
                }
 		else if ((m.value == "December") && (d.value < 22))
		{

			//alert("Sagittarius");
			document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Sagittarius";
			document.getElementById("titleDetails").innerHTML="November 22 - December 21";
			document.getElementById("main-img").src="Sagittarius-icon.png";
		}
//-------------------------------------------------------------------------------------------//
//Capricorn Horoscope Dates (December 22-January 19)

	else if ((m.value == "December") && (d.value >= 22))
		{
			//alert("Capricorn");
			document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Capricorn";
			document.getElementById("titleDetails").innerHTML="December 22 - January 19";
			document.getElementById("main-img").src="Capricorn-icon.png";

		}

        else if (m.value == "December")
		{
			  if ((m.value=="December") &&(d.value >=22) && (d.value <= 31))
			  {
			 //alert("Capricorn");
			document.getElementById("top").style.background = "linear-gradient(#00e867,#009B2C)";
			document.getElementById("titleInfo").style.color="white";
			document.getElementById("titleDetails").style.color="whitesmoke";
			document.getElementById("titleInfo").innerHTML="Capricorn";
			document.getElementById("titleDetails").innerHTML="December 22 - January 19";
			document.getElementById("main-img").src="Capricorn-icon.png";
			  }
			  else
			  	alert("Oops! Somethings not right...")
		}

	}
