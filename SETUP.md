# 新PCセットアップ手順

## 前提
- Node.js がインストール済みであること

## 手順

### 1. 依存パッケージのインストール

pnpm が使える場合：
```bash
pnpm install
```

pnpm がない場合（npm で代用）：
```bash
npm install
```

### 2. 動作確認（CSS ビルド）

```bash
npm run build:css
```

### 3. 開発サーバー起動

```bash
npm run dev
```

ブラウザが自動で開き、ファイル変更を監視しながらホットリロードされます。
