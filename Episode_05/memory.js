var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

cards = shuffle(cards);

var c=[];

for (var i=0; i<12; i++)
{
    (function(i)
    {
        c[i] = document.getElementById("c"+i);
        c[i].addEventListener("click", function() { revalCard(i); });
    }(i));
}


var oneVisible = false;
var turnCounter = 0;
var visibleCardNumber;
var lockCard = false;
var pairsLeft = 6;

function revalCard(number)
{
    var opacityValue = $("#c"+number).css("opacity");

    if(opacityValue != 0 && lockCard == false)
    {
        lockCard = true;
        var image = "url(img/" + cards[number] + ")";
    
        $("#c"+number).css("background-image", image);
        $("#c"+number).addClass("cardActive");
        $("#c"+number).removeClass("card");
        
        if(oneVisible == false)
        {
            //first card
            oneVisible = true;
            visibleCardNumber = number;
            lockCard = false;
        }
        else
        {   
            //second card
            if(cards[number] == cards[visibleCardNumber] && visibleCardNumber != number)
            {
                setTimeout(function() { hideTwoCards(number, visibleCardNumber) }, 500);
            }
            else
            {
                setTimeout(function() { hideImageTwoCards(number, visibleCardNumber) }, 1000);
            }

            turnCounter++;
            $(".score").html("Turn counter: " + turnCounter);
            oneVisible = false;
        }   
    }
}

function hideTwoCards(number1, number2)
{
    $("#c"+number1).css('opacity', '0');
    $("#c"+number2).css('opacity', '0');
    pairsLeft--;
    
    if(pairsLeft==0)
    {
        $(".board").html("<h1>You win!<br>Done in "+ turnCounter + " turns</h1>");
        $(".board").css("color", "#E9B64A");
    }

    lockCard = false;
}

function hideImageTwoCards(number1, number2)
{
    $("#c"+number1).css("background-image", "url(img/gwent.png)");
    $("#c"+number1).addClass("card");
    $("#c"+number1).removeClass("cardActive");

    $("#c"+number2).css("background-image", "url(img/gwent.png)");
    $("#c"+number2).addClass("card");
    $("#c"+number2).removeClass("cardActive");

    lockCard = false;
}

//random location of cards
function shuffle(array)
{
    var currentIndex = array.length, temporaryValue, randomIndex;

    while( 0 != currentIndex)
    {
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex --;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function resetSketch()
{
    
}