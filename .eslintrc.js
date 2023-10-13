module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        "@typescript-eslint/prefer-nullish-coalescing": 0,
        "semi": "off",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/semi": "off",
        "i18next/no-literal-string": ['error', {markupOnly: true}],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": 0
    }
}
