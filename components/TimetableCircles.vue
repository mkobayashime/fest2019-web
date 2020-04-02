<template lang="pug">
  #timetable-circles
    timetable-time
    timetable-column(:stage="shourinji")
    timetable-column(:stage="magic")
    timetable-column(:stage="math1")
    timetable-column(:stage="math2")
    timetable-column(:stage="lego")
    timetable-column(:stage="othello")
    timetable-column(:stage="chemistry")
    timetable-column(:stage="bio1")
    timetable-column(:stage="bio2")
    timetable-column(:stage="earth")
    timetable-column(:stage="npca1")
    timetable-column(:stage="npca2")
    timetable-column(:stage="escape6")
    timetable-time
</template>

<script>
import anime from 'animejs'
import * as circles from '~/assets/data/circles-require.js'
export default {
  components: {
    TimetableColumn: () => import('~/components/TimetableColumn.vue'),
    TimetableTime: () => import('~/components/TimetableTime.vue')
  },
  data() {
    return {}
  },
  computed: {
    shourinji() {
      return circles.shourinji
    },
    magic() {
      return circles.magic
    },
    math1() {
      return circles.math1
    },
    math2() {
      return circles.math2
    },
    lego() {
      return circles.lego
    },
    othello() {
      return circles.othello
    },
    chemistry() {
      return circles.chemistry
    },
    bio1() {
      return circles.bio1
    },
    bio2() {
      return circles.bio2
    },
    earth() {
      return circles.earth
    },
    npca1() {
      return circles.npca1
    },
    npca2() {
      return circles.npca2
    },
    escape6() {
      return circles.escape6
    }
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('timetable-stages-day1'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        compelete: done
      })
    },
    leave(el, done) {
      anime({
        targets: document.getElementById('timetable-stages-day1'),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        compelete: done
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#timetable-circles
  margin 0 auto
  position relative
  display flex
  flex-direction row
  align-items flex-end
</style>
