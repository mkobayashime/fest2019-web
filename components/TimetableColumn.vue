<template lang="pug">
  .timetable-column(:class="stage.class")
    .meta
      h2 {{ stage.name }}
      p {{ stage.place }}
    .table-container
      .minutes-container
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute-hour
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute-hour
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute-hour
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute-hour
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute-hour
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute-hour
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute
        .fifteen-minute-hour
      .events
        .event(v-for="event in stage.events" :starts="event.starts" :ends="event.ends")
          p(v-for="text in event.name") {{ text }}
</template>

<script>
export default {
  name: 'TimetableColumn',
  props: {
    stage: {
      type: Object,
      default() {
        return {
          name: 'Name',
          place: 'Place',
          events: [],
        }
      },
    },
  },
  mounted() {
    const els = document.querySelectorAll(`.${this.stage.class} .event`)
    this.stage.events.forEach((event, index) => {
      const el = els[index]
      const startTime = parseInt(event.starts)
      const startM = startTime % 100
      const startH = (startTime - startM) / 100
      el.style.gridRowStart = this.getTempleteRow(startM, startH)
      const endTime = parseInt(event.ends)
      const endM = endTime % 100
      const endH = (endTime - endM) / 100
      el.style.gridRowEnd = this.getTempleteRow(endM, endH)
    })
  },
  methods: {
    getTempleteRow(m, h) {
      return (h - 9) * 12 + m / 5 + 1
    },
  },
}
</script>

<style lang="stylus" scoped>
.timetable-column
  min-width 12rem
  margin 0 auto
  .meta
    text-align center
    h2
      font-size 1.2rem
    p
      color $gray-6
  .table-container
    position relative
    margin 3rem 0 0
    width 100%
    height 1400px
    .minutes-container
      position absolute
      width 100%
      height 1400px
      bottom 0
      left 0
      display grid
      .fifteen-minute
        border-bottom 1px solid $gray-2
      .fifteen-minute:nth-of-type(1)
        border-top 2px solid $gray-3
      .fifteen-minute-hour
        border-bottom 2px solid $gray-3
    .events
      position absolute
      width 100%
      padding 0 1rem
      height 100%
      top 0
      left 0
      display grid
      grid-template-columns auto
      grid-template-rows repeat(84, 1fr)
      .event
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding 0 1rem
        background-color #fff
        box-shadow 0px 0px 20px 0px rgba(0,0,0,0.15)
        transition box-shadow 300ms ease-out
        &:hover
          box-shadow 0px 10px 25px 0px rgba(0,0,0,0.2)
        p
          display inline-block
          font-size .9rem
          bold()
          text-align center
</style>
