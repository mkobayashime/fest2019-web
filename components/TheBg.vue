<template lang="pug">
	#the-bg
		#logoLoopAnim
			lottie(:options="lottieOptions" @animCreated="handleAnimation")
</template>

<script>
import * as logoLoopAnimBlack from '~/assets/anim/LogoLoopAnim-Black.json'
export default {
  components: {
    Lottie: () => import('~/components/Lottie.vue')
  },
  data() {
    return {
      lottieOptions: {
        animationData: logoLoopAnimBlack,
        loop: true,
        autoplay: true,
        anmationSpeed: 1
      }
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim
    }
  }
}
</script>

<style lang="stylus" scoped>
#the-bg
	position absolute
	width calc(100% - 70px)
	left 70px
	height 100%
	z-index -10
	display flex
	align-items center
	justify-content center
	+sp()
		width 100%
		left 0
	#logoLoopAnim
		opacity 0.07
		flex-shrink 0
		height 90%
		animation float 1000ms ease-in-out 0ms infinite alternate
		+sp()
			height auto
			width 145%
		+tablet()
			height auto
			width 100%

@keyframes float {
	0% {
		transform translateY(0)
	}
	100% {
		transform translateY(1%)
	}
}
</style>
