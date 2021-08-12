module.exports = {
    extends: ["airbnb", "plugin:prettier/recommended", "prettier"],
    plugins: ["prettier"],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    rules: {
        "quotes": ["error", "double"],
        "jsx-quotes": ["error", "prefer-double"],
        "quote-props": ["error", "consistent"],
        "indent": ["error", 4],
        "no-use-before-define": ["off"],
        "@typescript-eslint/no-use-before-define": ["off"],
    },
    ignorePatterns: [".eslintrc.js"],
};
