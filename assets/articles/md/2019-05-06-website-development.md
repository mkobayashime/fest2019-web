---

title: Webサイト開発
author: デザイン課長
images: [
  2019-05-06-website-development/1.png,
  2019-05-06-website-development/2.png
]
thumbnail: 2019-05-06-website-development/2.png

---

こんにちは。デザイン課長の小林 [@mkobayashime](https://twitter.com/m_kobayashi_me) です。文化祭のアートディレクションを担当しています。今回の記事では、文化祭の開催前後を通して多数のお問い合わせをいただいたWebサイトのデザイン・実装についてご説明します。

---

なお、WebサイトのコードはGitHubレポジトリ [fest2019-web](https://github.com/mkobayashime/fest2019-web) にて [MIT License](https://github.com/mkobayashime/fest2019-web/blob/master/LICENSE) で全て公開しています。

## 文化祭Webサイトとは?

デザイン課にはパンフレットや灘校グッズ、PVなど多くの制作物がありますが、今ご覧頂いているブログを含む [このWebサイト](https://fest.nada-sc.jp/2019/) もデザイン課が管轄し、デザインから実装までを行っています。

![トップページのデザイン](_nuxt/assets/img/blog/2019-05-06-website-development/1.png)

水面がゆらめくようなアニメーションを用いたトップページや波をイメージしたアニメーションのメニューなどのデザインで、Webサイトを紹介した [ツイート](https://twitter.com/m_kobayashi_me/status/1121422158612140032) が400いいね以上と拡散されるなど、大変ご好評いただきました。

SEO（検索エンジン最適化）に成功しGoogle検索 “灘 文化祭” に1位表示されていることも手伝って、Web施策としては例年を大幅に上回る成果が出たのではないかと思います。

## 採用フレームワーク・言語

今年のWebサイトはアニメーション周りで柔軟なカスタマイズをするために、Webサイト制作サービスなどは利用せず全てコーディング（プログラミング）によって制作しています。以下はトップページのHTMLマークアップの一部です。

![開発の様子](_nuxt/assets/img/blog/2019-05-06-website-development/2.png)

フレームワークには [Nuxt.js](https://nuxtjs.org/) を採用しています。Nuxtは [Vue.js](https://vuejs.org/) をベースとしたJavaScriptアプリケーションフレームワークで、SSR:Server Side Renderingに標準で対応していることが特徴として挙げられます。SSRはサーバーサイドの対応が煩雑な他にもセキュリティ上のリスクが高まるなどデメリットも大きいことから、今回は nuxt generate コマンドを用いて書き出した静的サイトをホスティングしています。

素のVueではなくNuxtを採用したのは、NuxtにはVuexやvue-router, vue-metaなどVueの主要パッケージがバンドルされており、scaffoldingに手間をかけずにNuxtの規約による恩恵を受けられることが理由です。

---

コーディングにあたってはVueの単一ファイルコンポーネント(Single File Component)に従っており、各ページのマークアップ/JavaScript/スタイルを単一Vueファイルに記述しています。

---

また、HTMLとCSSについてはそれぞれプリプロセッサを採用しており、 [pug](https://pugjs.org/) と [Stylus](http://stylus-lang.com/) で記述しています。Vueのコンポーネント思想に則っているためpugではMixinsを一切使っておらず、単純に記述量を減らす目的での採用です。Stylusはレスポンシブデザイン用のブレークポイントを切るためにMixinsを用意したり、色管理のためVariablesを利用しています。

開発当初はAtomic Designに沿ってStylusのMixinsを用意していく予定でしたが、コンポーネントが再利用できるほど共通したパーツを持つページが多くないことから、最終的にはあまりコンポーネント化ができませんでした。文化祭が近づくにつれ急ピッチでのページ公開が増えたこともあり、ページ間のconsistencyが確保できなかった箇所があるのは悔やまれます。

## 採用パッケージ

### アニメーション

アニメーション関連では [anime.js](https://animejs.com/) 及び [PixiJS](https://www.pixijs.com/) を採用しました。

anime.jsはJavaScriptのrequestAnimationFrameベースのアニメーションライブラリで、DOM単位でCSS transformライクなアニメーションを実装できます。今回の開発途中にv3.0台へのバージョンアップで大幅な機能拡張がなされ、staggeringなどが追加されました。anime.jsはメニュー開閉時のテキストアニメーションやページ間トランジションで利用しており、前者はv3.0リリースに伴いstaggeringでの実装に切り替えました。

PixiJSはWebGLベースの2Dアニメーションライブラリで、3Dに特化した [Three.js](https://threejs.org/) と並んで有名なライブラリです。トップページの水面アニメーションはPixiのDisplacementFilterを用いて実装しています。軽量とは言えずページロードへの影響が大きいことから削ることも検討しましたが、トップページにおける世界観の訴求にはこのアニメーションが不可欠との判断から採用を決定しました。

また全ページ背景の薄いグレーのロゴについては、当初は [Adobe AfterEffects](https://www.adobe.com/jp/products/aftereffects.html) で制作した水面がゆらめくようなmorphingアニメーションを [Lottie](https://airbnb.design/lottie/) で実装していましたが、パスが複雑すぎることからパフォーマンスへの影響が大きく、採用を見送りました。

その他各所のマイクロインタラクションをCSS Transition及びAnimationで実装しています。

### PWA

モバイル端末/回線でのロード時間の短縮を期待し [PWA](https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps) : Progressive Web Appsに対応しました。Nuxtコミュニティのモジュールである [@nuxtjs/pwa](https://pwa.nuxtjs.org/) を利用することで、manifest.jsonに相当する記述をnuxt.config.jsに含めるだけでPWA化することができました。Service Workerの強力なキャッシュによってリターンユーザーのロード時間が大幅に短縮されており、トップページぐらいならオフラインでもほぼ表示されるようになっています。

### Google Analytics

こちらもNuxtコミュニティのモジュール [@nuxtjs/google-gtag](https://github.com/nuxt-community/google-gtag) を利用しています。NuxtでGoogle Analyticsを利用するためのモジュールにはいくつか種類がありますが、現在最新のタグ形式であるgtag.jsを利用しているのはこのモジュールだけでした。

当然といえば当然ですが、Google Analytics導入に伴いプライバシーポリシーの策定・公開が必要です。

### ブログ

ブログ記事はMarkdown形式で執筆のため、 [processmd](https://github.com/tscanlin/processmd) を用いて各記事Markdownファイルをjsonファイルに変換させています。Nuxtとprocessmdでのブログ実装には [こちら](https://jmblog.jp/posts/2018-01-17/build-a-blog-with-nuxtjs-and-markdown-1/) の記事を参照させていただきました。

## Git

バージョン管理には [Git](https://git-scm.com/) 及び [GitHub](https://github.com/) を利用しています。開発途中からブランチ運用に気を配るようになり、master及びdevブランチやfeatureブランチを適宜運用しました。

## デプロイ

### サーバー

生徒会Webサイトなどを運用しているレンタルサーバーを利用しており、Apacheを採用しています。

これまで数年間文化祭Webサイトは毎年前年のサイトを上書きする形で同じURLで公開してきましたが、過去のサイトが残らないのはもったいないということで [fest.nada-sc.jp](https://fest.nada-sc.jp) 以下に/2019/のような年号ディレクトリを切って公開することとしました。これに伴い、過去2年分のサイトである2017年及び2018年文化祭のサイトを同様のURLで再公開しました。SEOの都合上、URL正規化のため [fest.nada-sc.jp](https://fest.nada-sc.jp) は [fest.nada-sc.jp/2019/](https://fest.nada-sc.jp/2019) に301リダイレクトさせています。

### CI

前述の通りGitHubを利用したバージョン管理を行っているため、 [CircleCI](https://circleci.com/) を用いてmasterブランチへのpushのたびにビルドしてrsyncでサーバーへデプロイするCI: continuous integrationが構築できました。config.ymlの記述など詳細は [Qiita](https://qiita.com/mkobayashime/items/7158008274903a1533ab) に投稿していますのでご参照ください。

また、GitHubへのpush及びCircleCIのビルドはSlackのbotによって#websiteチャンネルに通知されるようになっており、ビルド/デプロイの成功/失敗が確認できます。

## おわりに

今回のWebサイトはこのような構成での開発でした。GitHub repositoryをpublicにしているものの、1年弱前まで全くコーディングができなかった人間が独学で書いたものですので、いたるところに無駄の多い実装や甘いデザインがあるかと思います。お許しください。