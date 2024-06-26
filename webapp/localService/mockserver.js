sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function(MockServer, UriParameters) {
    'use strict';
    
    return {
        init: function () {
            // create 
            const oMockServer = new MockServer({
                rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
            })

            const oUriParameters = new UriParameters(window.location.href);

            // cinfigure mock server with a delay
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500
            });

            // simulate
            const sPath = "../localService";
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

            //start
            oMockServer.start()
        }
    }
});