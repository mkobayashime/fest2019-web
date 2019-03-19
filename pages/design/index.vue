<template lang="pug">
  #about
    p.sorry 現在準備中です...( *・ω・)*_ _))
</template>

<script>
export default {
  head: {
    title: 'Design'
  }
}
</script>

<style lang="stylus" scoped>
#about
  width 100%
  height 100%
  top 0
  left 0
  display flex
  justify-content center
  align-items center
  .sorry
    bold()
    font-size 2rem
    letter-spacing .05em
</style>
