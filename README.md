[![Slack Status](https://nrobinson2000.herokuapp.com/badge.svg)](https://nrobinson2000.herokuapp.com/)
[![Donate Bitcoin](https://img.shields.io/badge/donate-bitcoin-orange.svg)](https://nrobinson2000.github.io/donate-bitcoin)
# donate-bitcoin
###### Copyright (GPL) 2016  Nathan Robinson
A simple html plugin to allow people to donate the equivalent bitcoin amount of a donation of a chosen fiat currency.

[Click here for a Demo](http://nrobinson2000.github.io/donate-bitcoin/)

Embed with:
```
<iframe style="border:none;" src="donate-bitcoin/index.html" height="160px" width="400px"></iframe>
```
Or with qr code option:
```
<iframe style="border:none;" src="donate-bitcoin/index.html" height="460px" width="400px"></iframe>
```

Configuration: (inside of index.js)
```
var address = "PUT_ADDRESS_HERE"; // The bitcoin address to receive donations. Change to yours
var popup = false; // Set to true if you want a popup to pay bitcoin
var currency_code = "USD"; // Change to your default currency. Choose from https://api.bitcoinaverage.com/ticker/
var qrcode = true; // Set to false to disable qrcode
var link = true; // Set to false to disable generating hyperlink
var organization = "Example"; // Change to your organization name
```

# Uses:
* Link people to your donate-bitcoin page to let them chose how much Bitcoin to donate.
* Link people to your donate-bitcoin page with a set amount and specific currency for them to donate.  This is done by adding something like `?amount=100&currency=USD` to your url.  [Example](https://nrobinson2000.github.io/donate-bitcoin/?amount=100&currency=USD)

# Screenshot:
<p align="center">
<img src="http://i.imgur.com/ux15lhi.jpg" width="500px">
</p>

# Create a donation Button:
To create a cool button like this [![Donate Bitcoin](https://img.shields.io/badge/donate-$10-orange.svg)](https://nrobinson2000.github.io/donate-bitcoin/?amount=10), you can use the [shields.io](shields.io) api.
