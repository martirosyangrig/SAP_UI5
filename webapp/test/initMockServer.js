sap.ui.define([
    "../localService/mockserver"
], function(mockserver) {
    'use strict';
    
    // init the mock server
    mockserver.init();

    // init the embedded component on the HTMl page
    sap.ui.require(["sap/ui/core/ComponentSupport"])
});