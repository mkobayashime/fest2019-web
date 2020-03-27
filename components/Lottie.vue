<template>
  <div ref="lavContainer" :style="style" />
</template>

<script>
import lottie from 'lottie-web'
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    height: { type: Number, default: null },
    width: { type: Number, default: null },
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
      },
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData.default,
      rendererSettings: this.options.rendererSettings,
    })
    this.$emit('animCreated', this.anim)
  },
}
</script>
