// @hint all strings go with single quotes in ExtJS
Ext.define('CodeReview.view.reviewOne.ReviewOneView', {
  extend: 'Ext.form.Panel',
  xtype: 'reviewOne',

  requires: [
    'CodeReview.view.reviewOne.ReviewOneViewModel',
    'CodeReview.view.reviewOne.ReviewOneViewController'
  ],

  viewModel: { type: 'reviewOne' },
  controller: 'reviewOne',

  bind: { title: '{form.title}' },

  layout: 'vbox',
  defaults: { width: 600 },
  items: [
    {
      // @hint the important one for fields is `name`
      //     first goes the xtype, second the important config (id, title, text, name)
      //     then custom configs (self made configs)
      //     then configs (string, int, boolean)
      //     then configs (object) single line
      //     then configs (object) multi line
      //     last listeners
      xtype: 'textfield',
      name: 'whatYouThink',

      labelWidth: 150,
      margin: '15 0',
      allowBlank: false,
      minLength: 12,

      // value: 'foo',
      bind: {
        value: '{form.whatYouThink}',
        fieldLabel: '{form.fieldLabel}'
        // emptyText: '{form.defaultMessage}'
      }
    },
    {
      xtype: 'textfield',
      name: 'test',

      labelWidth: 150,
      margin: '15 0',
      allowBlank: false,

      value: 'Test'
    }
  ],

  buttons: [
    {
      bind: { text: '{language.resetButtonText}' },
      listeners: {
        click: 'onClickButtonReset'
      }
    },
    {
      bind: { text: '{language.defaultButtonText}' },
      cls: 'submit-button',
      formBind: true,
      disabled: true,
      listeners: {
        click: 'onClickButtonSubmit'
      }
    }
  ]
});
