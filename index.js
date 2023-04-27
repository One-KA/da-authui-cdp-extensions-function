const handleUserClientAuthorizationEvent = require('./event-handlers/user-client-authorization-event');

module.exports.handler = async(event) => {
    switch (event.path) {
        case '/event/UserClientAuthorization':
            await handleUserClientAuthorizationEvent(event.body);
            break;
    }
    return {};
};