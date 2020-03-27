<template lang="pug">
  #timetable-stages-day2
    timetable-time
    timetable-column(:stage="centerStage")
    timetable-column(:stage="audioVisual")
    timetable-column(:stage="lectureRoom")
    timetable-column(:stage="gym")
    timetable-column(:stage="auditorium")
    timetable-column(:stage="musicRoom")
    timetable-time
</template>

<script>
import anime from 'animejs'
import * as stages from '~/assets/data/stages-day2-require.js'
export default {
  components: {
    TimetableColumn: () => import('~/components/TimetableColumn.vue'),
    TimetableTime: () => import('~/components/TimetableTime.vue'),
  },
  data() {
    return {}
  },
  computed: {
    centerStage() {
      return stages.centerStage
    },
    audioVisual() {
      return stages.audioVisual
    },
    lectureRoom() {
      return stages.lectureRoom
    },
    gym() {
      return stages.gym
    },
    auditorium() {
      return stages.auditorium
    },
    musicRoom() {
      return stages.musicRoom
    },
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('timetable-stages-day1'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        compelete: done,
      })
    },
    leave(el, done) {
      anime({
        targets: document.getElementById('timetable-stages-day1'),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        compelete: done,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
#timetable-stages-day2
  margin 0 auto
  position relative
  display flex
  flex-direction row
  align-items flex-end
</style>
