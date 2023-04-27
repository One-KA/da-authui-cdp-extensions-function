const config = require('../config');
const axios = require('axios');

const cdpAppClient = axios.create({
    baseURL: `${config.cdpBaseUrl}/businessunits/${config.businessUnitId}/applications/${config.applicationId}`
});

module.exports = cdpAppClient;