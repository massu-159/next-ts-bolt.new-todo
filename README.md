# next-ts-bolt.new-todo
bolt.newに以下のプロンプトを送信して、Todo管理アプリを作成。

日本語でプロンプトを書いて、それを英訳してからbolt.newに送信した。

```
TODOを管理できるwebアプリケーションを作成したい。以下の要件を満たしてください。

## 条件
- Typescriptを利用してください。
- Next.jsを利用してください。
- DBはSQLiteを利用してください。
- TODOについて
 - 新規作成
 - 一覧表示
 - 編集
 - 削除
- TODOを一覧し、選択すると詳細を表示して、編集or削除できる
- TODOには完了か未了かを選択できる

```

```
I want to create a web application that can manage todo's. Please fulfill the following requirements

## Requirements
- Please use Typescript.
- Please use Next.js.
- Please use SQLite for DB.
- About TODO
 - Create New
 - Listing
 - Edit
 - Delete
- TODOs are listed, and when selected, details are displayed and can be edited or deleted.
- TODOs can be selected as completed or incomplete.
```


urlはこちら
https://github.com/massu-159/next-ts-bolt.new-todo


以下のエラーに遭遇
```
  ve [Error]: Page with `dynamic = "error"` couldn't be rendered statically because it used `request.json`.
    at Object.be [as staticGenerationBailout] (/Users/massu159/Desktop/dev/JS/React/next-ts-bolt.new-todo/project/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:1:60069)
```

## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install
# または
yarn
# または
pnpm install
# または
bun install
```

### 1-2. アプリケーション実行

```
npm start
# または
yarn start
# または
pnpm start
# または
bun start
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- 認証
  - サインアップ
  - ログイン
  - ログアウト
- Todo
  - Todo一覧表示
  - Todo新規登録
  - Todo更新処理
  - Todo削除処理

### 2-2. 構成技術
    "@hookform/resolvers": "^3.9.0",
    "@next/swc-wasm-nodejs": "13.5.1",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.2",
    "@types/better-sqlite3": "^7.6.9",
    "@types/node": "20.6.2",
    "@types/react": "18.2.22",
    "@types/react-dom": "18.2.7",
    "autoprefixer": "10.4.15",
    "better-sqlite3": "^9.4.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "eslint": "8.49.0",
    "eslint-config-next": "13.5.1",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.446.0",
    "next": "13.5.1",
    "next-themes": "^0.3.0",
    "postcss": "8.4.30",
    "react": "18.2.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss": "3.3.3",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "5.2.2",
    "vaul": "^0.9.9",
    "zod": "^3.23.8"
    