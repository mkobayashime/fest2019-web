<template lang="pug">
	#the-bg
		#logoLoopAnim
			lottie(:options="lottieOptions" @animCreated="handleAnimation" :container="LogoLoopAnimContainer")
		.bg-dummy.bg-dummy1(:class="{opened:opened}")
		.bg-dummy.bg-dummy2(:class="{opened:opened}")
		.bg-dummy.bg-dummy3(:class="{opened:opened}")
		.bg-dummy.bg-dummy4(:class="{opened:opened}")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
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
  computed: {
    ...mapGetters({
      opened: 'menu/opened'
    })
  },
  mounted() {
    this.LogoLoopAnimContainer = document.getElementById('logoLoopAnim')
  },
  methods: {
    ...mapMutations({
      toggle: 'menu/toggle'
    }),
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
	#logoLoopAnim
		opacity 0.1
		flex-shrink 0
		height 90%
		animation float 1000ms ease-in-out 0ms infinite alternate
		+sp()
			height auto
			width 145%
		+tablet()
			height auto
			width 100%
	.bg-dummy
		position absolute
		background-color #000
		top 0
		height 0
		transition all 300ms ease-out
		z-index 999
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

@keyframes float {
	0% {
		transform translateY(0)
	}
	100% {
		transform translateY(1%)
	}
}
</style>
