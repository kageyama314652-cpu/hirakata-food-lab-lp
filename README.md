# 枚方飲食集客LAB LP

枚方発、北河内・京阪沿線エリアの飲食店向けに、SNSを入口とした集客導線改善サービスを伝える静的LPです。単なる投稿代行ではなく、Instagram、TikTok、Googleマップ、LINE公式、LP、予約フォーム、問い合わせ導線を必要に応じて整える内容にしています。

## ファイル構成

```txt
hirakata-lp-test/
  index.html   # LP本体、SEO/OGP、各セクション
  style.css    # スマホファーストのデザイン、レスポンシブ対応
  script.js    # CTAリンク管理、スムーススクロール、FAQ開閉、スマホナビ
  images/      # ロゴ・写真素材
  robots.txt   # 検索エンジン向けクロール設定
  sitemap.xml  # Netlify公開URLのサイトマップ
  README.md    # 編集方法と公開前チェック
```

## ブラウザで確認する方法

1. `index.html` をブラウザで開きます。
2. スマホ表示を確認する場合は、ブラウザの開発者ツールで画面幅を 375px、768px、1280px などに切り替えて確認します。
3. FAQの開閉、ヘッダーのナビゲーション、CTAボタンの動きを確認します。

静的ファイルだけで動くため、ローカルサーバーは必須ではありません。

## Netlify公開手順

1. Netlifyにログインし、「Add new site」から手動デプロイ、またはGit連携を選びます。
2. 手動デプロイの場合は、`hirakata-lp-test` フォルダ全体をアップロードします。`index.html`、`style.css`、`script.js`、`images`、`robots.txt`、`sitemap.xml` が同じ階層に入っている状態にしてください。
3. 公開URLが `https://hirakata-inshoku-lab.netlify.app/` になっているか確認します。
4. 公開後、以下のURLが開けるか確認します。
   - `https://hirakata-inshoku-lab.netlify.app/robots.txt`
   - `https://hirakata-inshoku-lab.netlify.app/sitemap.xml`
   - `https://hirakata-inshoku-lab.netlify.app/images/hero-photo.jpg`
5. PC・スマホ幅で、画像表示、ヘッダーナビ、FAQ開閉、無料相談CTAの遷移を確認します。

Netlifyの公開URLを変更する場合は、`index.html` の `og:url` と `og:image`、`robots.txt`、`sitemap.xml` のURLも同じ公開URLに合わせて変更してください。


## GitHubへアップロードする最終構成

GitHubには、以下の構成のままアップロードしてください。括弧付きのダウンロード名や、ルート直下の画像ファイルは残さないでください。

```txt
index.html
style.css
script.js
robots.txt
sitemap.xml
README.md
images/
  hero-photo.jpg
  food-photo.jpg
  tech-photo.jpg
  owner-photo.jpg
  cta-photo.jpg
  logo-horizontal.png
  logo-icon.png
```

NetlifyでGitHub連携する場合、ビルドコマンドは不要です。公開ディレクトリはリポジトリ直下を指定し、`index.html` がリポジトリ直下にある状態にします。

## GoogleフォームURLの設定場所

メインCTA「無料で集客導線を相談する」は、Googleフォームに設定済みです。リンクは `script.js` の先頭で管理しています。

```js
const CTA_LINKS = {
  primary: "https://docs.google.com/forms/d/e/1FAIpQLSeF6iDq8pUbsbjHx9hHU5rHtEu4IAuaCSqkZSKJsNvo9KnTTw/viewform",
  secondary: "#plans"
};
```

LP内のメインCTAは `data-cta` が付いたボタンで、`primary` に自動で差し替わります。Googleフォームへ同じタブで遷移する設定です。現在のサブCTA「初回診断の内容を見る」は、`index.html` 内で `href="#plans"` として料金セクションへ移動する設定です。

## 無料相談と初回診断の位置づけ

- 無料相談: LPの入口です。15〜30分を目安に、お悩みのヒアリングと、その場で見える範囲の簡単な確認を行います。詳細レポートや本格的な改善設計までは含めません。
- 初回集客導線診断: 30,000円〜の有料診断です。Instagram、Googleマップ、LINE公式、予約導線などを無料相談より詳しく確認し、改善ポイントと優先順位を整理します。
- 流れ: まず無料相談で現状を伺い、必要に応じて初回集客導線診断や月額サポートをご提案します。

説明文を変更する場合は、`index.html` の `無料相談で確認できること` セクション、`無料相談と初回診断の違い` カード、`初回集客導線診断` カードを編集してください。

## 画像の差し替え

ロゴと写真は `index.html` の `<img>` タグで読み込んでいます。差し替える場合は、同じファイル名で `images` フォルダ内の画像を入れ替えるのが一番簡単です。

```txt
images/
  logo-horizontal.png  # ヘッダー左側の横長ロゴ
  logo-icon.png        # フッター、favicon、アイコン用途
  hero-photo.jpg       # ファーストビュー右側のメイン写真
  food-photo.jpg       # 料理・メニューの魅力カード
  owner-photo.jpg      # 店主・お店の雰囲気カード
  tech-photo.jpg       # SNSから来店までの流れセクションの補助ビジュアル
  cta-photo.jpg        # 最後のCTAセクション
```

推奨サイズ:

- `logo-horizontal.png`: 横 640px 以上、透明背景推奨
- `logo-icon.png`: 512 x 512px 以上、favicon候補
- `hero-photo.jpg`: 1200 x 900px 以上
- `food-photo.jpg`: 900 x 700px 以上
- `owner-photo.jpg`: 900 x 700px 以上
- `tech-photo.jpg`: 900 x 700px 以上
- `cta-photo.jpg`: 1200 x 800px 以上

画像は横長または正方形に近いものが扱いやすいです。スマホでも見やすいように、主役の料理や人物が中央付近に写っている写真をおすすめします。

画像ファイル名を変えたい場合は、`index.html` の `<img src="images/...">` を変更してください。写真の角丸、比率、トリミングを変えたい場合は、`style.css` の以下を編集します。

```txt
.brand
.media-frame
.hero-media
.image-card-media
.route-media
.final-cta-media
```

## ロゴ画像の使い分け

- `logo-horizontal.png`: ヘッダー左側のメインロゴ。PC・タブレットでは横長ロゴを表示します。
- `logo-icon.png`: 狭いスマホ幅のヘッダーロゴ、フッターのブランドマーク、favicon候補として使います。

faviconは `index.html` の以下で指定しています。

```html
<link rel="icon" href="images/logo-icon.png">
```

## OGP画像と公開URL

`index.html` の `og:url` と `og:image` は、Netlify公開用のURLに設定済みです。SNSでシェアしたときに画像が表示されやすいよう、`og:image` は絶対URLで指定しています。

```html
<meta property="og:url" content="https://hirakata-inshoku-lab.netlify.app/">
<meta property="og:image" content="https://hirakata-inshoku-lab.netlify.app/images/hero-photo.jpg">
```

公開URLやドメインを変更した場合は、上記の2箇所に加えて `robots.txt` と `sitemap.xml` のURLも変更してください。

## 画像最適化の注意

- 写真は公開前に 300KB〜500KB 程度を目安に圧縮すると読み込みが軽くなります。
- 大きな写真をそのまま使う場合でも、表示側は `max-width: 100%` と `object-fit: cover` でレスポンシブ対応しています。
- ファーストビュー以外の写真には `loading="lazy"` を設定しています。
- alt属性を変更したい場合は、`index.html` の各 `<img>` の `alt="..."` を編集してください。

## 対応エリア文言の編集場所

対応エリアを変更する場合は、主に `index.html` の以下を編集してください。

- `<head>` 内の `title`、`meta description`、OGP説明文
- ファーストビューの `枚方発、北河内・京阪沿線の飲食店専門`
- `対応エリア` セクション
- `選ばれる理由` セクション
- `他社比較` の対象・地域理解
- フッター文言

## 編集しやすい箇所

- サービス文言: `index.html`
- 無料相談の説明: `index.html` の `無料相談で確認できること` セクション
- 無料相談と有料診断の違い: `index.html` の `無料相談と初回診断の違い` カード
- 運営者紹介: `index.html` の `運営者について` セクション
- 料金: `index.html` の `料金プラン` セクション
- 初回集客導線診断: `index.html` の `初回集客導線診断` カード
- 色や余白: `style.css` の `:root`
- 写真ファイル名とalt属性: `index.html` の `<img>`
- 写真の比率や角丸: `style.css` の `.media-frame`、`.image-card-media`
- 図解風カード: `style.css` の `.image-card-visual`、`.flow-mini`
- CTA文言: `index.html` の `data-cta` ボタン、または `初回診断の内容を見る` のリンク文言
- CTAリンク: メインCTAは `script.js` の `CTA_LINKS.primary`、サブCTAは `index.html` の `href="#plans"`
- OGP URLや画像: `index.html` の `<head>` 内

## 公開前チェックリスト

- `title` と `meta description` が実際のサービス内容と合っている
- `og:url` と `og:image` がNetlify公開URLになっている
- `images` フォルダに写真を配置し、表示崩れがない
- 対応エリアが「枚方市限定」に見えず、北河内・京阪沿線の近隣エリアも自然に伝わっている
- メインCTAがGoogleフォーム本番URLへ同じタブで遷移する
- `robots.txt` と `sitemap.xml` が公開URLで開ける
- 料金プランの金額と支援範囲が正式内容になっている
- 誇大表現や「必ず売上が上がる」などの表現が入っていない
- スマホで文字が読みやすく、CTAボタンが押しやすい
- FAQの開閉が動く
- ヘッダーのナビゲーションが各セクションへ移動する
- 画像を入れる場合、alt属性が設定されている
- 表示確認をPC、タブレット、スマホ幅で行っている

## 最低限のSEO内部対策

今回、公開済みLPに対して以下の最低限のSEO内部対策を行っています。

- `title` と `meta description` を、枚方周辺の飲食店集客向けに最適化
- canonical URLを `https://hirakata-inshoku-lab.netlify.app/` に設定
- OGPとTwitterカードを公開URLに合わせて設定
- h1を1つに整理し、ページ上部に屋号「枚方飲食集客LAB」を自然に記載
- 主要なh2を、飲食店集客・対応エリア・サービス内容が伝わる表現に調整
- 画像alt属性を、内容と検索意図が自然に伝わる表現へ調整
- `robots.txt` と `sitemap.xml` をNetlify公開URLに合わせて更新
- ProfessionalServiceのJSON-LDを1つ追加
- `noindex` / `nofollow` が入っていないことを確認

狙うキーワード:

- 枚方飲食集客LAB
- 枚方 飲食店 集客
- 枚方市 飲食店 集客
- 枚方 飲食店 SNS運用
- 枚方 Googleマップ 集客 飲食店

GitHub更新後の確認:

- NetlifyのDeploys画面で最新デプロイが `Published` になっていることを確認します。
- Google Search Consoleで公開URLのURL検査を行い、インデックス登録をリクエストします。
- Search Consoleのサイトマップから `https://hirakata-inshoku-lab.netlify.app/sitemap.xml` を送信します。