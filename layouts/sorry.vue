<template lang="pug">
#sorry-layout
  img.logo(src="~/assets/logo/black/vertical-a.svg" alt="SAIL AWAY")
  nuxt
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
#sorry-layout
  width 100%
  height 100%
  top 0
  left 0
  overflow-x hidden
  overflow-y scroll
  -webkit-overflow-scrolling touch
  .logo
    height 110%
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    opacity .1
    pointer-events none
    +sp()
      height auto
      width 112%
</style>
