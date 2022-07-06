// @hint all strings go with single quotes in ExtJS
Ext.define("CodeReview.view.reviewOne.ReviewOneViewController", {
  extend: "Ext.app.ViewController",
  // @hint remove empty line before alias

  alias: "controller.reviewOne",

  // @hint to be 100% correct you have to get the PopUpWindow
  //     since you do not need it before this controller you do not use requires but uses
  //     otherwise the production build might fail
  uses: [
      'Codereview.view.reviewOne.ReviewOnePopupWindow'
  ],

  // @hint either use
  //    onClickbuttonSubmit() {
  //    onClickbuttonSubmit: function() {
  //    ide plugin from ExtJS  works best with the second usage
  onClickButtonSubmit: () => {
    // Getting the ViewModel and storing it in the variable vm
    // @hint switch ; => , for multiline variables declaration
    //       view = this.getView()
    //       vm = this.getViewModel()
    const view = this.up();
    vm = view.getViewModel();

    // Creating the popup with the parent viewmodel and displaying it in the view
    Ext.create("Codereview.view.reviewOne.ReviewOnePopupWindow", {
      // @hint here you are adding a viewModel.
      //     => no need for our dialog to add additonal VM data => do not add vm to view
      viewModel: { parent: vm },
    }).show();
  },

  onClickButtonReset: () => {
    // Resetting the value entered in the form
    // @hint  form = this.getView();
    this.up("form").getForm().reset();
  },

  onClickButtonPopupWindow: () => {
    // Getting the ViewModel and storing it in the variable vm
    // @hint window is not a child nor somewhere inline with the view
    //     add an id to the window and use Ext.getCmp(id) to find it.
    //     you are setting the parentVM to this.getViewModel()
    //     => the window will find the data from this view
    //     The window needs it's own controller, because
    //     => the window cannot access this controller
    //     => you do not want to duplicate this viewController (window does not need onClickButtonSubmit)
    const vm = this.up("window").getViewModel();

    // Setting the new values in the ViewModel
    vm.set("language.defaultButtonText", "Like");
    vm.set("form.defaultMessage", "Thanks Torsten");

    // Setting a new Icon of the button.
    // @hint this line will look for setIconCls in this controller
    //     the first arguments should be btn
    //     btn.setIconCls...
    this.setIconCls("fa fa-thumbs-up");

    // Closing the Popup window
    // @hint if this is in the viewController of the window
    //     this.getView().close();
    this.up("window").close();
  },
});
