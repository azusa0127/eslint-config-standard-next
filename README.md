# eslint-config-standard-next
An opinionated linting configuration based on StandardJS with ESNext rules ready.


## Diff from `eslint-config-standard`
#### Force semi-colons `;`

* [semi](https://eslint.org/docs/rules/semi) : ["error","always"]
* [semi-style](https://eslint.org/docs/rules/semi-style) : "error"

#### No space before function parens `function foo()`
* [space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren) : ["error", "never"]

#### Allows ES6 trailing commas
* [comma-dangle](https://eslint.org/docs/rules/comma-dangle) : ['error', 'only-multiline']

## Extenstion to `eslint-config-standard`
* Object Spread `const a = {...b, ...c}` (*Should be used with `-harmony` flag*)
* [array-callback-return](https://eslint.org/docs/rules/array-callback-return) : "warn"
* [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style) : ["error","as-needed"]
* [arrow-parens](https://eslint.org/docs/rules/arrow-parens) : ["error","as-needed"]
* [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var) : "warn"
* [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this) : "error"
* [computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing) : ["error","never"]
* [consistent-return](https://eslint.org/docs/rules/consistent-return) : "error"
* [dot-notation](https://eslint.org/docs/rules/dot-notation) : "warn"
* [for-direction](https://eslint.org/docs/rules/for-direction) : "warn"
* [global-require](https://eslint.org/docs/rules/global-require) : "warn"
* [guard-for-in](https://eslint.org/docs/rules/guard-for-in) : "warn"
* [linebreak-style](https://eslint.org/docs/rules/linebreak-style) : ["warn","unix"]
* [newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call) : ["error",{"ignoreChainWithDepth":3}]
* [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations) : "warn"
* [no-continue](https://eslint.org/docs/rules/no-continue) : "warn"
* [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports) : ["error",{"includeExports":true}]
* [no-else-return](https://eslint.org/docs/rules/no-else-return) : "warn"
* [no-empty-function](https://eslint.org/docs/rules/no-empty-function) : "error"
* [no-eq-null](https://eslint.org/docs/rules/no-eq-null) : "off"
* [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion) : "warn"
* [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this) : "error"
* [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if) : "warn"
* [no-loop-func](https://eslint.org/docs/rules/no-loop-func) : "error"
* [no-mixed-requires](https://eslint.org/docs/rules/no-mixed-requires) : ["error",{"grouping":true,"allowCall":true}]
* [no-negated-condition](https://eslint.org/docs/rules/no-negated-condition) : "warn"
* [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign) : ["warn",{"props":false}]
* [no-script-url](https://eslint.org/docs/rules/no-script-url) : "error"
* [no-shadow](https://eslint.org/docs/rules/no-shadow) : ["warn",{"builtinGlobals":true,"hoist":"all"}]
* [no-undefined](https://eslint.org/docs/rules/no-undefined) : "off"
* [no-var](https://eslint.org/docs/rules/no-var) : "warn"
* [no-void](https://eslint.org/docs/rules/no-void) : "error"
* [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments) : ["warn",{"location":"start","terms":["todo","fixme"]}]
* [object-shorthand](https://eslint.org/docs/rules/object-shorthand) : ["error","always",{"avoidExplicitReturnArrows":true,"avoidQuotes":true}]
* [one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line) : "error"
* [operator-assignment](https://eslint.org/docs/rules/operator-assignment) : ["warn","always"]
* [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback) : "error"
* [prefer-const](https://eslint.org/docs/rules/prefer-const) : ["error",{"destructuring":"all"}]
* [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring) : "warn"
* [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals) : "warn"
* [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params) : "warn"
* [prefer-spread](https://eslint.org/docs/rules/prefer-spread) : "warn"
* [prefer-template](https://eslint.org/docs/rules/prefer-template) : "error"
* [quote-props](https://eslint.org/docs/rules/quote-props) : ["error","as-needed"]
* [sort-imports](https://eslint.org/docs/rules/sort-imports) : ["error",{"ignoreCase":true,"ignoreMemberSort":false,"memberSyntaxSortOrder":["none","all","multiple","single"]}]
* [switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing) : "error"


## Install
### Global
```
npm install -g eslint-config-standard-next eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

### Local
```
npm install --save-dev eslint-config-standard-next eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

## Usage
### Add extends to project .eslintrc
```js
{
  "extends": ["standard-next"]
}
```

## Lisence
MIT
