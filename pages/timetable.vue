<template lang="pug">
  #timetable
    .head
      h1 タイムテーブル
    .state
      button(@click="enterStages1()" :class="{active: this.state===1}")
        span ステージ
        span 1日目
      button(@click="enterStages2()" :class="{active: this.state===2}")
        span ステージ
        span 2日目
      button(@click="enterCircles()" :class="{active: this.state===3}")
        span サークル
    .tables
      .events
        transition(name="fade" mode="out-in")
          timetable-stages-day1(v-if="this.state===1" key="1")
          timetable-stages-day2(v-else-if="this.state===2" key="2")
          timetable-circles(v-else="this.state===3" key="3")
</template>

<script>
/* eslint no-console: 0 */
import anime from 'animejs'
export default {
  components: {
    TimetableStagesDay1: () => import('~/components/TimetableStagesDay1.vue'),
    TimetableStagesDay2: () => import('~/components/TimetableStagesDay2.vue'),
    TimetableCircles: () => import('~/components/TimetableCircles.vue')
  },
  data() {
    return {
      state: 1
    }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  methods: {
    enterStages1() {
      this.state = 1
    },
    enterStages2() {
      this.state = 2
    },
    enterCircles() {
      this.state = 3
    },
    enterAnim() {
      console.log('bbb')
      anime({
        targets: document.getElementById(`timetable-stages-day1`),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear'
      })
    },
    leaveAnim() {
      console.log('aaa')
      anime({
        targets: document.getElementById(`timetable-stages-day1`),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear'
      })
    }
  },
  head: {
    title: 'タイムテーブル | 第73回灘校文化祭',
    meta: [
      {
        property: 'og:title',
        content: 'タイムテーブル | 第73回灘校文化祭'
      },
      {
        property: 'og:description',
        content: 'ステージやサークル企画のタイムテーブルをご覧いただけます'
      }
    ]
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('timetable'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        complete: done
      })
      anime({
        targets: document.getElementById('the-footer'),
        opacity: [0, 1],
        duration: 300,
        easing: 'linear',
        complete: done
      })
    },
    leave(el, done) {
      anime({
        targets: document.getElementById('timetable'),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        complete: done
      })
      anime({
        targets: document.getElementById('the-footer'),
        opacity: [1, 0],
        duration: 300,
        easing: 'linear',
        complete: done
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#timetable
  .head
    mainContainer()
    h1
      h1Size()
      margin-bottom 2rem
      +tablet()
        margin-bottom 2rem
      +sp()
        margin-bottom 2rem
  .state
    width 100%
    height 4rem
    display flex
    flex-direction row
    align-items center
    justify-content space-between
    +desktop()
      mainContainer()
    button
      height 100%
      width 10%
      padding-top .2rem
      flex-grow 1
      outline none
      background-color $gray-2
      color $gray-7
      bold()
      font-size 1.5rem
      transition all 300ms ease-out
      +deskSmall()
        font-size 1.2rem
      +tablet()
        font-size 1rem
      +sp()
        font-size .9rem
        &:hover
          background-color $gray-2
          color $gray-7
      &:hover
        background-color $blue-10
        color #fff
      span
        line-height 1em
        display inline-block
    .active
      background-color #000
      color #fff
      &:hover
        background-color #000
        color #fff
      +touch()
        background-color $blue-10
        color #fff
        &:hover
          background-color $blue-10
          color #fff
  .tables
    position relative
    margin 5rem auto
    // width 100%
    max-width 1350px
    // overflow-x scroll
    display flex
    align-items flex-end
    .events
      margin 0 auto
      overflow hidden
      overflow-x scroll
  .fade-enter-active, .fade-leave-active
    transition opacity 300ms linear
  .fade-enter, .fade-leave-to
    opacity 0
</style>
