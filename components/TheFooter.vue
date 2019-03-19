<template lang="pug">
  #the-footer
    img.logo(src="~/assets/logo/white/horizontal-tagline.svg")
    .info
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
</template>

<script>
import sns from '~/assets/data/sns.json'
export default {
  data() {
    return {
      sns: sns
    }
  }
}
</script>

<style lang="stylus" scoped>
#the-footer
  height 400px
  background-color #000
  padding 0 10%
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  .logo
    height 40%
    opacity .6
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
</style>
