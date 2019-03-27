<template lang="pug">
  #the-sidebar
    the-menu-btn
    .sidebar-items-desktop(v-if="$device.isDesktop")
      .items-container
        .items-group
          .links
            a(:href="sns.twitter" target="_blank" rel="noopener" aria-label="Twitter")
              img(src="~/assets/icon/fa-twitter.svg")
            a(:href="sns.ig" target="_blank" rel="noopener" aria-label="Instagram")
              img(src="~/assets/icon/fa-instagram.svg")
            a(:href="sns.fb" target="_blank" rel="noopener" aria-label="Facebook")
              img(src="~/assets/icon/fa-facebook.svg")
          p Follow Us
      .items-container
        .items-group
          .links
            a(:href="sns.twitterShare" target="_blank" rel="noopener" aria-label="Share on Twitter")
              img(src="~/assets/icon/fa-twitter.svg")
            a(:href="sns.fbShare" target="_blank" rel="noopener" aria-label="Share on Facebook")
              img(src="~/assets/icon/fa-facebook.svg")
          p Share On
    .sidebar-items-tablet(v-if="$device.isTablet")
      .links
        a(:href="sns.twitter" target="_blank" rel="noopener" aria-label="Twitter")
          .sidebar-item.fab.fa-twitter
        a(:href="sns.ig" target="_blank" rel="noopener" aria-label="Instagram")
          .sidebar-item.fab.fa-instagram
        a(:href="sns.fb" target="_blank" rel="noopener" aria-label="Facebook")
          .sidebar-item.fab.fa-facebook
</template>

<script>
import sns from '~/assets/data/sns.json'
export default {
  components: {
    TheMenuBtn: () => import('~/components/TheMenuBtn.vue')
  },
  data() {
    return {
      sns: sns
    }
  }
}
</script>

<style lang="stylus" scoped>
#the-sidebar
  width 70px
  height 100vh
  transition all 200ms ease-out
  .sidebar-items-desktop
    width 100%
    height 100vh
    background-color hsl(0, 0%, 90%)
    display flex
    flex-direction column
    align-items center
    justify-content flex-end
    padding-bottom 20px
    color hsl(0, 0%, 0%)
    overflow hidden
    .items-container
      width 100%
      overflow hidden
      &:hover .items-group
        transform translateX(34px)
        .links
          opacity 1
        p
          opacity 0
      .items-group
        display flex
        flex-direction row
        align-items center
        justify-content center
        margin 0px 43px 10px 0
        transition all 200ms ease-out
        .links
          opacity 0
          transition all 200ms linear
        a
          display flex
          align-items center
          justify-content center
          width 40px
          height 40px
          font-size 1.3rem
          transition all 200ms ease
          &:hover
            background-color hsl(0, 0%, 80%)
            font-size 1.5rem
          img
            width 50%
            height 50%
        p
          opacity 1
          bold()
          writing-mode vertical-rl
          text-orientation mixed
          transition all 200ms linear
  .sidebar-items-tablet
    width 100%
    height 100vh
    background-color hsl(0, 0%, 90%)
    display flex
    flex-direction column
    justify-content flex-end
    padding-bottom 30px
    color hsl(0, 0%, 0%)
    .links
      display flex
      flex-direction column
      align-items center
      justify-content center
      a
        display flex
        align-items center
        justify-content center
        width 40px
        height 40px
        font-size 1.5rem
</style>
