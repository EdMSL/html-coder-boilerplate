module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  ignoreFiles: [
    'build/**/*'
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        /mixin/,
        /include/,
        /function/,
        /return/,
      ],
    }],
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': [true, {
      'severity': 'warning',
      'message': 'No empty rule blocks.',
    }],
    'color-named': ['never', {
      'severity': 'warning',
      'message': 'No named (web) colors.',
    }],
    'color-hex-case': ['lower', {
      'severity': 'warning',
    }],
    'color-hex-length': ['long', {
      'severity': 'warning',
      'message': 'No short notation for #HEX colors.'
    }],
    'comment-no-empty': [true, {
      'message': 'No empty comment',
      'severity': 'warning',
    }],
    'comment-empty-line-before': ['never', {
      'severity': 'warning',
    }],
    'declaration-empty-line-before': ['never', {
      'ignore': ['after-comment', 'after-declaration'],
    }],
    'declaration-no-important': [true, {
      'severity': 'warning',
    }],
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'function-calc-no-invalid': true,
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'max-line-length': 80,
    'media-feature-name-no-vendor-prefix': true,
    'number-leading-zero': ['always', {
      'severity': 'warning',
      'message': 'Missing leading zero.'
    }],
    'number-max-precision': [0, {
      'severity': 'warning',
      'ignoreUnits': /^(?!px).*$/,
      'message': 'Value in px mast be integer number.',
    }],
    'no-unknown-animations': true,
    'property-no-vendor-prefix': [true, {
      'severity': 'warning',
      'message': 'Not needed with autoprefixer',
    }],
    'string-quotes': ['double', {
      'severity': 'warning',
    }],
    'time-min-milliseconds': [200, {
      'severity': 'warning',
    }],
    'shorthand-property-no-redundant-values': [true, {
      'severity': 'warning',
    }],
    'value-no-vendor-prefix': [true, {
      'severity': 'warning',
      'message': 'Not needed with autoprefixer',
    }],
    'rule-empty-line-before': ['always', {
      'ignore': ['first-nested'],
    }],
    'selector-max-compound-selectors': [2, {
      'severity': 'warning',
    }],
    'selector-max-universal': 1,
    'value-keyword-case': 'lower',
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    // 'scss/dollar-variable-pattern': /[a-z]*_color/,
    'order/order': [
      {
        type: 'at-rule',
        name: 'include'
      },
      'declarations',
      'dollar-variables',
      {
        type: 'rule',
        selector: '^&::(before|after)'
      },
      {
        type: 'rule',
        selector: '^&:\\w'
      },
      {
        type: 'rule',
        selector: '^&_'
      },
      {
        type: 'rule',
        selector: '^.'
      },
      {
        type: 'at-rule',
        hasBlock: true
      },
    ],
    'order/properties-order': [
      {
        groupName: "positioning",
        emptyLineBefore: "always",
        properties: [
          'content',
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
        ],
      },
      {
        groupName: "block model",
        emptyLineBefore: "always",
        properties: [
          'display',
          'flex',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'flex-flow',
          'flex-direction',
          'flex-wrap',
          'justify-content',
          'align-content',
          'align-items',
          'order',
          'align-self',
          'box-sizing',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'overflow',
          'overflow-x',
          'overflow-y',
        ],
      },
      {
        groupName: "typography",
        emptyLineBefore: "always",
        properties: [
          'font',
          'font-family',
          'color',
          'font-size',
          'line-height',
          'font-weight',
          'font-style',
          'font-variant',
          'list-style',
          'list-style-position',
          'list-style-type',
          'list-style-image',
          'text-align',
          'text-transform',
          'text-decoration',
          'border-collapse',
          'border-spacing',
          'table-layout',
          'empty-cells',
          'caption-side',
          'vertical-align',
          'direction',
          'font-size-adjust',
          'font-stretch',
          'font-effect',
          'font-emphasize',
          'font-emphasize-position',
          'font-emphasize-style',
          'font-smooth',
          'text-align-last',
          'letter-spacing',
          'word-spacing',
          'white-space',
          'text-emphasis',
          'text-emphasis-color',
          'text-emphasis-style',
          'text-emphasis-position',
          'text-indent',
          'text-justify',
          'text-outline',
          'text-wrap',
          'text-overflow',
          'text-overflow-ellipsis',
          'text-overflow-mode',
          'text-orientation',
          'word-wrap',
          'word-break',
          'tab-size',
          'hyphens',
          'columns',
          'column-count',
          'column-fill',
          'column-gap',
          'column-rule',
          'column-rule-color',
          'column-rule-style',
          'column-rule-width',
          'column-span',
          'column-width',
          'text-shadow',
          'page-break-after',
          'page-break-before',
          'page-break-inside',
        ],
      },
      {
        groupName: "formalization",
        emptyLineBefore: "always",
        properties: [
          'background',
          'background-color',
          'background-image',
          'linear-gradient',
          'background-repeat',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-size',
          'background-clip',
          'background-origin',
          'background-attachment',
          'box-decoration-break',
          'background-blend-mode',
          'border',
          'border-width',
          'border-style',
          'border-color',
          'border-top',
          'border-top-width',
          'border-top-style',
          'border-top-color',
          'border-right',
          'border-right-width',
          'border-right-style',
          'border-right-color',
          'border-bottom',
          'border-bottom-width',
          'border-bottom-style',
          'border-bottom-color',
          'border-left',
          'border-left-width',
          'border-left-style',
          'border-left-color',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset',
          'box-shadow',
          'transform',
          'transform-origin',
          'backface-visibility',
          'perspective',
          'perspective-origin',
          'transform-style',
          'visibility',
          'opacity',
          'cursor',
          'filter',
        ],
      },
      {
        groupName: "animation",
        emptyLineBefore: "always",
        properties: [
          'transition',
          'transition-delay',
          'transition-timing-function',
          'transition-duration',
          'transition-property',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-play-state',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction',
        ],
      },
      {
        groupName: "other",
        emptyLineBefore: "always",
        properties: [
          'quotes',
          'counter-reset',
          'counter-increment',
          'resize',
          'user-select',
          'nav-index',
          'nav-up',
          'nav-right',
          'nav-down',
          'nav-left',
          'pointer-events',
          'will-change',
          'clip',
          'clip-path',
          'zoom',
        ],
      },
    ],
  },
}
