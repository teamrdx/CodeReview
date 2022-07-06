Ext.define('CodeReview.view.reviewOne.ReviewOneViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.reviewOne',

  uses: ['Codereview.view.reviewOne.ReviewOnePopupWindow'],

  onClickButtonSubmit: function (btn) {
    // Getting the ViewModel and storing it in the variable vm
    var view = this.getView(),
      vm = view.getViewModel();

    // Getting the Values of the form
    var { whatYouThink } = view.getForm().getValues();

    // Setting the new values in the ViewModel
    vm.set('language.defaultButtonText', 'Thanks');
    vm.set('form.defaultMessage', whatYouThink);

    // Setting new button Icon
    btn.setIconCls('fa fa-thumbs-up');

    // Creating the popup with the parent viewmodel and displaying it in the view
    Ext.create('Codereview.view.reviewOne.ReviewOnePopupWindow', {
      viewModel: { parent: vm }
    }).show();
  },

  onClickButtonReset: function (btn) {
    // Getting the view and ViewModel
    var view = this.getView(),
      vm = view.getViewModel();

    // Resetting the value entered in the form
    view.getForm().reset();

    // Resetting the old values in the ViewModel
    vm.set('language.defaultButtonText', 'Click & Find');
    vm.set('form.defaultMessage', 'Foo');
  }
});
