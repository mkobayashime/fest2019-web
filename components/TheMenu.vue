<template lang="pug">
  nav#the-menu
    .menu-container
      transition.menu-container(:css="false" @enter="itemsEnter" @leave="itemsLeave")
        ul.menu-items(v-if="opened")
          li
            nuxt-link.menu-item(to="/" @click.native="toggleWait")
              p.en home
              p.jp ホーム
          li
            nuxt-link.menu-item.non-exact(to="/map/" @click.native="toggleWait")
              p.en map
              p.jp 校内マップ
          li
            nuxt-link.menu-item.non-exact(to="/timetable/" @click.native="toggleWait")
              p.en timetable
              p.jp タイムテーブル
          li
            nuxt-link.menu-item.non-exact(to="/circles/" @click.native="toggleWait")
              p.en circles
              p.jp 参加サークル
          li
            nuxt-link.menu-item.non-exact(to="/goods/" @click.native="toggleWait")
              p.en goods
              p.jp 灘校グッズ
          li
            nuxt-link.menu-item.non-exact(to="/time/" @click.native="toggleWait")
              p.en time
              p.jp 現在の待ち時間
          li
            nuxt-link.menu-item.non-exact(to="/pamphlet/" @click.native="toggleWait")
              p.en pamphlet
              p.jp パンフレット
          li
            nuxt-link.menu-item.non-exact(to="/about/" @click.native="toggleWait")
              p.en about
              p.jp 文化委員会について
          li
            nuxt-link.menu-item.non-exact(to="/design/" @click.native="toggleWait")
              p.en design
              p.jp デザイン
          li
            nuxt-link.menu-item.non-exact(to="/blog/" @click.native="toggleWait")
              p.en blog
              p.jp ブログ
          li
            nuxt-link(to="/privacy/" @click.native="toggleWait").privacy.menu-item.isNarrow Privacy Policy
      .spacer.isWide
      transition(:css="false" @enter="infoEnter" @leave="infoLeave")
        .info(:class="{opened:opened}" v-if="opened").isWide
          p.el 73rd Nada School Festival
          p.el SAIL AWAY
          .spacer.el
          p.el 2019.05.02&ndash;03
          .spacer.el
          .links
            a.el(:href="sns.twitter" target="_blank" rel="noopener" aria-label="Twitter") Tw
            a.el(:href="sns.ig" target="_blank" rel="noopener" aria-label="Instagram") IG
            a.el(:href="sns.fb" target="_blank" rel="noopener" aria-label="Facebook") Fb
          .spacer.el
          nuxt-link.el(to="/privacy/" @click.native="toggleWait") Privacy Policy
          .spacer.el
          p.el Design Team © 2019
    .bg-container
      .bg-dummy.bg-dummy1(:class="{opened:opened}")
      .bg-dummy.bg-dummy2(:class="{opened:opened}")
      .bg-dummy.bg-dummy3(:class="{opened:opened}")
      .bg-dummy.bg-dummy4(:class="{opened:opened}").isDesktop
      .bg-dummy.bg-dummy5(:class="{opened:opened}").isDesktop
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
    toggleWait() {
      window.setTimeout(() => {
        this.toggle()
      }, 300)
    },
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
      +sp()
        margin-bottom -3rem
      +desktop()
        margin-bottom -5rem
      li
        height 4rem
        @media screen and (max-height: 800px)
          height 3.3rem
        +sp()
          height 2.8rem
          &:last-of-type
            height 2rem
        @media screen and (max-height: 650px)
          height 2.5rem
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
          @media screen and (max-height: 800px)
            font-size 1.8rem
          +sp()
            font-size 1.5rem
            letter-spacing .02em
          @media screen and (max-device-width: 360px)
            font-size 1.2rem
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
          z-index -1
          +sp()
            width 2.5em
            height 2.5em
            left -1em
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
      & .nuxt-link-active.non-exact
        .en
          margin-left .5em
          +sp()
            margin-left 0
        .jp
          color #fff
        &::before
          transform scaleX(1)
        &::after
          background-color #fff
      & .nuxt-link-exact-active
        .en
          margin-left .5em
          +sp()
            margin-left 0
        .jp
          color #fff
        &::before
          transform scaleX(1)
        &::after
          background-color #fff
      .privacy
        display block
        margin-top .5rem
        position relative
        z-index 910
        color $gray-4
        text-align center
        transition color 300ms
        &::before
          display none
        &.nuxt-link-exact-active
          color #fff
    .spacer
      width 20vw
      +maxWidth(1200)
        width 10vw
    .info
      display flex
      flex-direction column
      align-items flex-end
      justify-content flex-end
      flex-shrink 0
      color $gray-4
      +sp()
        align-items flex-start
      p
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
        +sp()
          margin-right 10px
          margin-left 0
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

  .isDesktop
    +touch()
      display none !important
  .isMobileOrTablet
    +desktop()
      display none !important
  .isWide
    +maxWidth(1000)
      display none !important
  .isNarrow
    +minWidth(1001)
      display none !important
</style>
