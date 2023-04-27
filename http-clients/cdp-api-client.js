const config = require('../config');
const axios = require('axios');

const cdpApiClient = axios.create({
    baseURL: `${config.cdpBaseUrl}/businessunits/${config.businessUnitId}/views/${config.viewId}`
});

module.exports = cdpApiClient;