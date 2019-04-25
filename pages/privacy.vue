<template lang="pug">
  #privacy
    h1 プライバシーポリシー
    .jp
      h2 jp
      p 当サイトは灘校文化委員会デザイン課によって運営されています。
      p 当サイトでは利用状況の調査のため 
        a(href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener") Google Analytics
        |  を利用しています。得られたデータは当サイトの運営にのみ利用し、今後の施策の参考とさせていただきます。
      p Google Analytics はトラフィックデータ収集のために Cookie を利用しています。このデータは匿名で収集されており、個人を特定できるものではありません。
      p トラフィックデータの収集はブラウザの Cookie を無効化することで拒否することができます。ご使用のブラウザの設定をご確認ください。
      p Google Analytics の利用規約は
        a(href="https://www.google.com/analytics/terms/jp.html" target="_blank" rel="noopener") こちら
        | からご確認いただけます。
      p プライバシーポリシーは改定されることがあります。改定の際にはサイト上でお知らせします。
    .en
      h2 en
      p This Website is run by 73rd Nada School Festival Design Team.
      p We use 
        a(href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener") Google Analytics
        |  to automatically collect derivative data when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. We only use the data to provide you with better service.
      p Google Analytics uses Cookie to collect data. If you do not want any information to be collected and used, you can disable Cookie from your browser settings.
      p You can check 
        a(href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener") Terms of Service
        |  of Google Analytics.
      p We may revise this Privacy Policy from time to time. If we make a change to this policy, we will notify you via this website.
</template>

<script>
import anime from 'animejs'
export default {
  head: {
    title: 'プライバシーポリシー | 第73回灘校文化祭'
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('privacy'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        complete: done
      })
    },
    leave(el, done) {
      anime({
        targets: document.getElementById('privacy'),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        complete: done
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#privacy
  articleWidth()
  margin 5rem auto 10rem
  +sp()
    padding 0 1.5rem
  +tablet()
    padding 0 3rem
  +deskSmall()
    padding 0 3rem
  h1
    font-size 3rem
    margin 10rem 0 3rem -.1em
    +sp()
      font-size 1.7rem
      margin 8rem 0 3rem 0
    +tablet()
      font-size 3rem
      margin 8rem 0 3rem 0
  h2
    display inline-block
    color #fff
    background-color black
    text-transform uppercase
    font-size 1.2rem
    padding .1em 1.5em 0
    margin-bottom 2rem
  p
    line-height 2rem
    margin-bottom 1rem
    color $gray-8
  a
    position relative
    &::after
      content ''
      position absolute
      width 100%
      height 2px
      bottom 2px
      left 0
      background-color $gray-3
      transform-origin center center
      transform scaleX(1)
      transition all 200ms ease-out
    &:hover
      &::after
        transform scaleX(.8)
  .en
    margin-top 4rem
</style>
