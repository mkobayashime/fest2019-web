<template lang="pug">
	#the-menu
		.bg-dummy.bg-dummy1(:class="{opened:opened}")
		.bg-dummy.bg-dummy2(:class="{opened:opened}")
		.bg-dummy.bg-dummy3(:class="{opened:opened}")
		.bg-dummy.bg-dummy4(:class="{opened:opened}")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      opened: 'menu/opened'
    })
  }
}
</script>

<style lang="stylus" scoped>
#the-menu
	.bg-dummy
		position absolute
		background-color #000
		top 0
		height 0
		transition all 300ms ease-out
		z-index 900
		&.opened
			height 100vh
	.bg-dummy1
		width 25%
		left 0%
		transition-delay 200ms
	.bg-dummy2
		width 25%
		left 25%
		transition-delay 0
	.bg-dummy3
		width 25%
		left 50%
		transition-delay 300ms
	.bg-dummy4
		width 25%
		left 75%
		transition-delay 100ms
</style>
