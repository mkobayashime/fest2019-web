<template lang="pug">
  #goods
    h1 灘校グッズ
    p.description 灘校グッズのメニューです
    p.description その他の物品販売メニューは
      nuxt-link(to="/foods/") こちら
      | からご覧いただけます
    section
      .item(v-for="item in normal")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
    section
      h2 生徒企画品
      .item(v-for="item in design")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
</template>

<script>
import anime from 'animejs'
export default {
  data() {
    return {
      normal: [
        [['窓付き蛍光ペン'], '130'],
        [['クリフターシャーペン'], '100'],
        [['モノグラフシャーペン'], '400'],
        [['単色ボールペン'], '150'],
        [['合格五角形鉛筆(HB)'], '180'],
        [['ユニスター鉛筆'], '60'],
        [['消しゴム'], '130'],
        [['スタンプ式テープのり'], '350'],
        [['ペンケース'], '1,200'],
        [['下敷き'], '180'],
        [['クリアファイル A4'], '100'],
        [['灘校てぬぐい'], '300'],
        [['灘ベア', '(Sサイズ 9cm)'], '900'],
        [['灘校 校是 京扇子'], '1,500'],
      ],
      design: [
        [['デザインマグカップ'], '800'],
        [['デザイン15cm定規'], '300'],
        [['デザイン3色ボールペン'], '500'],
        [['デザイン表紙', 'B5ノート(B罫)'], '300'],
        [['デザインクリアファイル A4'], '250'],
        [['デザインクリアファイル', 'A5(2枚セット)'], '380'],
        [['デザイントートバッグ'], '800'],
        [['デザインTシャツ'], '1,500'],
      ],
    }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  head: {
    title: '灘校グッズ | 第73回灘校文化祭',
    meta: [
      {
        property: 'og:title',
        content: '灘校グッズ | 第73回灘校文化祭',
      },
      {
        property: 'og:description',
        content: '灘校グッズのメニューをご覧いただけます',
      },
    ],
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('goods'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        complete: done,
      })
      anime({
        targets: document.getElementById('the-footer'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        complete: done,
      })
    },
    leave(el, done) {
      anime({
        targets: document.getElementById('goods'),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        complete: done,
      })
      anime({
        targets: document.getElementById('the-footer'),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        complete: done,
      })
    },
  },
}
</script>

<style lang="stylus">
#goods
  articleWidth()
  h1
    h1SizeWithP()
  .description
    color $gray-6
    height 2em
    a
      position relative
      &::after
        position absolute
        content ''
        background-color $gray-3
        width 100%
        height 2px
        bottom 1px
        left 0
        transition transform 300ms ease-out
        transform scaleX(1)
      &:hover
        &::after
          transform scaleX(.8)
  section
    margin 3rem 0
    h2
      display inline-block
      margin 2rem 0 1rem
      padding .1em 1em 0
      font-size 2rem
      background-color #000
      color #fff
      +sp()
        font-size 1.5rem
    .item
      margin 1.5rem 0
      display flex
      flex-direction row
      align-items center
      justify-content space-between
      h3
        bold()
        font-size 1.5rem
        margin-right .7rem
        flex-shrink 0
        +sp()
          font-size 1.2rem
          max-width 60%
          flex-shrink 0
        p
          display inline-block
          margin-right .3em
      .tab
        width 100%
        height 2px
        background-color $gray-2
      .price
        margin-left 1rem
        font-size 1.5rem
        color $gray-6
        flex-shrink 0
        +sp()
          font-size 1.2rem
</style>
