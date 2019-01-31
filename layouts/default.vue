<template lang="pug">
  #default
    the-bg
    the-sidebar
    nuxt
    the-mouse-follower
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

<style>
</style>
