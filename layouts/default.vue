<template lang="pug">
  #default
    the-bg
    the-sidebar
    nuxt
</template>

<script>
export default {
  components: {
    TheBg: () => import('~/components/TheBg.vue'),
    TheSidebar: () => import('~/components/TheSidebar.vue')
  }
}
</script>

<style>
</style>
