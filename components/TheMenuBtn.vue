<template lang="pug">
	a#the-menu-btn(@click="toggle" :class="{opened:opened}")
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
	position absolute
	display flex
	align-items flex-start
	justify-content center
	width 70px
	height 100px
	background-color #000
	cursor pointer
	transition all 200ms ease-out
	&:hover
		height 150px
	.menuIcon
		width 25px
		height 25px
		margin 37.5px 0 0 0
	&.opened
		height 100vh
</style>
