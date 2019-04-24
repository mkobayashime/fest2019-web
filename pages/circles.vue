<template lang="pug">
  #circles
    h1 参加サークル
    .textbox
      input.search(v-model="keyword" type="text" placeholder=" ")
      label Search
    transition-group(name="circles-anim" tag="div").circles
      section.circle(v-for="circle in filtered(keyword)" :key="circle.name" @click="toggle(circle)")
        .main
          h2.name {{circle.name}}
          p.place {{circle.place}}
        transition(name="descs-fade")
          .descs(v-show="circle.opened")
            p.desc(v-for="desc in circle.description") {{desc}}
</template>

<script>
import circles from '~/assets/data/circles.json'
export default {
  head: {
    title: '参加サークル | 第73回灘校文化祭'
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
  width 100%
  max-width 800px
  margin 5rem auto 10rem
  min-height 100vh
  +deskSmall()
    max-width 600px
  h1
    font-size 4rem
    margin 10rem 0 2rem
    +sp()
      font-size 2rem
      margin 8rem 0 1rem 1.5rem
    +tablet()
      font-size 3rem
      margin 8rem 0 1rem 2rem
  .textbox
    display block
    max-height 48px
    padding 20px 0px 4px 0
    width 264px
    height 48px
    position relative
    +tablet()
      margin-left 2rem
    +sp()
      width calc(100% - 3rem)
      margin 0 auto
    .search
      display block
      outline 0
      border 0
      width 15em
      padding 8px 4px 6px 10px
      font-size 1.2em
      background rgba(0,0,0,0)
      color rgba(0,0,0,.67)
      border-bottom 3px solid $gray-2
      transition border-bottom 200ms
      +sp()
        width 100%
      ~ label
        font-size 1.2em
        color rgba(0,0,0,.67)
        display block
        position absolute
        top 24px
        left 10px
        pointer-events none
        margin-right 12px
        transition all .2s
      &:focus, &:not(:placeholder-shown)
        ~ label
          font-size .8em
          top 8px
      &:focus
        border-bottom 3px solid $blue-10
      &:before
        content ''
        display block
        width 0
        height 2px
        background $blue-10
        position absolute
        top -3px
        left -8px
        margin-left 132px
        visibility visible
        transition all .2s
  .circles
    width 100%
    margin-top 5rem
    display flex
    flex-direction column
    section:nth-of-type(2n+1)
      background-color $gray-1
    .circle
      position relative
      padding 1rem 3rem
      transition all 200ms ease-out
      cursor pointer
      &::before
        content ''
        position absolute
        width 10px
        height 100%
        left 0
        top 0
        background-color $blue-10
        transition all 200ms ease-out
        transform scaleX(0)
        transform-origin left center
      +desktop()
        &:hover
          &::before
            content ''
            transform scaleX(1)
      +tablet()
        padding 1rem 2rem
      +sp()
        padding 1rem 1.5rem
      .main
        display flex
        justify-content space-between
        align-items center
        h2
          bold()
          font-size 1.2rem
          color $gray-8
        .place
          color $gray-7
          transition all 200ms ease-out
          +sp()
            font-size .8rem
      .descs
        color $gray-7
        margin-top 1rem
        transition opacity 200ms linear
      .descs-fade-enter, .descs-fade-leave-to
        opacity 0
  .circles-anim-encter-active, .circles-anim-leave-active
    transition all 500ms
  .circles-anim-enter, .circles-anim-leave-to
    opacity 0
    transform translateY(1rem)
</style>
