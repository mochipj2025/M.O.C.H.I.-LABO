# M.O.C.H.I. LABO - Deployment Guide

このプロジェクト（M.O.C.H.I. LABO）を世界に公開するための手順書です。

## 1. GitHubにリポジトリを作成する
1.  [GitHub](https://github.com/)にログインします。
2.  「New repository」をクリック。
3.  リポジトリ名を `mochi-labo` などにして作成（PublicでもPrivateでも可）。

## 2. コードをGitHubにアップロードする
VS Codeのターミナル（または PowerShell）で以下を実行してください：
```powershell
cd d:\00000\Obsidian_Base\90_Web_Project\web
git add .
git commit -m "feat: Initial M.O.C.H.I. LABO setup with Modern Sanctuary design"
git remote add origin https://github.com/あなたのユーザー名/mochi-labo.git
git branch -M main
git push -u origin main
```

## 3. Vercelと連携する
1.  [Vercel](https://vercel.com/)にアクセスし、GitHubアカウントでログイン。
2.  「Add New」 -> 「Project」をクリック。
3.  先ほど作った `mochi-labo` リポジトリを選択して「Import」。
4.  「Deploy」ボタンを押すだけで、数分後にサイトが公開されます。

## 4. Sanityのプロジェクト作成（重要）
Studio（管理画面）を使うには、SanityのプロジェクトIDが必要です。
1.  [Sanity.io](https://www.sanity.io/manage)で新しいプロジェクトを作成。
2.  発行された `projectId` を `sanity.config.ts` に貼り付けます。
3.  GitHubにプッシュ（保存）すれば、Vercel側も自動更新されます。
