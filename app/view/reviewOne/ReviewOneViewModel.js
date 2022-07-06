Ext.define("CodeReview.view.reviewOne.ReviewOneViewModel", {
  extend: "Ext.app.ViewModel",

  alias: "viewmodel.reviewOne",

  data: {
    form: {
      title: "CodeReview One",
      fieldLabel: "What are you thinking?",
      defaultMessage: "Foo",
    },

    language: {
      defaultButtonText: "Click & Find",
      resetButtonText: "Try New",
    },

    mentor: "Torsten",
  },
});
