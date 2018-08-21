# Change Log


## 0.0.18 *(August 21, 2018)*
- Fix some overzealous type highlighting.
- Start work on v0.1.0.

## 0.0.17 *(August 20, 2018)*
- Improved highlighting for pointer operators (`*`/`&`).
- Testing improvements for parameter type highlighting.

## 0.0.16 *(August 19, 2018)*
- Fix comments for GoHTML files.
- Address [Issue #2](https://github.com/dunstontc/vscode-go-syntax/issues/2) regarding `map` keyword highlighting.
- Highlight types in channel declarations.
- Improve highlighting for types in variable declarations.
- Improve highlighting for struct definitions.
- Improved patterns for matching `*` (*keyword.operator.pointer.go* & *keyword.operator.arithmetic.go*)

## 0.0.15 *(August 17, 2018)*
- Add initial support for templates.

## 0.0.14 *(August 17, 2018)*
- Highlight variables including (but not starting with) numbers.

## 0.0.13 *(August 17, 2018)*
- Highlight channels as variables.
- Highlight incremented/decremented values as variables.
- Add dates to changelog.

## 0.0.12 *(August 16, 2018)*
- Improved highlighting for function arguments.

## 0.0.11 *(August 16, 2018)*
- Fix highlighting for types using dot notation in variable declarations (`var wg sync.WaitGroup`).

## 0.0.10 *(August 14, 2018)*
- Highlight variable indexing (`x[n]`).
- *Improvements* to variable highlighting.
- Add items to todo.txt.

## 0.0.9 *(August 13, 2018)*
- Highlight custom types in variable declarations.

## 0.0.8 *(August 13, 2018)*
- Improve receiver highlighting.

## 0.0.7 *(August 13, 2018)*
- Improve type highlighting.
- Highlight receivers.

## 0.0.6 *(August 9, 2018)*
- Improve type highlighting.

## 0.0.5 *(August 9, 2018)*
- Fix issue with incorrect keyword highlighting.

## 0.0.4 *(August 9, 2018)*
- Highlight more variables.
- Highlight struct names as *entity.name.type.struct.go*

## 0.0.3  *(August 9, 2018)*
- Highlight pointers & addresses as variables.
- Improve highlighting for blank identifiers.

## 0.0.2 *(August 8, 2018)*
- Define `_` as *variable.other.blank.go*.
- Start work on improved param highlighting.

## 0.0.1 *(August 7, 2018)*
- Currently supports the same highlighting as VSCode's default Go support.
