Ext.define("CodeReview.view.reviewOne.ReviewOneViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.reviewOne",

  onClickButtonSubmit: () => {
    // Getting the ViewModel and storing it in the variable vm
    const view = this.up();
    vm = view.getViewModel();

    // Creating the popup with the parent viewmodel and displaying it in the view
    Ext.create("Codereview.view.reviewOne.ReviewOnePopupWindow", {
      viewModel: { parent: vm },
    }).show();
  },

  onClickButtonReset: () => {
    // Resetting the value entered in the form
    this.up("form").getForm().reset();
  },

  onClickButtonPopupWindow: () => {
    // Getting the ViewModel and storing it in the variable vm
    const vm = this.up("window").getViewModel();

    // Setting the new values in the ViewModel
    vm.set("language.defaultButtonText", "Like");
    vm.set("form.defaultMessage", "Thanks Torsten");

    // Setting a new Icon of the button.
    this.setIconCls("fa fa-thumbs-up");

    // Closing the Popup window
    this.up("window").close();
  },
});
