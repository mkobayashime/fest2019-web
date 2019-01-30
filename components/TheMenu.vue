<template lang="pug">
	#the-menu
		img.menuIcon(src="~/assets/icon/menu.svg")
</template>

<style lang="stylus" scoped>
#the-menu
	position absolute
	display flex
	align-items flex-start
	justify-content center
	width 70px
	height 100px
	background-color #000
	transition all 200ms ease-out
	&:hover
		height 150px
	.menuIcon
		width 25px
		height 25px
		margin 37.5px 0 0 0
</style>
