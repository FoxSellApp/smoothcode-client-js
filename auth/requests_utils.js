const generateHmac = require("./utils");

const isDashboardRequest = (requestHmac, clientSecret, shop) => {
    return generateHmac(clientSecret, shop) === requestHmac
}

const isWebhookRequest = (requestHmac, clientSecret, webhookData) => {
    const webhookId = webhookData.id;

    return generateHmac(clientSecret, webhookId) === requestHmac
}

exports.isDashboardRequest = isDashboardRequest
exports.isWebhookRequest = isWebhookRequest
