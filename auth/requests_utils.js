const generateHmac = require("./utils");

const isDashboardRequest = (requestHmac, clientSecret, shop) => {
    return generateHmac(clientSecret, shop) === requestHmac
}

const isWebhookRequest = (requestHmac, clientSecret, webhookData) => {
    const webhookId = webhookData.id.toString();

    return generateHmac(clientSecret, webhookId) === requestHmac
}

const isGDPRWebhookRequest = (requestHmac, clientSecret, webhookData) => {
    const shopId = webhookData.shop_id.toString();

    return generateHmac(clientSecret, shopId) === requestHmac
}

exports.isDashboardRequest = isDashboardRequest
exports.isWebhookRequest = isWebhookRequest
exports.isGDPRWebhookRequest = isGDPRWebhookRequest
