1- npx create-next-app@latest nome-app

2- npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react

crie um arquivo eslintrc.json e cole dentro ==>
{
"env": {
"browser": true,
"es2021": true,
"node": true
},
"extends": [
"eslint:recommended",
"plugin:react/recommended",
"plugin:@typescript-eslint/recommended",
"prettier"
],
"parser": "@typescript-eslint/parser",
"parserOptions": {
"ecmaFeatures": {
"jsx": true
},
"ecmaVersion": "latest",
"sourceType": "module"
},
"plugins": [
"react",
"@typescript-eslint",
"prettier"
],
"rules": {
"prettier/prettier": [
"error",
{
"singleQuote": true,
"trailingComma": "all",
"semi": false,
"endOfLine": "auto"
}
],
"quotes": ["error", "single"],
"semi": ["error", "never"],
"react/react-in-jsx-scope": "off" // Adicione esta linha
},
"settings": {
"react": {
"version": "detect" // Detecta automaticamente a versão do React
}
}
}

crie um arquivo .prettierrc.json e cole dentro ==>
{
"singleQuote": true,
"trailingComma": "all",
"tabWidth": 2,
"printWidth": 80,
"semi": false,
"endOfLine": "auto"
}

Adicione scripts ao package.json ==>

{
"scripts": {
"lint": "eslint . --ext .js,.jsx,.ts,.tsx",
"lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
"format": "prettier --write ."
}
}

execute os comandos ==>

npm run format
npm run lint:fix
