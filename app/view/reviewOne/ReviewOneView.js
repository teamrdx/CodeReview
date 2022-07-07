// @hint all strings go with single quotes in ExtJS
Ext.define('CodeReview.view.reviewOne.ReviewOneView', {
    extend: 'Ext.form.Panel',
    xtype: 'reviewOne',

    requires: [
        'CodeReview.view.reviewOne.ReviewOneViewModel',
        'CodeReview.view.reviewOne.ReviewOneViewController'
    ],

    viewModel: {type: 'reviewOne'},
    controller: 'reviewOne',

    bind: {title: '{form.title}'},

    layout: 'vbox',
    defaults: {width: 600},
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

            value: 'foo',
            bind: {
                value: '{form.whatYouThink}',
                fieldLabel: '{form.fieldLabel}',
                emptyText: '{form.defaultMessage}'
            }
        }
    ],

    buttons: [
        {
            bind: {text: '{language.resetButtonText}'},
            listeners: {
                click: 'onClickButtonReset'
            }
        },
        {
            formBind: true,
            disabled: true,
            bind: {text: '{language.defaultButtonText}'},
            listeners: {
                click: 'onClickButtonSubmit'
            }
        }
    ]
    // @hint no need for an empty listeners object
});
