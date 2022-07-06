// Did not understand it
// @hint no need to add view/viewModel/viewController for alias

Ext.define("CodeReview.view.reviewOne.ReviewOneView", {
  extend: "Ext.form.Panel",
  xtype: "reviewOne",

  requires: [
    "CodeReview.view.reviewOne.ReviewOneViewModel",
    "CodeReview.view.reviewOne.ReviewOneViewController",
  ],

  controller: "reviewOne",
  viewModel: {
    type: "reviewOne",
  },

  bind: {
    title: "{form.title}",
  },

  layout: "vbox",
  defaults: {
    width: 600,
  },

  items: [
    {
      xtype: "textfield",
      bind: {
        fieldLabel: "{form.fieldLabel}",
        emptyText: "{form.defaultMessage}",
      },
      labelWidth: 150,
      name: "whatYouThink",
      margin: "15 0",
      allowBlank: false,
    },
  ],

  buttons: [
    {
      bind: {
        text: "{language.resetButtonText}",
      },
      listeners: {
        click: "onClickButtonReset",
      },
    },
    {
      bind: {
        text: "{language.defaultButtonText}",
      },
      formBind: true,
      disabled: true,
      listeners: {
        click: "onClickButtonSubmit",
      },
    },
  ],

  listeners: {},
});
