# donate-bitcoin
###### Copyright (GPL) 2016  Nathan Robinson
A simple html plugin to allow people to donate the equivalent bitcoin amount of a donation of a chosen fiat currency.

[Click here for a Demo](http://nrobinson2000.github.io/donate-bitcoin/)

Embed with:
```
<iframe style="border:none;" src="donate-bitcoin/index.html" height="150px" width="400px"></iframe>
```
Or with qr code option:
```
<iframe style="border:none;" src="donate-bitcoin/index.html" height="450px" width="400px"></iframe>
```

Configuration: (inside of index.js)
```
var address = "PUT_ADDRESS_HERE"; // The bitcoin address to receive donations. Change to yours
var popup = false; // Set to true if you want a popup to pay bitcoin
var currency_code = "USD"; // Change to your preferred currency. Choose from https://api.bitcoinaverage.com/ticker/
var qrcode = false; // Set to true for qr code
var link = true; // Set to false to disable generating hyperlink
```
