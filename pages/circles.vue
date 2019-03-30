<template lang="pug">
  #circles
    span 検索: 
    input(v-model="keyword" type="text")
    transition-group(name="aaa" tag="div").circles
      section.circle(v-for="circle in filtered(keyword)" key="circle.name" @click="toggle(circle)")
        h2.name {{circle.name}}
        p.place {{circle.place}}
        .descs(v-if="circle.opened")
          p.desc(v-for="desc in circle.description") {{desc}}
</template>

<script>
/* eslint no-console: 0 */
import circles from '~/assets/data/circles.json'
export default {
  head: {
    title: '出展サークル | 第73回灘校文化祭'
  },
  data() {
    return {
      circles: circles,
      keyword: ''
    }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  methods: {
    filtered(keyword) {
      const dist = circles.filter(circle => {
        return (
          this.doesContain(circle.name, keyword) ||
          this.doesContain(circle.place, keyword)
        )
      })
      return dist
    },
    doesContain(el, keyword) {
      return el.toLowerCase().indexOf(keyword) !== -1
    },
    toggle(circle) {
      circle.opened = !circle.opened
    }
  }
}
</script>

<style lang="stylus">
#circles
  mainContainer()
  margin-top 5rem
  min-height 100vh
  .circles
    width 100%
    margin-top 5rem
    display flex
    flex-wrap wrap
    .circle
      position relative
      margin-bottom 3rem
      // margin-left 1rem
      padding 1.5rem
      flex-grow 10
      // background-color $gray-1
      width 40%
      +desktop()
        &:nth-of-type(2n)
          margin-left 3rem
      +touch()
        width 80%
      &::before
        content ''
        position absolute
        width 100%
        height 100%
        top 1rem
        left 1rem
        background-color $blue-10
        z-index -1
        transition all 200ms ease-out
        // transform-origin top center
        // transform scaleY(0)
        opacity 0
      &::after
        content ''
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        border solid #000 2px
      // &:hover
      //   &::before
      //     opacity .7
      h2
        display inline-block
        padding .3rem 1.5rem 0.2rem
        margin-left -2.5rem
        margin-bottom 1.5rem
        background-color #000
        font-size 1.2rem
        color #fff
      .place
        bold()
        text-align right
        letter-spacing .05em
      .descs
        margin-top 1rem
  .aaa-encter-active, .aaa-leave-active
    transition all 500ms
  .aaa-enter, .aaa-leave-to
    opacity 0
    transform translateY(1rem)
</style>
