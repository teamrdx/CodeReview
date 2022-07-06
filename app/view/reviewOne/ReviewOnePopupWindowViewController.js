Ext.define('CodeReview.view.reviewOne.ReviewOnePopupWindowViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.reviewOnePopupWindow',

  uses: ['Codereview.view.reviewOne.ReviewOnePopupWindow'],

  onClickButtonPopupWindow: function () {
    // Getting the Popup window
    // var window = Ext.getCmp('#reviewOnePopupWindow');

    // Closing the Popup window
    this.getView().close();
  }
});
