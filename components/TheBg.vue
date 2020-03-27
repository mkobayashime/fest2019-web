<template lang="pug">
  #the-bg
    .logo-svg
      img(src="~/assets/logo/black/logo.svg" alt="背景ロゴ")
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="stylus" scoped>
#the-bg
  position absolute
  width calc(100% - 70px)
  left 70px
  height 100%
  z-index -10
  display flex
  align-items center
  justify-content center
  overflow hidden
  +sp()
    width 100%
    left 0
  .logo-svg
    opacity .07
    height 85%
    width 100%
    display flex
    align-items center
    justify-content center
    animation float 1000ms ease-in-out 0ms infinite alternate
    img
      height 100%
      +touch()
        width 100%
        transform scale(1.15)
  @keyframes float {
    0% {
      transform translateY(0)
    }
    100% {
      transform translateY(1%)
    }
  }
</style>
