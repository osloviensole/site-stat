<h3 align = "center">This app analyzes statistics of users visiting given website with engaging 3D environment</h3>

## Setup

- Install nvm - https://github.com/coreybutler/nvm-windows/releases
- Install Node.js 20
```
nvm install 20
nvm use 20
```
- Install packages
```
npm install --legacy-peer-deps
```
- Run
```
npm run dev
```

## Some Guidelines

- In your VS Code settings, change `javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces` to `explicit` so it won't add those spaces before and after braces
- In your VS Code settings, set `source.organizeImports` of `editor.codeActionsOnSave` to `true` to sort import automatically
- Install https://marketplace.visualstudio.com/items?itemName=heybourn.headwind to sort Tailwind CSS class automatically
