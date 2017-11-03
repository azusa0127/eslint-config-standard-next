module.exports = {
  extends: ['standard'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true
    },
    sourceType: 'module'
  },
  rules: {
    'array-callback-return': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'block-scoped-var': 'warn',
    'class-methods-use-this': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'dot-notation': 'warn',
    'for-direction': 'warn',
    'global-require': 'warn',
    'guard-for-in': 'warn',
    'linebreak-style': ['warn', 'unix'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'no-case-declarations': 'warn',
    'no-continue': 'warn',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-else-return': 'warn',
    'no-empty-function': 'error',
    'no-eq-null': 'off',
    'no-implicit-coercion': 'warn',
    'no-invalid-this': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    'no-mixed-requires': ['error', { grouping: true, allowCall: true }],
    'no-negated-condition': 'warn',
    'no-param-reassign': ['warn', { props: false }],
    'no-script-url': 'error',
    'no-shadow': ['warn', { builtinGlobals: true, hoist: 'all' }],
    'no-undefined': 'off',
    'no-var': 'warn',
    'no-void': 'error',
    'no-warning-comments': ['warn', { location: 'start', terms: ['todo', 'fixme'] }],
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true, avoidQuotes: true }],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': ['warn', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-destructuring': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'semi-style': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'space-before-function-paren': ['error', 'never'],
    'switch-colon-spacing': 'error'
  }
};