const app = require('./index');

(async () => {
    await app.handler({
        path: '/event/UserClientAuthorization',
        body: {
            data: {
                userId: "999e1fc1e5e04331b6e3669478f98bb0",
                clientId: "asaasassdsdasd",
                timestamp: "2023-04-23T08:26:28.953Z"
            }
        }
    });
})();

/*
{
    "callID": "258f117687a14a4f9fdf6675feca9fb6",
    "businessUnitId": "4_5UY26HunOhrQTyi_uRRsow",
    "applicationId": "HEHaafhm3beDBj93Fpv4_Q",
    "dataEventId": "HKI7O9HLeC3FjkEsIraxOA",
    "extensionPoint": "PreProcess",
    "data": {
        "userId": "b34e03c838994591a1bd1ca3e73a0e01",
        "clientId": "sg_2h7BSY6Ou1OlYAPrdFj0R",
        "timestamp": "2023-04-23T08:26:28.953Z"
    }
}
 */