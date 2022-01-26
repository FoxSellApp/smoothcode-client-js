# SmoothCode Client JS

## Introduction
JS Client that exposes utility functions to authenticate SmoothCode requests

## Installation
```shell
npm i smoothcode-client
```

## Usage
This library exposes 2 methods
* `isDashboardRequest(requestHmac, clientSecret, shop)` - This method verifies if the request for accessing the dashboard is coming from `SmoothCode`
```javascript
const smoothcode = require('smoothcode-client')

// SmoothCode sends query parameters to the URL
// shop -> Shopify Shop in the form: `test.myshopify.com`
// hmac -> HMAC of the shop signed by your App Client Secret (can be obtained from SmoothCode Dashboard in App Settings)

smoothcode.isDashboardRequest(requestHmac, clientSecret, shop) // returns True if the request is valid
```

* `isWebhookRequest(requestHmac, clientSecret, webhookData)` - This method verifies if the webhook request is coming from `SmoothCode`
```javascript
const smoothcode = require('smoothcode-client')

// SmoothCode sends hmac in the Authorization Header of the request
// It is hmac of the webhook id signed by your App Client Secret

smoothcode.isWebhookRequest(requestHmac, clientSecret, webhookData) // returns True if the request is valid
```
***
