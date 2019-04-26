<template lang="pug">
  #blog
    header
      h1 ブログ
      p 文化委員会の役員たちが、文化祭運営の現場をお伝えします。
    ul.articles
      li(v-for="article in articles").article
        nuxt-link(:to="getPath(article)")
          .thumbnailOuter
            .thumbnailInner(:style="getThumbnailStyle(article)")
          h2 {{ article.title }}
          .meta
            p.author {{ article.author }}
            time(:datetime="getDatetime(article.base)") {{ getDate(article.base) }}
</template>

<script>
import anime from 'animejs'
import { fileMap } from '~/assets/articles/summary.json'
const articlesArray = []
for (const key of Object.keys(fileMap)) {
  articlesArray.push(fileMap[key])
}
articlesArray.sort((a, b) => {
  // 時系列にソート
  const splitA = a.base.split('-')
  const splitB = b.base.split('-')
  const combinedA = `${splitA[0]}${splitA[1]}${splitA[2]}`
  const combinedB = `${splitB[0]}${splitB[1]}${splitB[2]}`
  if (combinedA > combinedB) return -1
  if (combinedA < combinedB) return 1
  return 0
})
articlesArray.forEach(el => {
  // サムネイルが指定されていない記事にデフォルトサムネイルを指定
  el.thumbnail = el.thumbnail ? el.thumbnail : 'default/thumbnail.jpg'
})
export default {
  head: {
    title: 'ブログ | 第73回灘校文化祭'
  },
  data() {
    return {
      articles: articlesArray
    }
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  },
  methods: {
    getPath(article) {
      const splitBase = article.base.replace('.json', '').split('-')
      return `/blog/${splitBase.slice(0, 3).join('-')}/${splitBase
        .slice(3)
        .join('-')}/`
    },
    getThumbnailStyle(article) {
      return `background: url(../_nuxt/assets/img/blog/${
        article.thumbnail
      }) center center / cover;`
    },
    getDate(base) {
      const splitArray = base.split('-')
      return `${splitArray[0]} ${splitArray[1]} ${splitArray[2]}`
    },
    getDatetime(base) {
      const splitArray = base.split('-')
      return `${splitArray[0]}-${splitArray[1]}-${splitArray[2]}`
    }
  },
  transition: {
    appear: true,
    enter(el, done) {
      anime({
        targets: document.getElementById('blog'),
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
        targets: document.getElementById('blog'),
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
#blog
  articleWidth()
  +touch()
    margin-bottom 0
  header
    margin-bottom 8rem
    +sp()
      margin-bottom 5rem
    h1
      h1Size()
      margin-bottom 1rem
      +tablet()
        margin-bottom 1rem
      +sp()
        margin-bottom 1rem
    p
      color $gray-6
  .articles
    .article
      position relative
      margin-bottom 8rem
      &::after
        content ''
        position absolute
        bottom -3rem
        left 0
        width 100%
        height 2px
        background-color $gray-2
      &:nth-last-of-type(1)
        &::after
          display none
      &:hover
        .thumbnailOuter
          .thumbnailInner
            transform scale(1.05)
      .thumbnailOuter
        width 100%
        height 30rem
        margin-bottom 2rem
        background-color $gray-1
        overflow hidden
        +tablet()
          height 20rem
        +sp()
          height 13rem
        .thumbnailInner
          width 100%
          height 100%
          transition all 300ms ease-in-out
          transform scale(1)
      h2
        bold()
        font-size 2rem
        margin-bottom .5rem
      .meta
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        bold()
        color $gray-5
</style>
