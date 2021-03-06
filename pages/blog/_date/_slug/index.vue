<template lang="pug">
  #blog-article
    header#header
      h1
        p {{ title }}
        .bg
      .meta
        .txt
          p.author {{ author }}
          time(:datetime="params.date") {{ getDate(params.date) }}
        .bg
    article(v-html="bodyHtml")
</template>

<script>
import anime from 'animejs'
import { sourceFileArray } from '~/assets/articles/summary.json'
export default {
  components: {},
  validate({ params }) {
    return sourceFileArray.includes(
      `./assets/articles/md/${params.date}-${params.slug}.md`
    )
  },
  asyncData({ params }) {
    return Object.assign(
      require(`~/assets/articles/json/${params.date}-${params.slug}.json`),
      { params }
    )
  },
  created() {
    if (!this.images) this.images = []
    if (!this.thumbnail) {
      this.images.push('default/thumbnail.jpg')
    }
    this.images.forEach((src) => {
      require(`~/assets/img/blog/${src}`)
    })
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
    const header = document.getElementById('header')
    const thumbnail = this.thumbnail ? this.thumbnail : 'default/thumbnail.jpg'
    header.style.background = `url(_nuxt/assets/img/blog/${thumbnail})`
    header.style.backgroundSize = 'cover'
    header.style.backgroundPosition = 'center center'
  },
  methods: {
    getDate(sourceDate) {
      return sourceDate.replace(/-/g, ' ')
    }
  },
  head() {
    const title = `${this.title} | 第73回灘校文化祭ブログ`
    const description = `${this.author} | ${this.bodyContent}`
    return {
      title,
      meta: [
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        }
      ]
    }
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('blog-article'),
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
        targets: document.getElementById('blog-article'),
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
header
  width 100%
  padding 10rem 0 10rem
  text-align center
  display flex
  flex-direction column
  align-items center
  justify-content center
  position relative
  z-index -2
  +tablet()
    padding 7rem 0
  +sp()
    padding 8rem 0 5rem
  h1
    display inline-block
    position relative
    padding .4em 1em .1em
    font-size 3rem
    line-height 1.2em
    +tablet()
      font-size 2.5rem
    +sp()
      font-size 1.5rem
    p
      opacity 0
      animation h1Enter 300ms linear 1000ms 1 normal forwards
      @keyframes h1Enter {
        0% {
          opacity 0
        }
        100% {
          opacity 1
        }
      }
    .bg
      content ''
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      background-color #fff
      z-index -1
      transform-origin left center
      transform scaleX(0)
      animation h1BgEnter 500ms ease-in-out 700ms 1 normal forwards
      @keyframes h1BgEnter {
        0% {
          transform scaleX(0)
        }
        100% {
          transform scaleX(1)
        }
      }
  .meta
    margin-top 1em
    padding .2em 1em 0
    position relative
    .txt
      opacity 0
      animation metaEnter 300ms linear 1000ms 1 normal forwards
      @keyframes metaEnter {
        0% {
          opacity 0
        }
        100% {
          opacity 1
        }
      }
      .author, time
        display inline-block
        font-size 1.2rem
        bold()
        color $gray-6
        +sp()
          font-size .8rem
      .author::after
        content '/'
        margin 0 .5em
      time
        font-size 1.4rem
        +sp()
          font-size .95rem
    .bg
      content ''
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      background-color #fff
      z-index -1
      transform-origin right center
      transform scaleX(0)
      animation metaBgEnter 500ms ease-in-out 700ms 1 normal forwards
      @keyframes metaBgEnter {
        0% {
          transform scaleX(0)
        }
        100% {
          transform scaleX(1)
        }
      }
article
  articleWidth()
  +touch()
    margin 3rem auto 5rem
  >>> h2
    bold()
    font-size 2rem
    margin 3rem 0 1rem
    border-bottom 2px solid $gray-2
    +sp()
      font-size 1.5rem
  >>> h3
    bold()
    font-size 1.3rem
    margin 1.5rem 0 .5rem
    +sp()
      font-size 1.2rem
  >>> h4
    bold()
    font-size 1rem
    margin 1rem 0 0
  >>> p
    color $gray-7
    line-height 2em
  >>> ol
    margin 1rem auto
    padding-left 2em
    list-style-type none
    counter-reset item
    li
      color $gray-7
      &::before
        counter-increment item
        content counter(item)'.'
        display inline-block
        margin-right .5em
        width 1em
        bold()
        color $blue-10
  >>> ul
    margin 1rem auto
    padding-left 2em
    li
      position relative
      color $gray-7
      &::before
        content ''
        position absolute
        width 5px
        height 5px
        left -15px
        top .65em
        background-color $blue-10
  >>> img
    width 100%
    margin 2rem 0
  >>> a
    position relative
    &:hover
      &::after
        transform scaleX(.8)
    &::after
      content ''
      position absolute
      bottom 1px
      left 0
      width 100%
      height 2px
      background-color $gray-3
      transform scaleX(1)
      transform-origin center center
      transition transform 200ms ease-out
  >>> hr
    opacity 0
    height 1rem
</style>
