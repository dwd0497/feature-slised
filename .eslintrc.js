module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb',
        'airbnb-typescript',
        "plugin:i18next/recommended",
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
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json',
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "i18next",
    ],
    'ignorePatterns': ["/build", '.eslintrc.js'],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/no-deprecated": "off",
        "@typescript-eslint/indent": ["error", 4],
        "import/prefer-default-export": "off",
        "react/require-default-props": "off",
        "react/jsx-indent-props": ['error', 4],
        "react/jsx-indent": ['error', 4],
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-underscore-dangle": "off",
        "max-len": ["error", { "ignoreComments": true, "code": 120}],
        "@typescript-eslint/naming-convention": 'warn',
        "import/no-extraneous-dependencies": [
            "error",
            {"devDependencies": true}
        ]
    },
    "globals": {
        "__IS_DEV__": true,
    },
}
