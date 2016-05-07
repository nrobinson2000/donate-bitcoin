# Donate bitcoin

A html plugin to allow people to donate bitcoin to a specified address.


Embed with:
```
<iframe style="border:none;" src="donate-bitcoin/index.html" height="130px" width="400px"></iframe>
```

Configuration: (inside of index.js)
```
var address = "PUT_ADDRESS_HERE"; // The bitcoin address to receive donations. Change to yours
var popup = false; // Set to true if you want a popup to pay bitcoin
var currency_code = "USD"; // Change to your preferred currency code. Choose from https://api.bitcoinaverage.com/ticker/
```
