/**
 * 该 ESLint 配置扩展自 eslint-config-o2team-wx
 * https://www.npmjs.com/package/eslint-config-o2team-wx
 * o2team-wx 这一套规则是参考了 StandardJS 和 Airbnb 的 JS 规范，然后结合业务中的最佳实践整理输出的。
 */
module.exports = {
    'extends': 'o2team-wx',
    'plugins': [
        'html',
        'import'
    ],
    'settings': {
        'html/html-extensions': ['.wxml']
    },
    'rules': {
        'newline-per-chained-call': 'off',
        'eqeqeq': 'off',
        'indent': ['error', 2, { SwitchCase: 1 }],
        'prefer-rest-params': 'off',
        'prefer-template': 'off',
        'no-else-return': 'off',
        'no-nested-ternary': 'off',
        'brace-style': 'off',
        'semi': 'off',
        'camelcase': ['off', { properties: 'never' }],  // ESLint 配置问题，暂时不强制所有变量名都用驼峰式命名
        'array-callback-return': 'off',  // 暂时关闭
        'prefer-const': 'warn',
        'no-mixed-operators': 'off',
        'callback-return': 'warn',
        'class-methods-use-this': 'warn',
        // 强制使用ES6 module，便于treeshaking
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',
        'no-debugger': 0
    }
}
