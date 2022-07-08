Ext.define('Codereview.view.reviewOne.ReviewOnePopupWindow', {
  extend: 'Ext.window.Window',
  xtype: 'reviewOnePopupWindow',

  controller: 'reviewOnePopupWindow',

  bind: { title: 'Hi {mentor}' },

  height: 200,
  width: 400,

  closeAction: 'destroy',
  autoShow: true,

  layout: 'fit',
  items: {
    xtype: 'component',
    padding: 9,
    bind: { html: `<h1>{form.defaultMessage}</h1>` }
  },

  buttons: [
    {
      text: 'Close',
      listeners: {
        click: 'onClickButtonPopupWindow'
      }
    }
  ]
});
