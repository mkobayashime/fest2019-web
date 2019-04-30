<template lang="pug">
  #foods
    h1 物品販売
    p.description 物品販売のメニューをご覧いただけます
    section
    section
      h2 お土産
      .item(v-for="item in souvenir")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
      h2 お弁当
      .item(v-for="item in lunchBox")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
    section
      h2 パン
      .item(v-for="item in bread")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
    section
      h2 コーヒー・紅茶
      .item(v-for="item in coffee")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
    section
      h2 和菓子
      .item(v-for="item in japaneseSweets")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
    section
      h2 からあげ
      .item(v-for="item in friedChicken")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
    section
      h2 飲み物
      .item(v-for="item in beverage")
        h3
          p(v-for="p in item[0]") {{ p }}
        .tab
        p.price {{ item[1] }}
</template>

<script>
import anime from 'animejs'
export default {
  head: {
    title: '物品販売 | 第73回灘校文化祭',
    meta: [
      {
        property: 'og:title',
        content: '物品販売 | 第73回灘校文化祭'
      },
      {
        property: 'og:description',
        content: '物品販売のメニューをご覧いただけます'
      }
    ]
  },
  data() {
    return {
      souvenir: [
        [['凮月堂 灘校三笠', '5個入り'], '1,250'],
        [['凮月堂 灘校三笠', '2個入り'], '500'],
        [['凮月堂 灘校煎餅'], '700'],
        [['OKINA 灘洋菓子'], '1,400'],
        [['TAOCA COFFEE', '灘コーヒー'], '800'],
        [['神戸紅茶 灘紅茶'], '800']
      ],
      lunchBox: [
        [['灘校重箱弁当'], '1,600'],
        [['灘校スペシャル弁当'], '1,000'],
        [['なだ牛弁当'], '1,000'],
        [['灘校合格弁当'], '800'],
        [['灘校必勝弁当'], '800'],
        [['灘校祈願弁当'], '800'],
        [['助六弁当'], '500'],
        [['ミニサンド'], '300'],
        [['おにぎり'], '150']
      ],
      bread: [[['パン各種'], '80~230']],
      coffee: [
        [['コーヒー(ホット)・', '紅茶(ホット)'], '200'],
        [['アイスコーヒー・', 'アイスティー'], '250'],
        [['クッキー', '(飲み物とセット販売)'], '200']
      ],
      japaneseSweets: [
        [['住吉団子'], '100'],
        [['桜餅'], '150'],
        [['柏餅'], '150'],
        [['あん団子'], '150'],
        [['大福'], '150']
      ],
      friedChicken: [[['灘から丸'], '180']],
      beverage: [[['ペットボトル飲料各種'], '100']]
    }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('foods'),
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
        targets: document.getElementById('foods'),
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

<style lang="stylus">
#foods
  articleWidth()
  h1
    h1SizeWithP()
  .description
    color $gray-6
  section
    margin 3rem 0
    h2
      display inline-block
      margin 2rem 0 1rem
      padding .1em 1em 0
      font-size 2rem
      background-color #000
      color #fff
      +sp()
        font-size 1.5rem
    .item
      margin 1.5rem 0
      display flex
      flex-direction row
      align-items center
      justify-content space-between
      h3
        bold()
        font-size 1.5rem
        margin-right .7rem
        flex-shrink 0
        +sp()
          font-size 1.2rem
          max-width 60%
          flex-shrink 0
        p
          display inline-block
          margin-right .3em
      .tab
        width 100%
        height 2px
        background-color $gray-2
      .price
        margin-left 1rem
        font-size 1.5rem
        color $gray-6
        flex-shrink 0
        +sp()
          font-size 1.2rem
</style>
