Ext.define("Codereview.view.reviewOne.ReviewOnePopupWindow", {
  extend: "Ext.window.Window",
  xtype: "reviewOnePopupWindow",

  // @hint you need a separate viewController here and no viewModel
  //     this would create another copy of the viewModel and changes in one would not affect the other viewModel
  controller: "reviewOne",
  viewModel: {
    type: "reviewOne",
  },

  bind: {
    title: "Hi {mentor}",
  },

  height: 200,
  width: 400,

  layout: "fit",
  closeAction: "destroy",

  items: {
    xtype: "component",
    padding: 9,
    bind: {
      html: `<h1>{form.defaultMessage}</h1>`,
    },
  },

  buttons: [
    {
      bind: {
        text: `{language.defaultButtonText}`,
      },
      listeners: {
        click: "onClickButtonPopupWindow",
      },
    },
  ],
});
