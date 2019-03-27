<template lang="pug">
  #default
    the-bg
    the-sidebar
    main#scroll-area
      nuxt
      the-footer
    the-menu
    the-mouse-follower(v-if="$device.isDesktop")
</template>

<script>
export default {
  components: {
    TheBg: () => import('~/components/TheBg.vue'),
    TheSidebar: () => import('~/components/TheSidebar.vue'),
    TheMouseFollower: () => import('~/components/TheMouseFollower.vue'),
    TheMenu: () => import('~/components/TheMenu.vue'),
    TheFooter: () => import('~/components/TheFooter')
  },
  mounted() {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (
      userAgent.indexOf('msie') !== -1 ||
      userAgent.indexOf('trident') !== -1
    ) {
      this.$router.replace({ path: 'sorry' })
    }
  }
}
</script>

<style lang="stylus" scoped>
#scroll-area
  position absolute
  height 100%
  width calc(100% - 70px)
  top 0
  left 70px
  overflow-x hidden
  overflow-y scroll
  -webkit-overflow-scrolling touch
  z-index 10
  +sp()
    width 100%
    left 0
</style>
