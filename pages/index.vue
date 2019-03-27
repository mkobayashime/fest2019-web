<template lang="pug">
  .index
    .hero
      #pixi
        img.bg-pixi(src="~/assets/img/hero1.jpg" alt="背景画像")
        img.d-pixi(src="~/assets/img/clouds-512.jpg" alt="displacement map")
      .left
        h1
          img.logotype(src="~/assets/logo/white/tagline-jp.svg" alt="第73回灘校文化祭")
        button.about(type="button" @click="goToDetail()") 開催要項
          .arrow
      img.logo(src="~/assets/logo/white/vertical-b.svg" alt="SAIL AWAY")
      button(type="button" @click="goNext()").arrow-container
        .arrow
    .concept
      .bg
        .logotype-container
          img.logotype(src="~/assets/logo/white/logotype.svg" alt="文化祭ロゴタイプ")
          img.logotype(src="~/assets/logo/white/logotype.svg" alt="文化祭ロゴタイプ")
        .paragraph-container
          .paragraph
            h2 concept
            p 文化祭を航海になぞらえたこのテーマは、
            p 世界という大海へ懸命に漕ぎ出す灘校生と、
            p その出発点となるコミュニティとしての灘校を表しています
            p 停泊していた船は、動き始めるときにいかりを上げます
            p 水面から上がる瞬間のいかりを切り取ったロゴは、
            p 文化祭をきっかけとして始まる、
            p 壮大な航海を暗示しています
          nuxt-link.to-about(to="/about")
            span.label 文化委員会について
            .arrow-container
              .arrow
    .movie
      .bg
      img.logotype(src="~/assets/logo/white/logotype.svg" alt="文化祭ロゴタイプ")
      .outer
        button.inner(@click="showPv")
          .image.image-pc(v-if="$device.isDesktop")
          .image.image-touch(v-if="$device.isMobileOrTablet")
          .message
            p PVを再生
          youtube#video(:video-id="pvOption.videoId" :fitParent="pvOption.fitParent" ref="youtube")
    .detail
      h2.title 開催要項
      .columns
        .column
          .sidebar
          ul
            li
              p.sub-title.narrow day 1
              p.main 2019/05/02
                span.jp (木・祝)
            li
              p.sub-title.narrow day 2
              p.main 2019/05/03
                span.jp (金・祝)
            li
              p.sub-title time
              p.main 9:00&ndash;15:30
              p.sub 開場 9:00
            li
              p.sub-title theme
              p.main SAIL AWAY
              p.sub 第73回灘校文化祭
        .column
          .sidebar
          ul
            li
              p.sub-title place
              p.main 灘中学校・高等学校
              p.sub 〒658-0082
              p.sub 兵庫県神戸市東灘区魚崎北町8丁目5番1号
              a(href="http://www.nada.ac.jp/index.html" target="_blank" rel="noopener").sub 学校公式Webサイト
            li
              p.sub-title sns
              .line
                a(:href="sns.twitter" target="_blank" rel="noopener").main Twitter
              .line
                a(:href="sns.ig" target="_blank" rel="noopener").main Instagram
              .line
                a(:href="sns.fb" target="_blank" rel="noopener").main Facebook
</template>

<script>
/* eslint new-cap: 0 */
import * as PIXI from 'pixi.js'
import anime from 'animejs'
import sns from '~/assets/data/sns.json'
PIXI.utils.skipHello()
export default {
  components: {},
  head: {
    title: 'SAIL AWAY',
    meta: [
      // {
      //   property: 'og:title',
      //   content: ''
      // }
    ]
  },
  data() {
    return {
      sns: sns,
      pvOption: {
        fitParent: true,
        videoId: 'MDf4mm3C4ww'
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
    document.getElementById('video').style.verticalAlign = 'bottom'
    this.pixiContainer = document.getElementById('pixi')
    this.pixiInit()
  },
  destroyed() {
    this.renderer.destroy()
    this.stage.destroy()
    this.slide.destroy()
    this.image.destroy()
    this.displacementSprite.destroy()
    this.ticker.destroy()
  },
  methods: {
    goNext() {
      const el = document.querySelector('.concept .paragraph-container')
      const offset = document.getElementById('scroll-area').scrollTop
      const height = el.getBoundingClientRect().top + offset
      anime({
        targets: document.getElementById('scroll-area'),
        scrollTop: height,
        duration: 500,
        easing: 'easeOutQuint'
      })
    },
    goToDetail() {
      const el = document.querySelector('.detail')
      const offset = document.getElementById('scroll-area').scrollTop
      const height = el.getBoundingClientRect().top + offset
      anime({
        targets: document.getElementById('scroll-area'),
        scrollTop: height,
        duration: 500,
        easing: 'easeOutQuint'
      })
    },
    showPv() {
      document.querySelector('.movie .image').classList.add('hidden')
      document.querySelector('.movie .message').classList.add('hidden')
      this.player.playVideo()
    },
    pixiInit() {
      this.renderer = new PIXI.autoDetectRenderer(1280, 720, {
        transparent: true
      })
      this.stage = new PIXI.Container()
      this.slide = new PIXI.Container()

      const spriteImage = document.querySelector('.bg-pixi')
      const spriteImageSrc = spriteImage.getAttribute('src')
      const texture = new PIXI.Texture.fromImage(spriteImageSrc)
      this.image = new PIXI.Sprite(texture)
      this.image.anchor.set(0.5)
      this.image.x = this.renderer.width / 2
      this.image.y = this.renderer.height / 2
      this.slide.addChild(this.image)

      const displacementImageSrc = document
        .querySelector('.d-pixi')
        .getAttribute('src')
      this.displacementSprite = PIXI.Sprite.fromImage(displacementImageSrc)
      this.displacementFilter = new PIXI.filters.DisplacementFilter(
        this.displacementSprite
      )

      this.displacementSprite.texture.baseTexture.wrapMode =
        PIXI.WRAP_MODES.REPEAT
      this.stage.filters = [this.displacementFilter]
      this.displacementSprite.scale.x = 2
      this.displacementSprite.scale.y = 2

      this.displacementFilter.autoFit = true

      this.stage.addChild(this.displacementSprite)

      this.pixiContainer.appendChild(this.renderer.view)
      this.stage.addChild(this.slide)
      const canvas = document.querySelector('#pixi canvas')
      canvas.style.position = 'absolute'
      canvas.style.top = '50%'
      canvas.style.left = '50%'
      canvas.style.transform = `translate(-50%, -50%) scale(${this.calcScale()})`
      canvas.style.zIndex = '-1'

      this.ticker = new PIXI.ticker.Ticker()
      this.ticker.autoStart = true
      this.ticker.add(delta => {
        this.displacementSprite.x += 1 * delta
        this.displacementSprite.y += 3

        this.renderer.render(this.stage)
      })
    },
    calcScale() {
      const width = this.pixiContainer.clientWidth
      const height = this.pixiContainer.clientHeight
      const widthRatio = width / 1280
      const heightRatio = height / 720
      if (widthRatio > heightRatio) {
        return widthRatio * 1.2
      } else {
        return heightRatio * 1.2
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.index
  width 100%
  margin 0 auto
  .hero
    width 100%
    height 100vh
    position relative
    #pixi
      width 100%
      height 100%
      overflow hidden
      img
        display none
    .left
      position absolute
      width 25%
      height 100%
      top 0
      left 20%
      display flex
      flex-direction column
      justify-content center
      align-items flex-start
      +sp()
        width 100%
        height 30%
        left 0
        top 60%
        align-items center
      h1
        width 100%
        +sp()
          width 75%
        .logotype
          width 100%
      .about
        position relative
        margin-top 1em
        font-size 1.5rem
        letter-spacing 0.1em
        color #fff
        padding 0.2em 1em
        border solid 2px #fff
        display flex
        outline none
        +sp()
          font-size 1.2rem
        &::before
          content ''
          background-color #fff
          position absolute
          opacity 0.3
          width 100%
          height 100%
          top 0
          left 0
          transform-origin left center
          transform scaleX(0)
          transition all 200ms ease-out
        &:hover
          cursor pointer
          &::before
            transform scaleX(1)
            +sp()
              transform scaleX(0)
          .arrow
            width 70px
            +sp()
              width 30px
        .arrow
          position relative
          display block
          margin auto 0 auto 30px
          background-color #fff
          width 50px
          height 2px
          transition all 200ms ease-out
          +sp()
            width 30px
            margin auto 0 auto 15px
          &::before, &::after
            content ''
            position absolute
            width 2px
            height 12px
            right -2px
            background-color #fff
          &::before
            bottom 1px
            transform-origin right bottom
            transform rotate(-45deg)
          &::after
            top 1px
            transform-origin right top
            transform rotate(45deg)
    .logo
      position absolute
      height 70%
      top 50%
      left 70%
      transform translate(-50%, -50%)
      +sp()
        height 45%
        left 50%
        top 12%
        transform translateX(-50%)
    .arrow-container
      position absolute
      width 120px
      height 120px
      bottom 0
      right 0
      background-color #000
      display flex
      justify-content center
      align-items center
      cursor pointer
      outline none
      +sp()
        display none
      .arrow
        position absolute
        width 5px
        height 50px
        background-color #fff
        &::before, &::after
          content ''
          position absolute
          height 5px
          width 20px
          bottom -5px
          background-color #fff
        &::before
          right 2.5px
          transform-origin right bottom
          transform rotate(45deg)
        &::after
          left 2.5px
          transform-origin left bottom
          transform rotate(-45deg)
  .concept
    position relative
    width 100%
    &::before
      content ''
      display block
      padding-top 30%
      +sp()
        padding-top 50%
    .bg
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      background-color $gray-1
      z-index 100
      .logotype-container
        position absolute
        width 100%
        height 100%
        left 0
        top 0
        overflow hidden
        .logotype
          position absolute
          width 150%
          transform translate(-50%, -50%)
          z-index -1
          +sp()
            width 180%
          &:first-of-type
            top 10%
            left 1%
            +sp()
              top 10%
          &:last-of-type
            top 95%
            left 120%
            +sp()
              top 80%
              left 125%
      .paragraph-container
        position absolute
        bottom -25em
        left 50%
        transform translateX(-50%)
        display flex
        align-items flex-end
        +sp()
          width 100%
          left 50%
          top 75%
          bottom auto
          align-items center
          justify-content flex-start
          flex-wrap wrap
        .paragraph
          width 40em
          bottom -50%
          left 20%
          padding 3em
          background-color $gray-7
          +sp()
            width 95%
            padding 2em
            padding-bottom 5em
          h2
            margin -.3em 0 -.2em -0.05em
            margin-top -.3em
            margin-bottom -.2em
            color $gray-4
            bold()
            letter-spacing .05em
            font-size 4rem
            text-transform uppercase
            +sp()
              font-size 3rem
              margin-top 0
          p
            color #fff
            margin-top 20px
            +sp()
              margin-top 10px
        .to-about
          background-color $gray-9
          padding 3rem
          width 35em
          height 20em
          margin-left -5rem
          margin-bottom -5rem
          color #fff
          display flex
          justify-content flex-end
          align-items flex-end
          transition all 200ms ease-out
          +sp()
            width 16em
            height 10em
            margin-top -3em
            margin-bottom auto
            margin-left auto
            padding 2em
            background-color $blue-10
            flex-direction column
          &:hover
            background-color $blue-10
            .arrow-container
              .arrow
                width 50px
          .label
            bold()
            font-size 1.2rem
            letter-spacing .05em
            +sp()
              margin-bottom 1em
          .arrow-container
            position relative
            height 1.2rem
            margin-left 1rem
            .arrow
              position relative
              width 30px
              height 3px
              background-color #fff
              transition all 200ms ease-out
              &::before, &::after
                content ''
                position absolute
                width 3px
                height 12px
                right -2px
                background-color #fff
              &::before
                bottom 1.5px
                transform-origin right bottom
                transform rotate(-45deg)
              &::after
                top 1.5px
                transform-origin right top
                transform rotate(45deg)
  .movie
    position relative
    width 100%
    margin-top 800px
    &::before
      content ''
      display block
      padding-top 60%
      background-color $gray-8
      +minWidth(1500)
        padding-top 850px
      +touch()
        padding-top 100%
    .bg
      width 100%
      height 100%
      top 0
      left 0
      background-color $gray-8
      &::before, &::after
        content ''
        position absolute
        width 50%
        height 100px
        background-color inherit
        +touch()
          height 50px
      &::before
        top 0
        left 0
        transform translateY(-100%)
      &::after
        bottom 0
        right 0
        transform translateY(100%)
    .logotype
      position absolute
      top 50%
      left 50%
      width 105%
      transform translate(-50%, -50%)
      opacity .1
    .outer
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 65%
      max-width 1280px
      margin 0
      +touch()
        width 85%
      .inner
        position relative
        width 100%
        height 100%
        padding 0
        margin 0
        cursor pointer
        overflow hidden
        outline none
        &:hover
          .image-pc
            transform scale(1.05)
        .image
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          background-image url('../assets/img/Thumbnail.jpg')
          background-size cover
          z-index 1
          transform scale(1)
          transition transform 300ms ease-in-out, opacity 200ms linear
        .message
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          z-index 2
          display flex
          align-items center
          justify-content center
          transition opacity 200ms linear
          p
            opacity 1
            color #fff
            font-size 3rem
            bold()
            z-index 3
            +touch()
              font-size 2rem
        .hidden
          opacity 0
          pointer-events none
  .detail
    width 800px
    margin 200px auto 200px
    bold()
    +sp()
      width 85%
      margin 150px auto 100px
    .title
      letter-spacing .05em
      font-size 3rem
      margin-bottom .5em
      margin-left -.05em
    .sub-title
      color $blue-10
      text-transform uppercase
      letter-spacing .05em
    .narrow
      letter-spacing -.05em
    .columns
      display flex
      +sp()
        flex-direction column
      .column
        width 50%
        display flex
        +sp()
          width 100%
          margin-bottom 2rem
        .sidebar
          width 2px
          margin-right 30px
          height 100%
          background-color $gray-6
          +sp()
            display none
        ul
          width 90%
          +sp()
            width 100%
          li
            margin-bottom 2rem
            &:last-of-type
              margin-bottom 0
          .main
            font-size 2rem
            letter-spacing .05em
            margin-bottom -.2rem
            +sp()
              font-size 1.7rem
            .jp
              display inline-block
              margin-left .5em
              transform translateY(-.1em)
              font-size 1.5rem
              font-weight 700
              color $gray-6
              +sp()
                font-size 1.2rem
          .sub
            font-size 1rem
            color $gray-6
          .line
            height 4rem
          a
            position relative
            &::after
              content ''
              position absolute
              width 100%
              height 2px
              bottom 0
              left 0
              transform-origin center center
              transform scaleX(1)
              transition all 200ms ease-out
            &:hover
              &::after
                transform scaleX(.8)
                +sp()
                  transform scaleX(1)
          a.main
            &::after
              background-color #000
          a.sub
            &::after
              background-color $gray-6
</style>
