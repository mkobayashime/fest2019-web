<template lang="pug">
  #sorry
    .paragraph
      p.sorry ご使用のブラウザには対応しておりません
      p.sorry 申し訳ございませんが、以下のブラウザをご利用ください
      .spacer
      ul
        li Google Chrome / Mozilla Firefox
        li Microsoft Edge / Safari / Opera / Vivaldi
      .spacer
      img.tagline-jp(src="~/assets/logo/black/tagline-jp.svg" alt="SAIL AWAY")
    the-footer
</template>

<script>
export default {
  head: {
    title: '非対応ブラウザです',
    titleTemplate: ''
  },
  components: {
    TheFooter: () => import('~/components/TheFooter')
  },
  layout: 'sorry'
}
</script>

<style lang="stylus" scoped>
#sorry
  .paragraph
    width 41rem
    height 100vh
    margin 0 auto
    top 0
    display flex
    flex-direction column
    justify-content center
    align-items flex-start
    +tablet()
      width 30rem
    +sp()
      width 100%
      height auto
      padding 7rem 2rem
    .sorry
      bold()
      font-size 1.5rem
      letter-spacing .05em
      line-height 2em
      margin .5rem 0
      +sp()
        font-size 1.2rem
    .spacer
      height 2px
      width 50px
      background-color #000
      margin 3em 0
    ul
      margin-top 1em
      li
        font-size 1.2rem
        margin .5rem 0
    .tagline-jp
      height 1.5rem
      +sp()
        height 1.2rem
</style>
