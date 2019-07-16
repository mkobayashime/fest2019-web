<template lang="pug">
  #design
    h1 Design
    h2
      p 各種ロゴ・ロゴタイプをダウンロードいただけます。PNGは背景透過、JPGは白背景です。
    ul.logos
      li.logo-container(v-for="logo in logos")
        p.name {{logo.name}}
        .logo-inner
          .img-container(:class="{vertical: !logo.horizontal}")
            img(:src="logo.src[2].url" :alt="logo.name")
          .btn-container
            a(v-for="src in logo.src" :href="src.url" target="_blank" rel="noopener")
              img(src="~/assets/icon/fa-download.svg" alt="Download")
              p {{src.format}}
</template>

<script>
import anime from 'animejs'
import designDist from '~/assets/data/design-dist.json'
require('~/assets/data/design-require.js')
export default {
  head: {
    title: 'Design | 第73回灘校文化祭',
    meta: [
      {
        property: 'og:title',
        content: 'Design | 第73回灘校文化祭'
      },
      {
        property: 'og:description',
        content: 'ロゴキットやブランドガイドラインを配布しています'
      }
    ]
  },
  data() {
    return {
      logos: designDist
    }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('design'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        complete: done
      })
      anime({
        targets: document.getElementById('the-footer'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        complete: done
      })
    },
    leave(el, done) {
      anime({
        targets: document.getElementById('design'),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        complete: done
      })
      anime({
        targets: document.getElementById('the-footer'),
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
#design
  mainContainer()
  top 0
  left 0
  h1
    font-size 4rem
    margin 10rem 0 2rem
    +sp()
      font-size 3rem
      margin 8rem 0 2rem
    +tablet()
      font-size 3rem
      margin 8rem 0 2rem
  h2
    margin-bottom 5rem
    p
      font-size 1rem
      font-weight 400
      line-height 2em
      color $gray-6
  .guidelines
    display inline-block
    font-size 1.2rem
    letter-spacing .05em
    color #fff
    background-color $blue-10
    padding .5em 2rem
    margin 2rem 0 6rem
    transition all 200ms
    &:hover
      background-color #000
  .logos
    display flex
    justify-content center
    align-items center
    flex-wrap wrap
    margin-bottom 10rem
    +touch()
      margin-bottom 5rem
    .logo-container
      margin-bottom 3rem
      +desktop()
        width 45%
        flex-grow 1
        &:nth-of-type(2n+1)
          margin-right 3rem
      +touch()
        width 100%
      +desktop()
        &:nth-last-of-type(1)
          margin-right 0
          .img-container
            width 50%
            margin-left 25%
      .name
        color $gray-7
      .logo-inner
        border solid $gray-2 2px
        .img-container
          height 15rem
          padding 1.5rem
          display flex
          +deskSmall()
            height 12rem
          +tablet()
            height 18rem
            padding 1.5rem 3rem
          +sp()
            height 12rem
          img
            width 100%
        .vertical
          img
            height 100%
        .btn-container
          height 4rem
          width 100%
          display flex
          align-items center
          justify-content center
          border-top solid $gray-2 2px
          a
            position relative
            width 20%
            height 100%
            flex-grow 2
            background-color $gray-1
            transition all 200ms
            img, p
              position absolute
              left 50%
              top 50%
              transform translate(-50%, -50%)
            img
              opacity .8
              height 1.5rem
              opacity 0
              transition all 300ms
            p
              text-transform uppercase
              opacity 1
              transition all 300ms
            &:hover
              background-color $gray-2
              img
                opacity 1
              p
                opacity 0
</style>
