<template lang="pug">
	#the-bg
		#logoLoopAnim
			lottie(:options="lottieOptions" @animCreated="handleAnimation" :container="LogoLoopAnimContainer")
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
      },
      LogoLoopAnimContainer: null
    }
  },
  mounted() {
    this.LogoLoopAnimContainer = document.getElementById('logoLoopAnim')
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
	width 100%
	height 100%
	display flex
	align-items center
	justify-content center
	animation float 1000ms ease-in-out 0ms infinite alternate
	#logoLoopAnim
		opacity 0.1
		flex-shrink 0
		height 90%
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
