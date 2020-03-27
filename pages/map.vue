<template lang="pug">
  #map
    .head
      h1 校内マップ
    .btn-container
      button(@click="enter1f()" :class="{active: this.floor === 1}")
        span 1階
      button(@click="enter2f()" :class="{active: this.floor === 2}")
        span 2階
      button(@click="enter3f()" :class="{active: this.floor === 3}")
        span 3階
      button(@click="enter4f()" :class="{active: this.floor === 4}")
        span 4階
    .map
      transition(name="fade" mode="out-in")
        img(src="~/assets/map/1F.svg" v-if="this.floor===1" key="1")
        img(src="~/assets/map/2F.svg" v-if="this.floor===2" key="2")
        img(src="~/assets/map/3F.svg" v-if="this.floor===3" key="3")
        img(src="~/assets/map/4F.svg" v-if="this.floor===4" key="4")
</template>

<script>
import anime from 'animejs'
export default {
  data() {
    return {
      floor: 1,
    }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  methods: {
    enter1f() {
      this.floor = 1
    },
    enter2f() {
      this.floor = 2
    },
    enter3f() {
      this.floor = 3
    },
    enter4f() {
      this.floor = 4
    },
  },
  head: {
    title: '校内マップ | 第73回灘校文化祭',
    meta: [
      {
        property: 'og:title',
        content: '校内マップ | 第73回灘校文化祭',
      },
      {
        property: 'og:description',
        content: 'フロアマップをご覧いただけます',
      },
    ],
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('map'),
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
        targets: document.getElementById('map'),
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

<style lang="stylus" scoped>
#map
  margin-bottom 5rem
  .head
    mainContainer()
    h1
      h1SizeWithP()
      +tablet()
        margin-bottom 2rem
      +sp()
        margin-bottom 2rem
  .btn-container
    width 100%
    height 4rem
    margin 3rem 0
    display flex
    flex-direction row
    align-items center
    justify-content space-between
    +desktop()
      mainContainer()
      margin-bottom 3rem
    button
      height 100%
      width 10%
      padding-top .2rem
      flex-grow 1
      outline none
      background-color $gray-2
      color $gray-7
      bold()
      font-size 1.5rem
      transition all 300ms ease-out
      +deskSmall()
        font-size 1.2rem
      +tablet()
        font-size 1rem
      +sp()
        font-size .9rem
        &:hover
          background-color $gray-2
          color $gray-7
      &:hover
        background-color $blue-10
        color #fff
      span
        line-height 1em
        display inline-block
    .active
      background-color #000
      color #fff
      &:hover
        background-color #000
        color #fff
      +touch()
        background-color $blue-10
        color #fff
        &:hover
          background-color $blue-10
          color #fff
  .map
    width 100%
    +desktop()
      mainContainer()
    img
      width 100%
  .fade-enter-active, .fade-leave-active
    transition opacity 300ms linear
  .fade-enter, .fade-leave-to
    opacity 0
</style>
