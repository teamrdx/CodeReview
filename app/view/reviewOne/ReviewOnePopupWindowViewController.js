Ext.define('CodeReview.view.reviewOne.ReviewOnePopupWindowViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.reviewOnePopupWindow',

  uses: ['Codereview.view.reviewOne.ReviewOnePopupWindow'],

  onClickButtonPopupWindow: function () {
    // Closing the Popup window
    this.getView().close();
  }
});
