<template lang="pug">
	#the-mouse-follower
		#mouse-follower-secondary
		#mouse-follower-primary
</template>

<script>
export default {
  mounted() {
    const primary = document.getElementById('mouse-follower-primary')
    const secondary = document.getElementById('mouse-follower-secondary')

    document.addEventListener('mousemove', e => {
      primary.setAttribute(
        'style',
        `top: ${e.pageY - 8}px; left: ${e.pageX - 8}px;`
      )
      secondary.setAttribute(
        'style',
        `top: ${e.pageY - 25}px; left: ${e.pageX - 25}px;`
      )
    })
  }
}
</script>


<style lang="stylus">
#mouse-follower-primary
	width 16px
	height 16px
	border-radius 50%
	background-color #2962ff
	position absolute
	transition all 10ms ease-out
	pointer-events none
#mouse-follower-secondary
	width 50px
	height 50px
	border-radius 50%
	background-color hsl(0, 0%, 80%)
	opacity .3
	position absolute
	transition all 200ms ease-out
	pointer-events none
</style>
