<template lang="pug">
	#the-sidebar
		the-menu-btn
		.sidebar-items
			.items-container
				.items-group
					.links
						a(:href="sns.twitter" target="_blank")
							.sidebar-item.fab.fa-twitter
						a(:href="sns.ig" target="_blank")
							.sidebar-item.fab.fa-instagram
						a(:href="sns.fb" target="_blank")
							.sidebar-item.fab.fa-facebook
					p Follow Us
			.items-container
				.items-group
					.links
						a(:href="sns.twitterShare" target="_blank")
							.sidebar-item.fab.fa-twitter
						a(:href="sns.fbShare" target="_blank")
							.sidebar-item.fab.fa-facebook
					p Share On
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
	.sidebar-items
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
				margin 0px -25px 10px 0
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
					font-size 20px
					transition all 200ms ease
					&:hover
						background-color hsl(0, 0%, 80%)
						font-size 23px
				p
					opacity 1
					bold()
					writing-mode vertical-rl
					text-orientation mixed
					transition all 200ms linear
</style>
