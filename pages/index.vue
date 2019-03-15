<template lang="pug">
  .index
    .hero
      h1
        img(src="~/assets/logo/black/tagline-jp.svg" alt="第73回灘校文化祭")
      h2
        img(src="~/assets/logo/black/logotype.svg" alt="SAIL AWAY")
      p.date 2018.05.02&ndash;03
      .button-container
        nuxt-link.button(to="/about" aria-label="開催概要")
          span 開催概要
    .concept
      img.logo(src="~/assets/logo/black/vertical-b.svg" alt="文化祭ロゴ")
      .paragraph
        p 文化祭を航海になぞらえたこのテーマは、
        p 世界という大海へ懸命に漕ぎ出す灘校生と、
        p その出発点となるコミュニティとしての灘校を表しています
        p 停泊していた船は、動き始めるときにいかりを上げます
        p 水面から上がる瞬間のいかりを切り取ったロゴは、
        p 文化祭をきっかけとして始まる、
        p 壮大な航海を暗示しています
</template>

<script>
export default {
  components: {},
  head: {
    title: 'SAIL AWAY'
  }
}
</script>

<style lang="stylus" scoped>
.index
  width 1000px
  margin 0 auto
  .hero
    height 80vh
    padding-top 250px
    h1
      width 50%
      margin 0 auto
    h2
      width 85%
      margin 30px auto 0
    .date
      margin 50px auto 0
      text-align center
      font-size 2rem
      bold()
    .button-container
      margin 50px auto
      display flex
      justify-content center
      .button
        btn-primary()
  .concept
    height 90vh
    display flex
    flex-direction row
    align-items center
    justify-content center
    .logo
      width 30%
      margin 0 100px
    p
      bold()
      margin-top 20px
</style>
