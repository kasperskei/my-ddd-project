module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:jsonc/recommended-with-jsonc',
  ],
  ignorePatterns: [
    '!.github',
    '!.vitepress',
    '!.vscode',
    '*.min.*',
    'CHANGELOG.md',
    'LICENSE*',
    '__snapshots__',
    'coverage',
    'dist',
    'output',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'public',
    'temp',
    'yarn.lock',
  ],
  overrides: [
    {
      files: [
        '*.json',
        '*.json5',
        '*.jsonc',
      ],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-array-values': [
          'warn',
          {
            order: {
              type: 'asc',
            },
            pathPattern: '^$',
          },
        ],
        'jsonc/sort-keys': [
          'warn',
          {
            order: {
              type: 'asc',
            },
            pathPattern: '^$',
          },
        ],
      },
    },
    {
      files: [
        '*.vue',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        /** Ругается на defineEmits. */
        '@typescript-eslint/prefer-function-type': 'off',
        /** Ругается на defineEmits. */
        '@typescript-eslint/unified-signatures': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'vue/array-bracket-newline': [
          'off',
          'consistent',
        ],
        'vue/array-bracket-spacing': [
          'error',
          'never',
        ],
        'vue/arrow-spacing': [
          'error',
          {
            after: true,
            before: true,
          },
        ],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/block-lang': [
          'error',
          {
            script: {
              lang: 'ts',
            },
          },
        ],
        'vue/block-spacing': [
          'error',
          'always',
        ],
        'vue/block-tag-newline': 'error',
        'vue/brace-style': [
          'off',
          '1tbs',
          {
            allowSingleLine: true,
          },
        ],
        'vue/comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
          },
        ],
        'vue/comma-spacing': [
          'error',
          {
            after: true,
            before: false,
          },
        ],
        'vue/comma-style': [
          'error',
          'last',
          {
            exceptions: {
              ArrayExpression: false,
              ArrayPattern: false,
              ArrowFunctionExpression: false,
              CallExpression: false,
              FunctionDeclaration: false,
              FunctionExpression: false,
              ImportDeclaration: false,
              NewExpression: false,
              ObjectExpression: false,
              ObjectPattern: false,
              VariableDeclaration: false,
            },
          },
        ],
        'vue/component-api-style': [
          'error',
          [
            'script-setup',
          ],
        ],
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: false,
          },
        ],
        'vue/component-options-name-casing': [
          'error',
          'PascalCase',
        ],
        'vue/component-tags-order': [
          'error',
          {
            order: [
              'script',
              'template',
              'style',
            ],
          },
        ],
        'vue/custom-event-name-casing': 'error',
        'vue/define-macros-order': 'off',
        'vue/dot-location': [
          'error',
          'property',
        ],
        'vue/dot-notation': [
          'warn',
        ],
        'vue/eqeqeq': [
          'error',
          'always',
          {
            null: 'ignore',
          },
        ],
        'vue/func-call-spacing': [
          'error',
          'never',
        ],
        'vue/html-button-has-type': 'error',
        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': 'error',
        'vue/key-spacing': [
          'error',
          {
            afterColon: true,
            beforeColon: false,
          },
        ],
        'vue/keyword-spacing': [
          'error',
          {
            after: true,
            before: true,
            overrides: {
              case: {
                after: true,
              },
              return: {
                after: true,
              },
              throw: {
                after: true,
              },
            },
          },
        ],
        'vue/match-component-file-name': [
          'error',
          {
            extensions: [
              'js',
              'jsx',
              'ts',
              'tsx',
              'vue',
            ],
            shouldMatchCase: true,
          },
        ],
        'vue/match-component-import-name': 'error',
        'vue/multi-word-component-names': 'warn',
        'vue/next-tick-style': 'error',
        'vue/no-bare-strings-in-template': 'warn',
        'vue/no-boolean-default': [
          'error',
          'default-false',
        ],
        'vue/no-constant-condition': [
          'warn',
        ],
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-empty-pattern': [
          'error',
        ],
        'vue/no-extra-parens': [
          'off',
          'all',
          {
            conditionalAssign: true,
            enforceForArrowConditionals: false,
            ignoreJSX: 'all',
            nestedBinaryExpressions: false,
            returnAssign: false,
          },
        ],
        'vue/no-irregular-whitespace': [
          'error',
        ],
        'vue/no-loss-of-precision': [
          'error',
        ],
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-potential-component-option-typo': 'error',
        'vue/no-restricted-syntax': [
          'error',
          {
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            selector: 'ForInStatement',
          },
          {
            message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            selector: 'ForOfStatement',
          },
          {
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            selector: 'LabeledStatement',
          },
          {
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            selector: 'WithStatement',
          },
        ],
        'vue/no-sparse-arrays': [
          'error',
        ],
        'vue/no-static-inline-styles': 'error',
        'vue/no-template-target-blank': 'error',
        'vue/no-this-in-before-route-enter': 'error',
        'vue/no-undef-components': [
          'error',
          {
            ignorePatterns: [],
          },
        ],
        /**
         * Не может обнаруживать свойства, определенные в других файлах или компонентах.
         * TS уже делает эти проверки.
         */
        'vue/no-undef-properties': 'off',
        'vue/no-unused-properties': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-useless-concat': [
          'error',
        ],
        'vue/no-useless-mustaches': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-text': 'error',
        'vue/object-curly-newline': [
          'error',
          {
            ExportDeclaration: {
              consistent: true,
              minProperties: 4,
              multiline: true,
            },
            ImportDeclaration: {
              consistent: true,
              minProperties: 4,
              multiline: true,
            },
            ObjectExpression: {
              consistent: true,
              minProperties: 4,
              multiline: true,
            },
            ObjectPattern: {
              consistent: true,
              minProperties: 4,
              multiline: true,
            },
          },
        ],
        'vue/object-curly-spacing': [
          'error',
          'never',
        ],
        'vue/object-property-newline': [
          'error',
          {
            allowAllPropertiesOnSameLine: true,
            allowMultiplePropertiesPerLine: false,
          },
        ],
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
          },
        ],
        'vue/operator-linebreak': [
          'error',
          'before',
          {
            overrides: {
              '=': 'none',
            },
          },
        ],
        'vue/padding-line-between-blocks': 'error',
        'vue/prefer-prop-type-boolean-first': 'error',
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-template': [
          'error',
        ],
        'vue/prefer-true-attribute-shorthand': 'error',
        'vue/quote-props': [
          'error',
          'as-needed',
          {
            keywords: false,
            numbers: false,
            unnecessary: true,
          },
        ],
        'vue/require-direct-export': 'error',
        'vue/require-emit-validator': 'error',
        'vue/require-expose': 'error',
        'vue/require-name-property': 'error',
        'vue/script-indent': 'error',
        // 'vue/sort-keys': [
        //   'warn',
        //   'asc',
        //   {
        //     caseSensitive: true,
        //     minKeys: 2,
        //     natural: false,
        //   },
        // ],
        'vue/space-in-parens': [
          'error',
          'never',
        ],
        'vue/space-infix-ops': [
          'error',
        ],
        'vue/space-unary-ops': [
          'error',
          {
            nonwords: false,
            overrides: {},
            words: true,
          },
        ],
        'vue/static-class-names-order': 'error',
        'vue/template-curly-spacing': [
          'error',
        ],
        'vue/v-for-delimiter-style': 'error',
        'vue/v-on-event-hyphenation': ['error', 'never', {
          autofix: true,
        }],
        'vue/v-on-function-call': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      jsx: false,
    },
    ecmaVersion: 'latest',
    emitDecoratorMetadata: true,
    extraFileExtensions: [
      '.vue',
    ],
    project: [
      './tsconfig.eslint.json',
    ],
    sourceType: 'module',
  },
  plugins: [
    'import',
    'import-newlines',
    'promise',
    'html',
    'unicorn',
  ],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    /** @see https://github.com/typescript-eslint/typescript-eslint/issues/1824#issuecomment-1180612099 */
    '@typescript-eslint/indent': [
      'error',
      2,
      // {
      //   ignoredNodes: [
      //     'PropertyDefinition[decorators]',
      //     'TSUnionType',
      //   ],
      // },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        multilineDetection: 'brackets',
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: {
          memberTypes: [
            'signature',
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            'public-abstract-field',
            'protected-abstract-field',
            'private-abstract-field',
            'public-field',
            'protected-field',
            'private-field',
            'static-field',
            'instance-field',
            'abstract-field',
            'decorated-field',
            'field',
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            'constructor',
            'public-static-get',
            'protected-static-get',
            'private-static-get',
            'public-decorated-get',
            'protected-decorated-get',
            'private-decorated-get',
            'public-instance-get',
            'protected-instance-get',
            'private-instance-get',
            'public-abstract-get',
            'protected-abstract-get',
            'private-abstract-get',
            'public-get',
            'protected-get',
            'private-get',
            'static-get',
            'instance-get',
            'abstract-get',
            'decorated-get',
            'get',
            'public-static-set',
            'protected-static-set',
            'private-static-set',
            'public-decorated-set',
            'protected-decorated-set',
            'private-decorated-set',
            'public-instance-set',
            'protected-instance-set',
            'private-instance-set',
            'public-abstract-set',
            'protected-abstract-set',
            'private-abstract-set',
            'public-set',
            'protected-set',
            'private-set',
            'static-set',
            'instance-set',
            'abstract-set',
            'decorated-set',
            'set',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            'public-abstract-method',
            'protected-abstract-method',
            'private-abstract-method',
            'public-method',
            'protected-method',
            'private-method',
            'static-method',
            'instance-method',
            'abstract-method',
            'decorated-method',
            'method',
          ],
          order: 'alphabetically',
        },
      },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true,
      },
    ],
    '@typescript-eslint/no-extra-parens': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/object-curly-spacing': [
      'error',
      'never',
    ],
    '@typescript-eslint/padding-line-between-statements': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/semi': [
      'error',
      'never',
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        after: true,
        before: false,
        overrides: {
          arrow: {
            after: true,
            before: true,
          },
        },
      },
    ],
    'block-spacing': ['error', 'never'],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', {allowSingleLine: false}],
    curly: ['error', 'all'],
    'import-newlines/enforce': [
      'error',
      {
        items: 2,
        'max-len': 1000,
        semi: true,
      },
    ],
    'import/default': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-spaced-func': 'off',
    'object-curly-spacing': 'off',
    semi: 'off',
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],
    // 'sort-keys': [
    //   'warn',
    //   'asc',
    //   {
    //     caseSensitive: true,
    //     minKeys: 2,
    //     natural: false,
    //   },
    // ],
    'unicorn/filename-case': [
      'error',
      // {
      //   cases: {
      //     camelCase: true,
      //     pascalCase: true,
      //   },
      // },
    ],
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
}
