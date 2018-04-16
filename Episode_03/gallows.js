var password = "Done is better than perfect";
password = password.toUpperCase();

var passwordLength = password.length;
var hiddenPassword = "";

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
		divContent = divContent + '<div class="letter">'+lettersOfAlphabet[i]+'</div>';
		if((i+1)%7==0)divContent = divContent + '<div style="clear:both;"></div>';
			
	}
		
	document.getElementById("alphabet").innerHTML = divContent;
	writePassword();
}
