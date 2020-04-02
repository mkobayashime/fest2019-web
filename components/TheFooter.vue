<template lang="pug">
  footer#the-footer
    img.logo(src="~/assets/logo/white/horizontal-tagline.svg" alt="SAIL AWAY")
    .info
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
      nuxt-link.el(to="/privacy/") Privacy Policy
      .spacer.el
      p.el Design Team © 2019
</template>

<script>
import sns from '~/assets/data/sns.json'
export default {
  data() {
    return {
      sns
    }
  }
}
</script>

<style lang="stylus" scoped>
#the-footer
  height 450px
  background-color #000
  padding 0 10%
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  +sp()
    height auto
    padding 5rem 10%
    flex-direction column
    align-items  flex-start
  .logo
    height 40%
    opacity .5
    +sp()
      width 100%
      margin-bottom 3rem
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
</style>
