<template lang="pug">
	#the-menu-btn
		button(@click="toggle" :class="{opened:opened}")
		img.menuIcon(src="~/assets/icon/menu.svg")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      opened: 'menu/opened'
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'menu/toggle'
    })
  }
}
</script>

<style lang="stylus" scoped>
#the-menu-btn
	button
		position absolute
		width 70px
		height 100px
		background-color #000
		cursor pointer
		transition all 200ms ease-out
		&:hover
			height 150px
		&.opened
			height 100vh
.menuIcon
	position absolute
	width 25px
	height 25px
	margin 37.5px 22.5px
	pointer-events none
</style>
