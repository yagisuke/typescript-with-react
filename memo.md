# 勉強のメモ書き
Typescript with modern React (i.e. hooks, context, suspense)
https://www.udemy.com/typescript-with-react-hooks-and-context

## VSCodeにextentionを追加する
typescript + react 開発で便利なextensionをインストールした.  
その一覧はこちら.

- ES7 React/Redux/GraphQL/React-Native snippets
- Bookmarks
- Import Cost
- Bracket Pair Colorizer 2
- Prettier
- Atom Keymap

## Typescriptの基本の基
[playground](https://www.typescriptlang.org/play/)でTypescriptのBasic Typesの挙動を確認.  
以下のドキュメントが理解できていれば大丈夫！    

Basic Types: https://www.typescriptlang.org/docs/handbook/basic-types.html  
[（日本語はこちら）](https://qiita.com/murank/items/9c1f633545842c953947) 

## app-tsディレクトリ
`create-react-app` して、tsxで少し書く。ほんの少し。

```
$ npx create-react-app app-ts
$ yarn add typescript @types/react @types/react-dom @types/node
```

## react-ts-webpackディレクトリ
`npm init` から react + typescriptに必要なライブラリをinstallして、TODOアプリを作成。  
[hook](https://reactjs.org/docs/hooks-intro.html) のuseStateを使って作成する。

## app-ts-2ディレクトリ
[hook](https://reactjs.org/docs/hooks-intro.html) のuseReducerを使ってcounterを試しに作った。
