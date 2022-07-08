Ext.define('CodeReview.view.reviewOne.ReviewOneViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.reviewOne',

  uses: ['Codereview.view.reviewOne.ReviewOnePopupWindow'],

  onClickButtonSubmit: function (btn) {
    // Getting the ViewModel and storing it in the variable vm
    const view = this.getView();

    // Getting the Values of the form
    whatYouThink = view.getForm().getValues().whatYouThink;

    console.log(whatYouThink);

    // Setting the new values in the ViewModel
    this.getViewModel().set('language.defaultButtonText', 'Thanks');

    // Setting the new values in the ViewModel from the new textfield
    this.getViewModel().set('form2.whatDoYouThink', whatYouThink);

    // Setting new button Icon
    btn.setIconCls('fa fa-thumbs-up');

    // Creating the popup with the parent viewmodel and displaying it in the view
    Ext.create('Codereview.view.reviewOne.ReviewOnePopupWindow', {
      viewModel: { parent: this.getViewModel() }
    });
  },

  onClickButtonReset: function (btn) {
    // Getting the view and ViewModel
    const view = this.getView();

    // Resetting the value entered in the form
    view.getForm().reset();

    // Resetting the old values in the ViewModel
    this.getViewModel().set('language.defaultButtonText', 'Click & Find');
  }
});
