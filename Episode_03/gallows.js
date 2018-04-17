var password = "Done is better than perfect";
password = password.toUpperCase();

var passwordLength = password.length;
var hiddenPassword = "";
var numberOfMistakes =0;

for (i=0;i<passwordLength;i++)
{
	if(password.charAt(i)==" ") hiddenPassword = hiddenPassword + " ";
	else hiddenPassword = hiddenPassword + "-";
}

window.onload = startApp;

function writePassword()
{
	document.getElementById("board").innerHTML = hiddenPassword;
	
}

var lettersOfAlphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ".split('');

function startApp()
{
	var divContent ="";
	
	for(i=0;i<35;i++)
	{
		var divName = "letter"+i; 
		divContent = divContent + '<div class="letter" onclick="checkLetter('+i+')" id="'+divName+'" >'+lettersOfAlphabet[i]+'</div>';
		if((i+1)%7==0)divContent = divContent + '<div style="clear:both;"></div>';
			
	}
		
	document.getElementById("alphabet").innerHTML = divContent;
	writePassword();
}

String.prototype.changeCharacter = function (place, character)
{
	if (place > this.length-1) return this.toString();
	else return this.substr(0, place) + character + this.substr(place + 1);
}


function checkLetter(number)
{
	var hitLetter = false;
	
	
	for(i=0;i<passwordLength;i++)
	{
		if(password.charAt(i) == lettersOfAlphabet[number])
		{
			hiddenPassword = hiddenPassword.changeCharacter(i, lettersOfAlphabet[number]);
			hitLetter = true;
		}
	}
	
	if(hitLetter == true)
	{
		var divName = "letter"+number;
		
		document.getElementById(divName).style.background = "#009900";
		document.getElementById(divName).style.color = "#ccff99";
		document.getElementById(divName).style.border = "3px solid #006600";
		document.getElementById(divName).style.cursor = "default";
		
		
		writePassword();
	}
	else
	{
		var divName = "letter"+number;
		document.getElementById(divName).style.background = "#cc0033";
		document.getElementById(divName).style.color = "#ffccff";
		document.getElementById(divName).style.border = "3px solid #660033";
		document.getElementById(divName).style.cursor = "default";
		
		numberOfMistakes++;
		var imageName = "img/s"+numberOfMistakes+".jpg";
		
		document.getElementById("gallows").innerHTML = '<img src="'+imageName+'"/>';
	}
	
	if(password==hiddenPassword)
	{
		document.getElementById("alphabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+password+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
	if(numberOfMistakes>=9)
	{	
		document.getElementById("alphabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+password+'<br /><br /><span class="reset" onclick="location.reload() ">JESZCZE RAZ?</span>';
		
	}
	
}