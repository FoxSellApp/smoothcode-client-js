const generateHmac = require("./utils");

const isDashboardRequest = (requestHmac, clientSecret, shop) => {
    return generateHmac(clientSecret, shop) === requestHmac
}

const isWebhookRequest = (requestHmac, clientSecret, webhookData) => {
    const webhookStringData = JSON.stringify(webhookData);

    return generateHmac(clientSecret, webhookStringData) === requestHmac
}

exports.isDashboardRequest = isDashboardRequest
exports.isWebhookRequest = isWebhookRequest
