<template lang="pug">
	#the-menu
		transition(:css="false" @enter="itemsEnter" @leave="itemsLeave")
			.menu-items(v-if="opened")
				nuxt-link.menu-item(to="/" @click.native="toggle")
					p.en home
					p.jp ホーム
				.menu-item.disabled(to="circles" @click.native="toggle")
					p.en circles
					p.jp 近日公開予定
				.menu-item.disabled(to="map" @click.native="toggle")
					p.en map
					p.jp 近日公開予定
				.menu-item.disabled(to="timetable" @click.native="toggle")
					p.en timetable
					p.jp 近日公開予定
				.menu-item.disabled(to="goods" @click.native="toggle")
					p.en goods
					p.jp 近日公開予定
				.menu-item.disabled(to="foods" @click.native="toggle")
					p.en foods
					p.jp 近日公開予定
				nuxt-link.menu-item(to="about" @click.native="toggle")
					p.en about
					p.jp 文化委員会について
				nuxt-link.menu-item(to="design" @click.native="toggle")
					p.en design
					p.jp デザイン
		.bg-container
			.bg-dummy.bg-dummy1(:class="{opened:opened}")
			.bg-dummy.bg-dummy2(:class="{opened:opened}")
			.bg-dummy.bg-dummy3(:class="{opened:opened}")
			.bg-dummy.bg-dummy4(:class="{opened:opened}")
			.bg-dummy.bg-dummy5(:class="{opened:opened}")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import anime from 'animejs'
export default {
  computed: {
    ...mapGetters({
      opened: 'menu/opened'
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'menu/toggle'
    }),
    itemsEnter: (el, done) => {
      anime({
        targets: '#the-menu .menu-item',
        translateX: ['-3em', 0],
        opacity: [0, 1],
        delay: anime.stagger(50, { start: 400 }),
        duration: 1000,
        easing: 'easeOutQuint',
        complete: done
      })
    },
    itemsLeave: (el, done) => {
      anime({
        targets: '#the-menu .menu-item',
        translateX: [0, '3em'],
        opacity: [1, 0],
        delay: anime.stagger(50),
        duration: 1000,
        easing: 'easeOutQuint',
        complete: done
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#the-menu
	position absolute
	width calc(100% - 70px)
	left 70px
	height 100%
	top 0
	.menu-items
		display flex
		flex-direction column
		align-items flex-start
		justify-content center
		width 100%
		height 100%
		color #fff
		.menu-item
			display flex
			flex-direction row
			align-items center
			justify-content space-between
			width 30em
			margin-left 20vw
			position relative
			z-index 910
			outline none
			&:hover
				.en
					margin-left .5em
				.jp
					color #fff
				&::after
					background-color #fff
			.en
				margin-right 1rem
				font-size 2.5rem
				letter-spacing .05em
				bold()
				text-transform lowercase
				flex-shrink 0
				order 1
				transition all 200ms ease-out
			.jp
				margin-left 1rem
				letter-spacing .1em
				color hsl(0, 0%, 50%)
				flex-shrink 0
				order 3
				transition all 200ms
			&::before
				content ''
				position absolute
				width 3em
				height 1em
				left -3em
				background-color $blue-10
				transform scaleX(0)
				transform-origin left center
				transition all 200ms ease-in-out
			&::after
				content ''
				width 100%
				height 1px
				background-color hsl(0, 0%, 50%)
				order 2
				transition all 200ms
		& .disabled
			.en, .jp
				color hsl(0, 0%, 20%)
			&:hover .jp
				color hsl(0, 0%, 20%)
			&:hover::after
				background-color hsl(0, 0%, 50%)
		& .nuxt-link-exact-active
			.en
				margin-left .5em
			&::before
				transform scaleX(1)

	.bg-container
		position absolute
		width 100%
		height 100%
		top 0
		display flex
		flex-direction row
		.bg-dummy
			background-color #000
			width 100%
			top 0
			height 0
			transition all 300ms ease-out
			z-index 900
			&.opened
				height 100vh
		for i in (1..5)
			.bg-dummy{i}
				transition-delay (i*100+100)ms
				&.opened
					transition-delay (i*100)ms
	/* .bg-dummy1
		width 25%
		left 0%
		transition-delay 200ms
	.bg-dummy2
		width 25%
		left 25%
		transition-delay 0
	.bg-dummy3
		width 25%
		left 50%
		transition-delay 300ms
	.bg-dummy4
		width 25%
		left 75%
		transition-delay 100ms */
</style>
