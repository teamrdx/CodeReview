# CodeReview

### Difference between `var`, `let` & `const` in Javascript

| var                                       | let                                       | const                                  |
| ----------------------------------------- | ----------------------------------------- | -------------------------------------- |
| Globally scoped                           | Block scoped                              | Block scoped                           |
| Can be updated and re-declared            | Can be updated but not re-declared        | Neither be updated nor be re-declared  |
| Initialized with `undefined`              | Not initialized                           | Not Initialized                        |
| Can be declared without being initialized | Can be declared without being initialized | Must be initialized during declaration |

_So for our project, we need mostly `const` for constants like view and viewmodels and let for other operational variables in our controller_

### How `name` fields works

`name` _ field is used to identify the textfeild used in the form panel. The value captured in that textfield is stored in that ´name´ field, which is used later for that data processing in the controller._

### Why `.show()` is dropped ?

_I think `.show()` is not required as Extjs automatically shows the Popup after creating it._

### Why I set `value` in addition to `bind.value` ?

_The `value` field is to display current/default value and `bind.value` is to bind the value from viewModel if availiable._
