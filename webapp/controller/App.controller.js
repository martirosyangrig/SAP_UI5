sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
    ],
    function (Controller, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("sap.ui.demo.walkthrough.App", {
            onInit: function () {
                // set the data model on the view

                const oData = {
                    recipient: {
                        name: "UI5",
                    },
                };

                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                // set i18n model on view
                const i18nModel = new ResourceModel({
                    bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                    supportedLocales: [""],
                    fallbackLocale: "",
                });

                this.getView().setModel(i18nModel, "i18n");
            },

            onShowHello: function () {
                // read msg from i18n model
                const oBundle = this.getView()
                    .getModel("i18n")
                    .getResourceBundle();
                const sRecipient = this.getView()
                    .getModel()
                    .getProperty("/recipient/name");
                const sMsg = oBundle.getText("helloMsg", [sRecipient]);

                // Show a native or vanilla JS alert
                MessageToast.show(sMsg);
            },
        });
    }
);
