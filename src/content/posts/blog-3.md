---
title: "Blogを格安300円~/年で運営する方法"
description: "ブログ運営は比較的低コストではあるものの、気軽に始めるのに年間１万円は高い。。。でもせっかくやるのに無料サイトで運営するのもなんだかな、、という人に格安年間２０００円で運営する方法を紹介"
pubDate: "2024-05-22 23:06:49"
category: "life"
banner: "@images/posts/blog-3/lowcosu_blog.webp"
banner2: "@images/posts/blog-3/banner-2.png"
tags: ["Astro", "Blog","How To"]
selected: true
---
#　blogを格安で運営する方法
利用する組み合わせは
**WORDPRESS＋conoha**ではなく、AWS(maplify)+VScode(astro)です。
ステップとしては下記です。
この時点では知らない単語にビビってしまうかもしれませんが
それぞれで簡単な説明があります。それに利用する上ではごく表面的な理解だけでも十分です。
1. awsアカウント, githubアカウントを作成
1. aws r53で独自ドメインを取得
1. vscodeで作成するブログを描きます。(テンプレートを用意しています)
1. githubにプッシュします。
1. amplifyでgithubと連携します。
1. amplifyでドメインを指定します。
1. これであなたの最初の記事は完成です!!

### **awsアカウント, githubアカウントを作成**
<div style="display: flex; justify-content: center; gap: 16px;">
<img src="../../../src/images/posts/blog-3/aws_logo_smile_1200x630.png"  width = "40%"> <img src="../../../src/images/posts/blog-3/github_icon.png" width = "40%">
</div>
最近、自分のブログを Astro プラットフォームに移行することに時間を費やしましたが、そのプロセス全体が素晴らしいと感じており、Astro がとても気に入っています。

私のブログを移行する当初の目的は、私のホストが Tencent Cloud によって禁止されたためでした。ドメイン名の有効期限が切れても更新されなかったため、国の優雅さを侮辱するウェブサイトとして解決され、私のホストは控訴することができずに永久追放されました。そこで私は自分のブログをFlyプラットフォームに移行しましたが、[Fly](https://fly.io) の月額料金 6/7 ドルに圧倒されました。

我在 `2015-12-25` 注册了自己的第一个域名，并一直用到了现在，我已经忘记当时部署的是什么网站，隐约记得写了个 LOVE 阿宝 FOREVER。以前觉得互联网上的东西都能保存十年百年，而现在 9 年不到我之前写的任何内容已经了无踪迹。互联网是没有记忆的。大学期间写的几十篇日记还在我的贵人鸟鞋盒里静静地躺着。

想象前两次博客的改版，我从 Symfony 博客迁移到 Laravel 再到 Golang Gin；每一次迁移都会造成数据丢失，每一次迁移都要折腾很久的云环境。从如何安装 PHP、安装 Nginx、安装 Redis、安装 MySQL、安装 Docker、安装 Clash、配置 [Acme.sh](https://github.com/Neilpang/acme.sh)。我的网站能正常运行完全是因为恰巧这些服务都正常工作。

你能想象两年内它完全是运行在下面这样的脚本中吗？我甚至都没有为他配置 [Restart Policies](https://docs.docker.com/config/containers/start-containers-automatically/) 或者 Supervisor，相当于只要程序一 Panic，网站就挂了。

```sheel
docker run --name gblog -p 9900:9900 -d ${imageName}
```

博客应该被静态化，我心里这样想着。静态话的博客可以部署到任何 Serverless 平台中，一个个 HTML 页面就包含了你博客的所有数据，它们不会因为你忘记续费就停止服务，也不会因为你的定时脚本出错了就不能 HTTPS 访问，更不会因为你忘记配置 Clash 就无法使用 GitHub 登录。你所有需要做的，就是提交你的博客内容；Git 记录了你所有的操作历史，只要 GitHub 不倒，你的网站久依旧能地老天荒。

我写博客的初衷是为了多年后能自省当年的自己，看看当时的心态。我比较厌烦流水账的记录，所以更多的时候我愿意写下此刻的感悟；我不明白为什么很多人的年终总结要写一月份干了什么二月份干了什么，十年后的你在回首时真的在乎你某年某月干了什么吗？

### 截图

按照约定，放几张新版本博客的截图。

![Godruoyi Blog](@images/posts/blog-3/home.png)
![Godruoyi Categories](@images/posts/blog-3/categories.png)
![Godruoyi Timeline](@images/posts/blog-3/timeline.png)
