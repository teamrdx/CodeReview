// @hint remove all trailing commas
//    indent is the same for all files => Good
//    if you company uses 2 thats fine. A rule of thumb would be
//    JS files 4 indentation
//    CSS files 2 indentation
Ext.define("CodeReview.view.reviewOne.ReviewOneViewModel", {
  extend: "Ext.app.ViewModel",
  // @hint remove empty line before alias

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
