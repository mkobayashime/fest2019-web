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
      button(type="button" @click="scroll()").arrow-container
        .arrow
    .concept
      img.logo(src="~/assets/logo/black/vertical-b.svg" alt="文化祭ロゴ")
      .paragraph
        p 文化祭を航海になぞらえたこのテーマは、
        p 世界という大海へ懸命に漕ぎ出す灘校生と、
        p その出発点となるコミュニティとしての灘校を表しています
        p 停泊していた船は、動き始めるときにいかりを上げます
        p 水面から上がる瞬間のいかりを切り取ったロゴは、
        p 文化祭をきっかけとして始まる、
        p 壮大な航海を暗示しています
</template>

<script>
/* eslint new-cap: 0 */
import * as PIXI from 'pixi.js'
import anime from 'animejs'
export default {
  components: {},
  head: {
    title: 'SAIL AWAY'
  }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
    const container = document.getElementById('pixi')
    const width = container.clientWidth
    const height = container.clientHeight

    const renderer = new PIXI.autoDetectRenderer(1280, 720, {
      transparent: true
    })
    const stage = new PIXI.Container()
    const slide = new PIXI.Container()

    const spriteImage = document.querySelector('.bg-pixi')
    const spriteImageSrc = spriteImage.getAttribute('src')
    const texture = new PIXI.Texture.fromImage(spriteImageSrc)
    const image = new PIXI.Sprite(texture)
    image.anchor.set(0.5)
    image.x = renderer.width / 2
    image.y = renderer.height / 2
    slide.addChild(image)

    const displacementSprite = PIXI.Sprite.fromImage(
      '/_nuxt/assets/img/clouds-512.jpg'
    )
    const displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    )

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
    stage.filters = [displacementFilter]
    displacementSprite.scale.x = 2
    displacementSprite.scale.y = 2

    displacementFilter.autoFit = true

    stage.addChild(displacementSprite)

    const calcScale = () => {
      const widthRatio = width / 1280
      const heightRaio = height / 720
      if (widthRatio > heightRaio) {
        return widthRatio * 1.2
      } else {
        return heightRaio * 1.2
}
    }

    container.appendChild(renderer.view)
    stage.addChild(slide)
    const canvas = document.querySelector('#pixi canvas')
    canvas.style.position = 'absolute'
    canvas.style.top = '50%'
    canvas.style.left = '50%'
    canvas.style.transform = `translate(-50%, -50%) scale(${calcScale()})`
    canvas.style.zIndex = '-1'

    const ticker = new PIXI.ticker.Ticker()
    ticker.autoStart = true
    ticker.add(delta => {
      displacementSprite.x += 1 * delta
      displacementSprite.y += 3

      renderer.render(stage)
    })
  },
  methods: {
    scroll() {
      const height = window.innerHeight
      anime({
        targets: document.getElementById('scroll-area'),
        scrollTop: height,
        duration: 500,
        easing: 'easeOutQuint'
      })
    },
    goToDetail() {
      const el = document.querySelector('.detail')
      const height = el.getBoundingClientRect().top
      anime({
        targets: document.getElementById('scroll-area'),
        scrollTop: height,
        duration: 500,
        easing: 'easeOutQuint'
      })
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
    height 90vh
    display flex
    flex-direction row
    align-items center
    justify-content center
    .logo
      width 30%
      margin 0 100px
    p
      bold()
      margin-top 20px
</style>
