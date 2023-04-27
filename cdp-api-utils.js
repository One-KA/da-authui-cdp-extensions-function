const config = require('./config');
const cdpApiClient = require('./http-clients/cdp-api-client');

const getCustomerProfileByCiamId = async (ciamId) => {
    const params = {
        query: `SELECT * FROM profile WHERE attributes.ciamId = "${ciamId}"`,
        purposeIds: 'operational',
        userKey: config.userKey,
        secret: config.secret
    };

    const response = await cdpApiClient.get('/customers', {
        params: params
    })

    return response.data.profiles[0];
}

module.exports = {
    getCustomerProfileByCiamId
}