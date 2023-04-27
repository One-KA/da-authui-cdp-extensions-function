const config = require('../config');
const cdpAppClient = require('../http-clients/cdp-app-client');
const cdpApiUtils = require('../cdp-api-utils');

const handleUserClientAuthorizationEvent = async(payload) => {
    const payloadClientId = payload.data.clientId;
    const payloadUserId = payload.data.userId;
    const payloadTimestamp = payload.data.timestamp;

    const profile = await cdpApiUtils.getCustomerProfileByCiamId(payloadUserId);

    let clientExists = false;

    if (profile.attributes.firstPartyApps) {
        profile.attributes.firstPartyApps.every((firstPartyApp) => {
            if (firstPartyApp.clientId === payloadClientId) {
                clientExists = true;
                return false;
            }
        });
    }

    if (!clientExists) {
        await cdpAppClient.post(`/dataevents/${config.firstPartyAppAddedExtensionEventId}/event`, {
            clientId: payloadClientId,
            createdAt: payloadTimestamp,
            userId: payloadUserId
        }, {
            params: {
                userKey: config.userKey,
                secret: config.secret
            }
        });
    }
}

module.exports = handleUserClientAuthorizationEvent;