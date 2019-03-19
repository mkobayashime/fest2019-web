<template lang="pug">
  #the-menu
    .menu-container
      transition.menu-container(:css="false" @enter="itemsEnter" @leave="itemsLeave")
        .menu-items(v-if="opened")
          nuxt-link.menu-item(to="/" @click.native="toggle")
            p.en home
            p.jp ホーム
          .menu-item.disabled(to="circles" @click.native="toggle")
            p.en circles
            p.jp 近日公開予定
          .menu-item.disabled(to="map" @click.native="toggle")
            p.en map
            p.jp 近日公開予定
          .menu-item.disabled(to="timetable" @click.native="toggle")
            p.en timetable
            p.jp 近日公開予定
          .menu-item.disabled(to="goods" @click.native="toggle")
            p.en goods
            p.jp 近日公開予定
          .menu-item.disabled(to="foods" @click.native="toggle")
            p.en foods
            p.jp 近日公開予定
          nuxt-link.menu-item(to="about" @click.native="toggle")
            p.en about
            p.jp 文化委員会について
          nuxt-link.menu-item(to="design" @click.native="toggle")
            p.en design
            p.jp デザイン
      .spacer(v-if="$device.isDesktop")
      transition(:css="false" @enter="infoEnter" @leave="infoLeave")
        .info(:class="{opened:opened}" v-if="opened && $device.isDesktop")
          p.el 73rd Nada School Festival
          p.el SAIL AWAY
          .spacer.el
          p.el 2018.05.02&ndash;03
          .spacer.el
          .links
            a.el(:href="sns.twitter" target="_blank" rel="noopener" aria-label="Twitter") Tw
            a.el(:href="sns.ig" target="_blank" rel="noopener" aria-label="Instagram") IG
            a.el(:href="sns.fb" target="_blank" rel="noopener" aria-label="Facebook") Fb
          .spacer.el
          p.el Design Team © 2019
    .bg-container
      .bg-dummy.bg-dummy1(:class="{opened:opened}")
      .bg-dummy.bg-dummy2(:class="{opened:opened}")
      .bg-dummy.bg-dummy3(:class="{opened:opened}")
      .bg-dummy.bg-dummy4(:class="{opened:opened}" v-if="$device.isDesktop")
      .bg-dummy.bg-dummy5(:class="{opened:opened}" v-if="$device.isDesktop")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import anime from 'animejs'
import sns from '~/assets/data/sns.json'
export default {
  data() {
    return {
      sns: sns
    }
  },
  computed: {
    ...mapGetters({
      opened: 'menu/opened'
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'menu/toggle'
    }),
    itemsEnter: (el, done) => {
      anime({
        targets: '#the-menu .menu-item',
        translateY: ['2em', 0],
        opacity: [0, 1],
        delay: anime.stagger(50, { start: 400 }),
        duration: 1000,
        easing: 'easeOutQuint',
        complete: done
      })
    },
    infoEnter: (el, done) => {
      anime({
        targets: '#the-menu .info .el',
        opacity: [0, 1],
        delay: anime.stagger(50, { start: 600 }),
        duration: 500,
        easing: 'linear',
        complete: done
      })
    },
    itemsLeave: (el, done) => {
      anime({
        targets: '#the-menu .menu-item',
        translateY: [0, '-2em'],
        opacity: [1, 0],
        delay: anime.stagger(50),
        duration: 300,
        easing: 'easeInSine',
        complete: done
      })
    },
    infoLeave: (el, done) => {
      anime({
        targets: '#the-menu .info .el',
        opacity: [1, 0],
        delay: anime.stagger(20),
        duration: 1000,
        easing: 'easeOutQuint',
        complete: done
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#the-menu
  display flex
  align-items center
  justify-content center
  position absolute
  width calc(100% - 70px)
  left 70px
  height 100%
  top 0
  +sp()
    width 100%
    left 0
  .menu-container
    display flex
    align-items flex-end
    justify-content center
    .menu-items
      display flex
      flex-direction column
      align-items flex-start
      justify-content center
      flex-shrink 0
      color #fff
      .menu-item
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        width 30em
        position relative
        z-index 910
        outline none
        +sp()
          width 75vw
          margin .3rem 0
        &:nth-child(1)
          margin-top -1rem
        &:nth-last-child(1)
          margin-bottom -1rem
        +desktop()
          &:hover
            .en
              margin-left .5em
            .jp
              color #fff
            &::after
              background-color #fff
        .en
          margin-right 1rem
          font-size 2.5rem
          letter-spacing .05em
          bold()
          text-transform lowercase
          flex-shrink 0
          order 1
          transition all 200ms ease-out
          +sp()
            font-size 1.5rem
            letter-spacing .02em
          @media screen and (max-device-width: 360px)
            font-size 1.3rem
        .jp
          margin-left 1rem
          letter-spacing .1em
          color $gray-5
          flex-shrink 0
          order 3
          transition all 200ms
          +sp()
            font-size .9rem
            letter-spacing .05em
          @media screen and (max-device-width: 360px)
            font-size .8rem
            letter-spacing 0
        &::before
          content ''
          position absolute
          width 2em
          height 1em
          left -2em
          background-color $blue-10
          transform scaleX(0)
          transform-origin left center
          transition all 200ms ease-in-out
        &::after
          content ''
          width 100%
          height 1px
          background-color $gray-5
          order 2
          transition all 200ms
      & .disabled
        .en, .jp
          color $gray-8
        &:hover .jp
          color $gray-8
        &:hover::after
          background-color $gray-5
      & .nuxt-link-exact-active
        .en
          margin-left .5em
        .jp
          color #fff
        &::before
          transform scaleX(1)
        &::after
          background-color #fff
    .spacer
      width 20vw
    .info
      display flex
      flex-direction column
      align-items flex-end
      justify-content flex-end
      flex-shrink 0
      p
        color $gray-4
        letter-spacing .02em
        z-index 910
      .spacer
        width 15px
        height 3px
        margin 12px 0
        background-color $gray-8
        z-index 910
      .links
        display flex
        a
          margin-left 10px
          position relative
          color $gray-4
          z-index 910
          transition color 200ms ease
          &::after
            content ''
            position absolute
            width 100%
            height 1px
            bottom 0
            left 0
            background-color $gray-4
            transform-origin center center
            transform scaleX(1)
            transition all 200ms ease-out
          &:hover
            color #fff
            &::after
              background-color #fff
              transform scaleX(.8)

  .bg-container
    position absolute
    width 100%
    height 100%
    top 0
    display flex
    flex-direction row
    .bg-dummy
      background-color #000
      width 100%
      top 0
      height 0
      transition all 300ms ease-out
      z-index 900
      &.opened
        height 100vh
    for i in (1..5)
      .bg-dummy{i}
        transition-delay (i*100+100)ms
        &.opened
          transition-delay (i*100)ms
</style>
