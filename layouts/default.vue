<template lang="pug">
  #default
    the-bg
    the-sidebar
    #scrollArea
      nuxt
    the-mouse-follower(v-if="$device.isDesktop")
</template>

<script>
export default {
  components: {
    TheBg: () => import('~/components/TheBg.vue'),
    TheSidebar: () => import('~/components/TheSidebar.vue'),
    TheMouseFollower: () => import('~/components/TheMouseFollower.vue')
  }
}
</script>

<style lang="stylus" scoped>
#scrollArea
  position absolute
  height 100%
  width calc(100% - 70px)
  top 0
  left 70px
  overflow-x hidden
  overflow-y scroll
  -webkit-overflow-scrolling touch
</style>
