<template lang="pug">
  #ms
    h1 Ms. Nada 予選投票
    p.description 1日目に実施されるMs. コンテスト予選の投票フォームはこちらです
    section
      h2 Aグループ
      ol
        li ゆうぽん
        li フジコ
        li 令和
        li かのん
        li レオナ
      a(href="https://forms.gle/Q9nFMeKGofvzgWuPA" target="_blank" rel="noopener")
        p 投票フォームはこちら!
    section
      h2 Bグループ
      ol
        li 智子
        li アストライア
        li スミレ
        li レディー・クニ
      a(href="https://forms.gle/ABg1rXG2KTChr3fG8" target="_blank" rel="noopener")
        p 投票フォームはこちら!
    section
      h2 Cグループ
      ol
        li 七海
        li 結
        li きらり
        li 希
      a(href="https://forms.gle/qXCsratQpQajtYZq9" target="_blank" rel="noopener")
        p 投票フォームはこちら!
</template>

<script>
import anime from 'animejs'
export default {
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  head: {
    title: 'Ms. Nada 投票 | 第73回灘校文化祭',
    meta: [
      {
        property: 'og:title',
        content: 'Ms. Nada 投票 | 第73回灘校文化祭',
      },
      {
        property: 'og:description',
        content:
          '1日目に実施されるMs. コンテスト予選の投票フォームはこちらです',
      },
    ],
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('ms'),
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
        targets: document.getElementById('ms'),
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
#ms
  articleWidth()
  h1
    h1SizeWithP()
  .description
    color $gray-6
    line-height 2em
    counter-reset num
  section
    margin 3rem 0
    h2
      font-size 2rem
    ol
      list-style none
      padding 0
      li
        bold()
        color $gray-6
        line-height 2rem
        margin 1rem 0
        &::before
          content counter(num)
          counter-increment num
          margin-right 1rem
          margin-left .2rem
    a
      display inline-block
      padding .5em 2em
      background-color #000
      color #fff
      bold()
      font-size 1.2rem
      transition background-color 300ms ease-out
      &:hover
        background-color $blue-10
      +touch()
        background-color $blue-10
      +sp()
        display flex
        align-items center
        justify-content center
        width 100%
</style>
