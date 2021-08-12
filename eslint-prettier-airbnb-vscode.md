# Setup eslint, prettier, airbnb in vscode
### links
 - https://github.com/paulolramos/eslint-prettier-airbnb-react
 - https://www.npmjs.com/package/eslint-config-airbnb-typescript
 - https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a

### steps
1. install eslint, prettier extensions (should already be done)
2. install eslint and prettier libraries as development dependencies
3. install airbnb config and dependencies
    - `eslint-config-airbnb` or `eslint-config-airbnb-typescript` if using ts
    - `eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react babel-eslint`
    - `@typescript-eslint/eslint-plugin` if using ts
4. install `eslint-config-prettier` and `eslint-plugin-prettier`
5. create .eslintrc.js and .prettierrc.js with configuration
