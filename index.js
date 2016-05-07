var address = "PUT_ADDRESS_HERE"; // The bitcoin address to receive donations. Change to yours
var popup = false; // Set to true if you want a popup to pay bitcoin

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function donate()
{
  var dollars = parseInt(document.getElementById("donatebox").value);
  var json = httpGet("https://api.bitcoinaverage.com/ticker/USD/");  // Get bitcoin price
  var obj = JSON.parse(json);
  var bitcoin_price = obj.ask;
  var finalexchange = dollars / bitcoin_price;
  finalexchange = finalexchange.toFixed(8);
  var url = "bitcoin:"+ address +"?amount=" + finalexchange;
console.log(finalexchange);
document.getElementById("donatetext").innerHTML ="<br><a href='"+ url + "'> Please send " + finalexchange.toString() + " Bitcoin to " + address + "</a>";

if (popup == true){window.open(url);}
}
