<template lang="pug">
	#the-mouse-follower
		#mouse-follower-secondary
		#mouse-follower-primary
</template>

<script>
export default {
  mounted() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android.*Mobile)/i)) {
      const el = document.getElementById('the-mouse-follower')
      el.style.display = 'none'
    } else {
      const primary = document.getElementById('mouse-follower-primary')
      const secondary = document.getElementById('mouse-follower-secondary')

      let xmouse, ymouse
      document.addEventListener('mousemove', e => {
        xmouse = e.clientX || e.pageX
        ymouse = e.clientY || e.pageY

        primary.style.left = `${xmouse}px`
        primary.style.top = `${ymouse}px`
      })

      let x, y, dx, dy
      ;(function moveSecondary() {
        if (!x || !y) {
          x = xmouse
          y = ymouse
        } else {
          dx = (xmouse - x) * 0.1
          dy = (ymouse - y) * 0.1

          if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse
            y = ymouse
          } else {
            x += dx
            y += dy
          }
        }

        secondary.style.left = `${x}px`
        secondary.style.top = `${y}px`

        requestAnimationFrame(moveSecondary)
      })()
    }
  }
}
</script>

<style lang="stylus" scoped>
#the-mouse-follower
  position absolute
  width 100%
  height 100%
  left 0
  top 0
  pointer-events none
  #mouse-follower-primary
    position absolute
    width 16px
    height 16px
    left -100px
    top -100px
    border-radius 50%
    background-color $blue-10
    transform translate(-50%, -50%)
    pointer-events none
    z-index 999
  #mouse-follower-secondary
    position absolute
    width 50px
    height 50px
    left -100px
    top -100px
    border-radius 50%
    background-color $gray-2
    opacity .3
    transform translate(-50%, -50%)
    pointer-events none
    z-index 999
</style>
