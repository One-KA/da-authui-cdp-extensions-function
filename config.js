const dotenv = require('dotenv');
dotenv.config({ path: `./.env` });

const config = {
    cdpBaseUrl: process.env.CDP_BASE_URL,
    userKey: process.env.USER_KEY,
    secret: process.env.SECRET,
    businessUnitId: process.env.BUSINESS_UNIT_ID,
    applicationId: process.env.APPLICATION_ID,
    viewId: process.env.VIEW_ID,
    firstPartyAppAddedExtensionEventId: process.env.FIRST_PARTY_APP_ADDED_EXTENSION_EVENT_ID
}

module.exports = config;