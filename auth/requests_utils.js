import generateHmac from "./utils";

export const isDashboardRequest = (requestHmac, clientSecret, shop) => {
    return generateHmac(clientSecret, shop) === requestHmac
}

export const isWebhookRequest = (requestHmac, clientSecret, webhookData) => {
    const webhookStringData = JSON.stringify(webhookData);

    return generateHmac(clientSecret, webhookStringData) === requestHmac
}
