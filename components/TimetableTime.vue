<template lang="pug">
.timetable-time
  .table-container
    .hours-container
      .one-hour
      .one-hour
      .one-hour
      .one-hour
      .one-hour
      .one-hour
      .one-hour
</template>

<style lang="stylus" scoped>
.timetable-time
  width 6rem
  flex-shrink 0
  .table-container
    position relative
    margin 3rem 0 0
    width 100%
    height 1400px
    bottom 0
    .hours-container
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      display grid
      counter-reset hours 8
      .one-hour
        display flex
        align-items flex-start
        justify-content center
        border-top 2px solid $gray-3
        &:nth-last-of-type(1)
          border-bottom 2px solid $gray-3
        &::before
          content counter(hours)
          counter-increment hours
        &::after
          content ':00'
        &::before, &::after
          bold()
          color $gray-6
</style>
