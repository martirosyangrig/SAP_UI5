sap.ui.define(
    [
        "sap/ui/core/mvc/Controller", 
        "sap/m/MessageToast",
        "sap/ui/core/Fragment"
    ],
    function (Controller, MessageToast, Fragment) {
        "use strict";

        return Controller.extend(
            "sap.ui.demp.walkthrough.controller.HelloPanel",
            {
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

                onOpenDialog: function () {
                    const oView = this.getView();

                    //create the dialog lazily
                    if (!this.byId("helloDialog")) {
                        // load async XML fragment
                        Fragment.load({
                            id: oView.getId(),
                            name: "sap.ui.demo.walkthrough.view.HelloDialog",
                            controller: this
                        }).then(function (oDialog) {
                            //  connect dialog to the root view of this component (models, lifecycle)
                            oView.addDependent(oDialog);
                            oDialog.open()
                        })
                    } else {
                        this.byId("helloDialog").open();
                    }
                },
            }
        );
    }
);
