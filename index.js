// donate-bitcoin Copyright (GPL) 2016  Nathan Robinson

var address = "PUT_ADDRESS_HERE"; // The bitcoin address to receive donations. Change to yours
var popup = false; // Set to true if you want a popup to pay bitcoin
var currency_code = "USD"; // Change to your preferred currency. Choose from https://api.bitcoinaverage.com/ticker/
var qrcode = false; // Set to true for qr code
var link = true; // Set to false to disable generating hyperlink

function httpGet(theUrl){var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", theUrl, false );xmlHttp.send( null );return xmlHttp.responseText;}

function donate(){
var currency = parseInt(document.getElementById("donatebox").value);
  var json = httpGet("https://api.bitcoinaverage.com/ticker/"+currency_code+"/");  // Get bitcoin price
  var obj = JSON.parse(json);
  var bitcoin_price = obj.ask;
  var finalexchange = (currency / bitcoin_price).toFixed(8);
  var url = "bitcoin:"+ address +"?amount=" + finalexchange;
if (link == true){document.getElementById("donatetext").innerHTML ="<br><a href='"+ url + "'> Please send " + finalexchange.toString() + " Bitcoin to " + address + "</a>";}
if (popup == true){window.open(url);}
if (qrcode == true){document.getElementById("qrcode").innerHTML = "";}
if (qrcode == true){$('#qrcode').qrcode(url);}
console.log(url);}

function setCurrency(){document.getElementById("donatebutton").value = "Donate "+currency_code;}
