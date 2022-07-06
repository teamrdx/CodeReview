// @hint all strings go with single quotes in ExtJS
Ext.define("CodeReview.view.reviewOne.ReviewOneView", {
  extend: "Ext.form.Panel",
  xtype: "reviewOne",

  requires: [
    "CodeReview.view.reviewOne.ReviewOneViewModel",
    "CodeReview.view.reviewOne.ReviewOneViewController",
  ],

  controller: "reviewOne",
  // @hint make it 1 line only and trailing comma, place it above controller
  viewModel: {
    type: "reviewOne",
  },

  // @hint make it 1 line only and trailing comma
  bind: {
    title: "{form.title}",
  },

  layout: "vbox",
  // @hint make it 1 line only and trailing comma
  defaults: {
    width: 600,
  },
  // @hint no empty line

  items: [
    {
      xtype: "textfield",
      bind: {
        fieldLabel: "{form.fieldLabel}",
        // @hint trailing comma
        emptyText: "{form.defaultMessage}",
      },
      labelWidth: 150,
      name: "whatYouThink",
      margin: "15 0",
      // @hint trailing comma
      allowBlank: false,
      // @hint trailing comma
    },
  ],

  buttons: [
    {
      // @hint make bind only single line, while there is only a single item inside
      bind: {
        text: "{language.resetButtonText}",
      },
      listeners: {
        click: "onClickButtonReset",
        // @hint trailing comma
      },
    },
    {
      // @hint make bind only single line, while there is only a single item inside
      bind: {
        text: "{language.defaultButtonText}",
      },
      formBind: true,
      disabled: true,
      // @hint good: only listeners are going multi line, even when there is only a single listener inside
      listeners: {
        click: "onClickButtonSubmit",
        // @hint trailing comma
      },
      // @hint trailing comma
    },
  ],

  listeners: {},
});
