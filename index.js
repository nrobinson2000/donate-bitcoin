// donate-bitcoin Copyright (GPL) 2016  Nathan Robinson

var address = "15EQPm5BFGbxkqjqAoZKhapwShTtzap9aj?"; // The bitcoin address to receive donations. Change to yours
var popup = false; // Set to true if you want a popup to pay bitcoin
var currency_code = "USD"; // Change to your default currency. Choose from https://api.bitcoinaverage.com/ticker/
var qrcode = true; // Set to false to disable qrcode
var link = true; // Set to false to disable generating hyperlink
var organization = "Nathan Robinson"; // Change to your organization name

var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');
    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

if (params.currency){currency_code = params.currency;}
console.log(params.amount);
console.log(currency_code);

function httpGet(theUrl){var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", theUrl, false );xmlHttp.send( null );return xmlHttp.responseText;}

function donate()
{
if (params.amount) {var currency_value = params.amount;}
else {var currency_value = parseInt(document.getElementById("donatebox").value);}
var json = httpGet("https://api.bitcoinaverage.com/ticker/"+currency_code+"/");  // Get bitcoin price
var obj = JSON.parse(json);
var bitcoin_price = obj.ask;
var finalexchange = (currency_value / bitcoin_price).toFixed(5);
var url = "bitcoin:"+ address +"?amount=" + finalexchange;
if (link == true){document.getElementById("donatetext").innerHTML ="<br><a href='"+ url + "'> Please send " + finalexchange.toString() + " Bitcoin to " + address + "</a>";}
if (popup == true){window.open(url);}
if (qrcode == true){document.getElementById("qrcode").innerHTML = "";}
if (qrcode == true){$('#qrcode').qrcode(url);}
console.log(url);
}

function setCurrency(){document.getElementById("donationbutton").src = 'https://img.shields.io/badge/donate-' + currency_code + '-brightgreen.svg?style=flat-square';}

$(document).keyup(function (e) {
    if ($(".input1:focus") && (e.keyCode === 13)) {
       donate();
    }
 });
