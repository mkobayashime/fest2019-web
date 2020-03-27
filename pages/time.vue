<template lang="pug">
  #time
    h1 待ち時間
    p.description 現在の待ち時間をご確認いただけます
    .btn-container
      span
        .paragraph
          p ご利用ありがとうございました
</template>

<script>
import anime from 'animejs'
export default {
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
    // this.timeout = window.setTimeout(() => {
    //   window.open('https://nadaschoolfestvote-yukikari.c9users.io', '_blank')
    // }, 3000)
  },
  destroyed() {
    window.clearTimeout(this.timeout)
  },
  head: {
    title: '待ち時間 | 第73回灘校文化祭',
    meta: [
      {
        property: 'og:title',
        content: '待ち時間 | 第73回灘校文化祭',
      },
      {
        property: 'og:description',
        content: '現在の待ち時間をご確認いただけます',
      },
    ],
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('time'),
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
        targets: document.getElementById('time'),
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
#time
  articleWidth()
  h1
    h1SizeWithP()
  .description
    color $gray-6
    line-height 2em
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
  .thumbnail-container
    margin 5rem auto
    width 100%
    height 30rem
    display flex
    align-items center
    justify-content center
    .thumbnail
      height 30rem
      box-shadow 0px 10px 20px 0px rgba(0,0,0,0.15)
      +sp()
        width 100%
  .btn-container
    margin 5rem auto
    height 6rem
    width 100%
    display flex
    align-items center
    justify-content center
    span
      position relative
      width 100%
      height 100%
      background-color #000
      transition all 300ms ease-in-out
      .paragraph
        position absolute
        width 100%
        height 100%
        left 50%
        top 50%
        transform translate(-50%, -50%)
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        padding 0 1rem
        opacity 1
        transition all 300ms
        color #fff
        p
          &:nth-of-type(1)
            bold()
            font-size 1.3rem
            +sp()
              font-size 1rem
    &:hover
      span
        background-color $blue-10
        img
          opacity 1
</style>
