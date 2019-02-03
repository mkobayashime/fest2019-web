<template lang="pug">
	#the-menu-btn
		button(@click="toggle" type="button" :class="{opened:opened}")
		.hamburger.hamburger--elastic(:class="{active:opened}")
			.hamburger-box
				.hamburger-inner
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
		height 80px
		background-color #000
		cursor pointer
		outline none
		transition all 200ms ease-out
		&:hover
			height 120px
		&.opened
			height 100vh

.hamburger
	position absolute
	display block
	cursor pointer
	background-color transparent
	border 0
	margin 0
	pointer-events none

.hamburger-box
	width 30px
	height 24px
	margin 28px 20px
	display block
	position relative

.hamburger-inner
	display block
	top 50%
	margin-top -2px
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after
	width 100%
	height 3px
	background-color #fff
	border-radius 3px
	position absolute
.hamburger-inner::before, .hamburger-inner::after
	content ""
	display block
.hamburger-inner::before
	top -10px
.hamburger-inner::after
	bottom -10px

.hamburger--elastic
	.hamburger-inner
		top 2px
		transition-duration 275ms
		transition-timing-function cubic-bezier(0.68, -0.55, 0.265, 1.55)
		&::before
			top 10px
			transition opacity 300ms 100ms ease
		&::after
			top 20px
			transition transform 275ms cubic-bezier(0.68, -0.55, 0.265, 1.55), width 200ms ease-out

.hamburger--elastic.active
	& .hamburger-inner
		transform translate3d(0, 10px, 0) rotate(135deg)
		transition-delay 75ms
		&::before
			transition-delay 0ms
			opacity 0
		&::after
			width 100%
			transform translate3d(0, -20px, 0) rotate(-270deg)
			transition-delay 75ms
</style>
